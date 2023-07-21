import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import timezones from 'timezones.json'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

import CustomButton from 'components/customButton';
import TabContentsHeader from './tabContentsHeader';
import CustomDatePicker from 'components/customDatePicker';
import CustomSelect from 'components/customSelect';
import CustomTimePicker from 'components/customTimePicker';
import CountDownbox from 'components/countDownbox';

import clockIcon from 'assets/img/clock.svg';
import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
}

const CountdownContents: FC<Props> = (props) => {

  const { handleClose } = props;

  const classes = useStyles();

  const [timezone, setTimeZone] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(true);
  }, [])

  return (
    <Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TabContentsHeader
          icon={<Image src={clockIcon} width={18} height={18} alt='' />}
          title='Countdown'
          handleRemove={() => {
            setExpanded(false);
            setTimeout(() => {
              handleClose();
            }, 265);
          }}
        />
        <Box className={classes.countCountDown} display='flex' justifyContent='center'>
          <CountDownbox />
        </Box>
        <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
          <Box className={classes.countDownDate}>
            <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.activeUntilDateLabel}>
              <Typography variant='body1'>
                Set Active Until Date
              </Typography>
              <Button>
                Clear
              </Button>
            </Box>
            <CustomDatePicker placeholder='Set Active Until Date' />
          </Box>
          <Box className={classes.countdownTime}>
            <CustomTimePicker placeholder='09:00 AM' />
          </Box>
          <Box className={classes.countdownTimezone}>
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
        <CustomButton
          background='blueGradient'
          fullWidth
          className={classes.redirectBtn}
          onClick={() => {
            setExpanded(false);
            setTimeout(() => {
              handleClose();
            }, 265);
          }}
        >
          Activate Countdown
        </CustomButton>
      </Collapse>
    </Box>
  )
}

export default CountdownContents;
