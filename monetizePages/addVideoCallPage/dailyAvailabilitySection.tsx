import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

import DailyAvailabilityItem from './dailyAvailabilityItem';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

const DailyAvailabilitySection: FC = () => {

  const classes = useStyles();

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <Box className={classes.videoDailyAvailability}>
      <Box className='title-box'>
        <Typography variant='h6' fontWeight={600} color='#474461' fontSize={16} lineHeight='24px'>
          Set daily availability
        </Typography>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' fontSize={14} fontWeight={300} lineHeight='20px'>
          Set the time intervals you are available daily
        </Typography>
      </Box>
      <Grid container columnSpacing='78px' rowSpacing={{ xs: '20px', md: 4 }}>
        {
          weekDays.map((cell) => (
            <Grid item xs={12} md={12} lg={12} xl={6} key={cell}>
              <DailyAvailabilityItem day={cell} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default DailyAvailabilitySection;
