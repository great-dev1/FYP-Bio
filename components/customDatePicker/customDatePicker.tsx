import React, { FC, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import { makeStyles } from "@mui/styles";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';

import calendarIcon from 'assets/img/calendar.svg';
import anchorDownIcon from 'assets/img/anchor-down.svg';

import styles from 'assets/jss/components/datePickerStyles';

const useStyles = makeStyles(styles);

interface Props {
  label?: string;
  className?: string;
  onChange?: (value: string) => void;
  disablePast?: boolean;
  maxDate?: Date;
  defaultDate?: string;
  error?: boolean;
  name?: string;
  placeholder?: string;
}

const CustomDatePicker: FC<Props> = (props) => {

  const classes = useStyles();

  const { className, onChange, defaultDate, placeholder } = props

  const [open, setOpen] = useState(false);

  const getDefaultDate = (dateString?: string) => {
    if (dateString) {
      const [year, month, day] = dateString.split('-')
      return new Date([year, month.padStart(2, '0'), day.padStart(2, '0')].join('-'))
    } else {
      return null
    }
  }

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(getDefaultDate(defaultDate));

  const handleChange = (newValue: Date | null) => {
    setSelectedDate(newValue);
    if (onChange) {
      if (newValue === null) {
        onChange('');
      } else {
        onChange(newValue.toString());
      }
    }
  };

  return (
    <Box className={clsx(classes.datepicker, { className: className })}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          inputFormat="yyyy-MM-dd"
          value={selectedDate}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          onChange={handleChange}
          components={{
            OpenPickerIcon: () => <Image src={anchorDownIcon} alt='' width={12.1} height={6.9} />
          }}
          renderInput={(props) => {
            const { inputRef } = props;
            return (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={calendarIcon} onClick={() => setOpen(true)} alt='' width={24.36} height={24.21} className={classes.startIcon} />
                <TextField
                  onClick={() => setOpen(true)}
                  ref={inputRef}
                  {...props}
                  inputProps={{
                    ...props.inputProps,
                    placeholder: placeholder ?? ''
                  }}
                />
              </Box>
            )
          }}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default CustomDatePicker;
