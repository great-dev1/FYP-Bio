import React, { FC, useState, MouseEvent, useEffect } from "react";
import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import Image, { StaticImageData } from "next/image";
import { makeStyles } from "@mui/styles";

import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import {
  DateRangePicker,
  DateRange
} from "@mui/x-date-pickers-pro/DateRangePicker";

import CustomImage from "components/customImage";

import expandIcon from "assets/img/analytics/expand.png";
import menuIcon from "assets/img/analytics/menu.png";

import styles from "assets/jss/pages/analyticsPageStyles";
const useStyles = makeStyles(styles);

interface Props extends BoxProps {
  handleChangeDay: (val: any) => void;
  customImage?: StaticImageData;
}

const CardActions: FC<Props> = props => {
  const { handleChangeDay, customImage, ...boxProps } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEx, setAnchorEx] = useState<null | HTMLElement>(null);

  const [selectedType, setSelectedType] = useState("Last 7 Days");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [openPicker, setOpenPicker] = useState(false);
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);

  const open = Boolean(anchorEl);
  const openEx = Boolean(anchorEx);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickEx = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEx(event.currentTarget);
  };

  const handleClose = () => {
    setOpenPicker(false);
    setAnchorEl(null);
  };

  const handleCloseEx = () => {
    setAnchorEx(null);
  };

  const handleChange = (val: string) => {
    let _startDate = "";
    let _endDate = dayjs(Date.now()).format("MMM DD, YYYY");
    if (val === "Today") {
      _startDate = dayjs(Date.now()).format("MMM DD, YYYY");
      _endDate = "";
    } else if (val === "Yesterday") {
      _startDate = dayjs(Date.now())
        .add(-1, "day")
        .format("MMM DD, YYYY");
      _endDate = "";
    } else if (val === "Last 7 Days") {
      _startDate = dayjs(Date.now())
        .add(-7, "day")
        .format("MMM DD, YYYY");
    } else if (val === "Last 28 Days") {
      _startDate = dayjs(Date.now())
        .add(-28, "day")
        .format("MMM DD, YYYY");
    } else if (val === "Last 90 Days") {
      _startDate = dayjs(Date.now())
        .add(-90, "day")
        .format("MMM DD, YYYY");
    }
    handleChangeDay({
      start: _startDate,
      end: _endDate
    });
    setStartDate(_startDate);
    setEndDate(_endDate);
    setSelectedType(val);
  };

  useEffect(() => {
    setStartDate(dayjs(Date.now()).add(-7, "day").format("MMM DD, YYYY"));
    setEndDate(dayjs(Date.now()).format("MMM DD, YYYY"));
  }, [])

  return (
    <Box
      display="flex"
      alignItems="center"
      className={clsx("card-action", classes.cardAction)}
      {...boxProps}
    >
      <Typography variant="body1">Results for</Typography>
      <Box>
        <Button
          aria-controls={open ? "day-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="select-day-btn"
        >
          {selectedType}
          <Image src={expandIcon} alt="" width={9.5} height={5} />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "day-button"
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          className={classes.cardActionMenus}
        >
          <MenuItem disabled className='date-range-label'>
            <Box>
              <Typography variant="body1">{selectedType}</Typography>
              <Typography variant="body1">
                {`${startDate}${endDate !== "" ? ` - ${endDate}` : ""}`}
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleChange("Today")} className={clsx({['selected-date']: selectedType === 'Today'})}>Today</MenuItem>
          <MenuItem onClick={() => handleChange("Yesterday")} className={clsx({['selected-date']: selectedType === 'Yesterday'})}>
            Yesterday
          </MenuItem>
          <MenuItem onClick={() => handleChange("Last 7 Days")} className={clsx({['selected-date']: selectedType === 'Last 7 Days'})}> 
            Last 7 Days
          </MenuItem>
          <MenuItem onClick={() => handleChange("Last 28 Days")} className={clsx({['selected-date']: selectedType === 'Last 28 Days'})}>
            Last 28 Days
          </MenuItem>
          <MenuItem onClick={() => handleChange("Last 90 Days")} className={clsx({['selected-date']: selectedType === 'Last 90 Days'})}>
            Last 90 Days
          </MenuItem>
          <MenuItem>
            <Typography
              variant="body1"
              sx={{ width: "100%" }}
              onClick={() => setOpenPicker(true)}
              className={clsx({['selected-date']: selectedType === 'Custom days'})}
            >
              Custom...
            </Typography>
          </MenuItem>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              calendars={1}
              value={value}
              onChange={newValue => {
                setValue(newValue);
                if (newValue[0] && newValue[1]) {
                  handleChangeDay({
                    start: dayjs(newValue[0]).format("MMM DD, YYYY"),
                    end: dayjs(newValue[1]).format("MMM DD, YYYY")
                  });
                  setSelectedType("Custom days");
                  setStartDate(dayjs(newValue[0]).format("MMM DD, YYYY"));
                  setEndDate(dayjs(newValue[1]).format("MMM DD, YYYY"));
                  setOpenPicker(false);
                }
              }}
              closeOnSelect={true}
              open={openPicker}
              renderInput={() => <React.Fragment></React.Fragment>}
            />
          </LocalizationProvider>
        </Menu>
      </Box>
      <Box>
        <Button
          className="export-btn"
          // id="export-button"
          aria-controls={openEx ? "export-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openEx ? "true" : undefined}
          onClick={handleClickEx}
        >
          <CustomImage
            src={customImage ? customImage : menuIcon}
            alt=""
            width={4}
            height={16}
            mdWidth={2.5}
            mdHeight={10}
          />
        </Button>
        <Menu
          // id="export-menu"
          anchorEl={anchorEx}
          open={openEx}
          onClose={handleCloseEx}
          MenuListProps={{
            "aria-labelledby": "export-button"
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <MenuItem onClick={handleCloseEx}>Export to CSV</MenuItem>
          <MenuItem onClick={handleCloseEx}>Export to Spreadsheet</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default CardActions;
