import React, { FC, useState } from 'react';
import clsx from 'clsx';
import timezones from 'timezones.json';
import { Calendar, DayValue } from "react-modern-calendar-datepicker";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import SupportLayout from 'components/layouts/supportLayout';
import CustomImage from 'components/customImage';
import CustomButton from 'components/customButton';
import CustomSelect from 'components/customSelect';
import { BankCashIcon, ClockIcon, LocationIcon, WorldIcon, TimeIcon } from 'components/svg';

import bannerImg from 'assets/img/fypbio/carousel-1.webp';
import avatarImg from 'assets/img/avatar-1.webp';

import styles from 'assets/jss/pages/meetingPageStyles';
const useStyles = makeStyles(styles);

const MeetingPage: FC = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedDay, setSelectedDay] = useState<DayValue>(null);
  const [timezone, setTimeZone] = useState('');
  const [timeSlot, setTimeSlot] = useState<number | null>();

  const timeSlotList = [
    {
      id: 1,
      time: '5:00 ~ 5:15',
      am: false
    },
    {
      id: 2,
      time: '5:15 ~ 5:30',
      am: false
    },
    {
      id: 3,
      time: '5:45 ~ 6:00',
      am: false
    },
    {
      id: 4,
      time: '6:00 ~ 6:15',
      am: false
    },
    {
      id: 5,
      time: '6:15 ~ 6:30',
      am: false
    },
    {
      id: 6,
      time: '6:30 ~ 6:45',
      am: false
    }
  ];

  const handleClickToday = () => {
    setSelectedDay({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    });
  }

  const handleClickTomorrow = () => {
    setSelectedDay({
      day: new Date().getDate() + 1,
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    });
  }

  const handleClickAfterTwoDays = () => {
    setSelectedDay({
      day: new Date().getDate() + 2,
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    });
  }

  return (
    <SupportLayout title='1:1 Meeting'>
      <Box className={classes.wrapper} display='flex' justifyContent='space-between' flexWrap='wrap'>
        <Box className={classes.leftSection}>
          <Typography variant='h1' fontWeight={700} color='#000' className='page-title'>
            Purchase 1:1 Meeting
          </Typography>

          <Box display='flex' className='banner-img'>
            <CustomImage src={bannerImg} alt='' width={994} height={520} mdWidth={994} mdHeight={310} />
          </Box>

          <Box className='user-box' display='flex' alignItems='center'>
            <CustomImage src={avatarImg} alt='' width={28} height={28} mdWidth={25.4} mdHeight={25.4} />
            <Typography variant='body1' color='#AAAAAA'>
              Isabella Adams
            </Typography>
          </Box>

          <Box>
            <Typography variant='h2' fontWeight={600} color='#000' className='call-title'>
              Video Call Title
            </Typography>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' fontWeight={300} className='call-text'>
              {
                isMobile ? `
                This is a sample of what type of content I'm posting on Onlyfans, remember it's only Samples hihi, if you want to have full nude package check my products below and subscribe to get your full satisfaction
                ` : `
                This is a sample of what type of content I'm posting on Onlyfans, remember it's only Samples hihi, if you package check my
              products below and subscribe to get your full satisfaction This is a sample of whatring on Onlyfans, remember it's only Sam
              This is a sample of what type of content I'm posting on Onlyfans, remember it's only Samples hihi, if you package check my
              products below and subscribe to get your full satisfaction This is a sample of whatring on Onlyfans, remember it's only Sam
              This is a sample of what type of content I'm posting on Onlyfans, remember it's only Samples hihi, if you package check my
              ples hihi, if you want to have full nude package check my products below and subscribe to get your full satisfaction
                `
              }
            </Typography>
          </Box>

          <Box className='properties' display='flex' flexWrap='wrap'>
            <Box className='property-item' display='flex' alignItems='center'>
              <Box className='property-icon' display='flex'>
                <BankCashIcon color='#000' width={32.5} height={22.4} />
              </Box>
              <Typography variant='body1' color='#474461'>
                $ 10.00
              </Typography>
            </Box>

            <Box className='property-item' display='flex' alignItems='center'>
              <Box className='property-icon' display='flex'>
                <ClockIcon color='#000' width={25.4} height={25.4} />
              </Box>
              <Typography variant='body1' color='#474461'>
                12th August, 2022
              </Typography>
            </Box>

            <Box className='property-item' display='flex' alignItems='center'>
              <Box className='property-icon' display='flex'>
                <LocationIcon color='#000' width={22.5} height={27.8} />
              </Box>
              <Typography variant='body1' color='#474461'>
                {isMobile ? 'Zoom' : 'Call on Zoom'}
              </Typography>
            </Box>

            <Box className='property-item' display='flex' alignItems='center'>
              <Box className='property-icon' display='flex'>
                <WorldIcon color='#000' />
              </Box>
              <Typography variant='body1' color='#474461'>
                GMT+2
              </Typography>
            </Box>

            <Box className='property-item' display='flex' alignItems='center'>
              <Box className='property-icon' display='flex'>
                <TimeIcon color='#000' />
              </Box>
              <Typography variant='body1' color='#474461'>
                15:00 min
              </Typography>
            </Box>

            <Box className='property-item' display='flex' alignItems='center'>
              <Box className='property-icon' display='flex'>
                <TimeIcon color='#000' />
              </Box>
              <Typography variant='body1' color='#474461'>
                6:00 - 6:15 PM
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={classes.rightSection}>
          <Box className={classes.timezone}>
            <CustomSelect
              fullWidth
              options={timezones.map((timezone) => ({
                data: timezone.value,
                label: timezone.text
              }))}
              placeholder='Select Time Zone'
              value={timezone}
              variant='outlined'
              onChange={(e) => setTimeZone(e.target.value as string)}
            />
          </Box>

          <Box className={classes.calendar} position='relative'>
            <Box className={classes.daysControl} display='flex' position='absolute'>
              <Button variant='contained' onClick={handleClickToday}>
                Today
              </Button>
              <Button variant='contained' onClick={handleClickTomorrow}>
                Tomorrow
              </Button>
              <Button variant='contained' onClick={handleClickAfterTwoDays}>
                In 2 Days
              </Button>
            </Box>
            <Calendar
              value={selectedDay}
              onChange={setSelectedDay}
              calendarClassName='calendar-root'
              calendarTodayClassName='calendar-today'
            />
          </Box>
          {
            !!selectedDay && (
              <Box className={clsx(classes.timeSlot, 'animate__animated animate__fadeIn')}>
                <Typography variant='h5' color='#000'>
                  Select Time Slot
                </Typography>
                <Grid container columnSpacing={{ xs: '13px', lg: '17px' }} rowSpacing={{ xs: '12.4px', lg: 2 }}>
                  {
                    timeSlotList.map((cell) => (
                      <Grid item xs={6} sm={4} md={6} lg={6} xl={4} key={cell.id}>
                        <Button
                          variant='outlined'
                          fullWidth
                          className={clsx(classes.timeSlotCell, { [classes.activeTimeSlot]: timeSlot === cell.id })}
                          onClick={() => setTimeSlot(cell.id)}
                        >
                          {cell.time}
                          <span className='sub-text'>{cell.am ? 'AM' : 'PM'}</span>
                        </Button>
                      </Grid>
                    ))
                  }
                </Grid>
              </Box>
            )
          }

          <CustomButton variant='contained' background='blueGradient' boxShadow='none' fullWidth className={classes.proceedBtn}>
            Proceed
          </CustomButton>
        </Box>
      </Box>
    </SupportLayout>
  )
}

export default MeetingPage;
