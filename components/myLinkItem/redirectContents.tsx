import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
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

import redirectIcon from 'assets/img/redirect.svg';
import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
}

const RedirectContents: FC<Props> = (props) => {

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
        icon={<Image src={redirectIcon} width={23} height={23} alt='' />}
        title='Redirect'
        handleRemove={() => {
          setExpanded(false);
          setTimeout(() => {
            handleClose();
          }, 265);
        }}
      />
      
        <Box display='flex' justifyContent='space-between' flexWrap='wrap' className={classes.redirectText}>
          <Box className={clsx(classes.scheduleText)}>
            <Typography variant='h6' fontWeight={600}>
              Set Redirect Time
            </Typography>
            <Typography variant='body1'>
              Set an end time for your redirect. Your FYP.bio link will automatically restore when the redirect expire
            </Typography>
          </Box>
          <Box className={classes.redirectCountdown}>
            <CountDownbox />
          </Box>
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
          Remove Redirect
        </CustomButton>
      </Collapse>
    </Box>
  )
}

export default RedirectContents;
