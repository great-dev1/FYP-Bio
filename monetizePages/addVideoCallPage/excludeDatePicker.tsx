import React, { FC, useState } from 'react';
import clsx from 'clsx';

import { makeStyles } from "@mui/styles";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  label?: string;
  className?: string;
  onChange: (value: Date | null) => void;
  disablePast?: boolean;
  maxDate?: Date;  
  error?: boolean;
  name?: string;
  placeholder?: string;
  value: Date | null;
}

const ExcludeDatePicker: FC<Props> = (props) => {

  const classes = useStyles();

  const { className, onChange, value, placeholder } = props

  const [open, setOpen] = useState(false);

  return (
    <Box className={clsx(classes.excludeDatePicker, 'date-picker', { className: className })}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          inputFormat='dd MMM, yyyy'
          value={value}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          onChange={onChange}
          renderInput={(props) => {
            const { inputRef } = props;
            return (
              <TextField
                fullWidth
                onClick={() => setOpen(true)}
                ref={inputRef}
                {...props}
                inputProps={{
                  ...props.inputProps,
                  placeholder: placeholder ?? ''
                }}
              />
            )
          }}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default ExcludeDatePicker;
