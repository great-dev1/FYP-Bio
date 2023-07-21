import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import styles from 'assets/jss/components/globalSummaryStyles';
const useStyles = makeStyles(styles);


interface Props {
  termValue: number;
  setTermValue: (val: number) => void;
  firstValue: string;
  firstLabel: string;
  firstIcon: React.ReactNode;
  secondValue: string;
  secondLabel: string;
  secondIcon: React.ReactNode;
  thirdValue: string;
  thirdLabel: string;
  thirdIcon: React.ReactNode;
}

const GlobalSummary: FC<Props> = (props) => {

  const { termValue, setTermValue, firstValue, firstLabel, firstIcon, secondValue, secondLabel, secondIcon,
    thirdValue, thirdLabel, thirdIcon
  } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeDuration = (val: number) => {
    setTermValue(val);
    handleClose();
  }

  return (
    <Box className={classes.globalSummary}>
      <Box className={classes.header} display='flex' justifyContent='space-between' alignItems='center'>
        <Typography variant='h6'>
          Global Summary
        </Typography>
        <Box className={classes.durationOption}>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {`${termValue} Days`}
            <ExpandMoreIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => handleChangeDuration(1)}>1 day</MenuItem>
            <MenuItem onClick={() => handleChangeDuration(7)}>7 days</MenuItem>
            <MenuItem onClick={() => handleChangeDuration(30)}>30 days</MenuItem>
            <MenuItem onClick={() => handleChangeDuration(90)}>90 days</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Grid container rowSpacing='26px'>
        <Grid item xs={12}>
          <Box className={classes.summaryCard} display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
              <Typography variant='h3' fontWeight={700}>
                {firstValue}
              </Typography>
              <Typography variant='body1'>
                {firstLabel}
              </Typography>
            </Box>
            <IconButton>
              {firstIcon}
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.summaryCard} display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
              <Typography variant='h3' fontWeight={700}>
                {secondValue}
              </Typography>
              <Typography variant='body1'>
                {secondLabel}
              </Typography>
            </Box>
            <IconButton>
              {secondIcon}
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.summaryCard} display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
              <Typography variant='h3' fontWeight={700}>
                {thirdValue}
              </Typography>
              <Typography variant='body1'>
                {thirdLabel}
              </Typography>
            </Box>
            <IconButton>
              {thirdIcon}
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default GlobalSummary;
