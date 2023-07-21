import React, { FC, useState } from 'react';
import timezones from 'timezones.json'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CustomDatePicker from 'components/customDatePicker';
import CustomSelect from 'components/customSelect';
import CustomTimePicker from 'components/customTimePicker';

import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

interface Props {
  label: string;
}

const ScheduleTime: FC<Props> = (props) => {

  const { label } = props;
  const classes = useStyles();
  const [timezone, setTimeZone] = useState('');

  return (
    <Box className={classes.scheduleTime}>
      <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.scheduleHeader}>
        <Typography variant='body1'>
          {label}
        </Typography>
        <Button>
          Clear
        </Button>
      </Box>
      <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
        <Box className={classes.scheduleDate}>
          <CustomDatePicker placeholder={label === 'Activate On' ? 'Activation Date' : 'Deactivation Date'} />
        </Box>
        <Box className={classes.scheduleTimeField}>
          <CustomTimePicker placeholder='09:00 AM' />
        </Box>
        <Box className={classes.scheduleTimezone}>
          <CustomSelect
            options={timezones.map((timezone) => ({
              data: timezone.value,
              label: timezone.text
            }))}
            placeholder='GMT'
            value={timezone}
            onChange={(e) => setTimeZone(e.target.value as string)}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ScheduleTime;
