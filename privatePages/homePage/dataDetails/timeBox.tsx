import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';

import timeIcon from 'assets/img/homepage/time-clock.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const TimeBox: FC = () => {

  const classes = useStyles();

  return (
    <Box className={clsx(classes.timeBox, 'data-item')}>
      <Box display='flex' className='icon-box'>
        <CustomImage src={timeIcon} alt='' width={74} height={72} mdWidth={34.17} mdHeight={33.16} />
      </Box>
      <Box className='contents'>
        <Typography variant='h6' fontSize={20} lineHeight='25px' color='#000' fontWeight={600}>
          Time<br />
          to Click
        </Typography>
        <Typography variant='body1' fontSize={33} lineHeight='47px' fontWeight={300} color='#000'>
          8.3s
        </Typography>
      </Box>
    </Box>
  )
}

export default TimeBox;
