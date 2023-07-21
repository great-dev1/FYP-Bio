import React, { FC, useState } from 'react';
import Image from 'next/image';
import dayjs, { Dayjs } from 'dayjs';
import { makeStyles } from "@mui/styles";

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Box from '@mui/material/Box';

import anchorDownIcon from 'assets/img/anchor-down.svg';

import styles from 'assets/jss/components/datePickerStyles';
const useStyles = makeStyles(styles);

interface Props {
  placeholder?: string;
}

const CustomTimePicker: FC<Props> = (props) => {

  const { placeholder } = props;
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-10-13T09:00:00'));

  // console.log(`${dayjs(value).get('hour')}:${dayjs(value).get('minute')}:${dayjs(value).get('second')}`);  

  return (
    <Box className={classes.timePicker}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          value={value}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          components={{
            OpenPickerIcon: () => <Image src={anchorDownIcon} alt='' width={12.1} height={6.9} />
          }}
          renderInput={(params) => <TextField onClick={() => setOpen(true)} fullWidth {...params} inputProps={{...params.inputProps, placeholder: placeholder ?? '' }}/>
          }
        />
      </LocalizationProvider>
    </Box>
  )
}

export default CustomTimePicker;
