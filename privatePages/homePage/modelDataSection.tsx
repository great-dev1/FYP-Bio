import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DataDetailsAnimation from './dataDetails/dataDetailsAnimation';

import profileInfo from 'assets/img/homepage/profile-info.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const ModelDataSection: FC = () => {

  const classes = useStyles();

  return (
    <Box display='flex' justifyContent='space-between' className={classes.modelDataSection} flexWrap='wrap'>
      <Box className='model-section' position='relative'>
        <Box display='flex' className='image-box' justifyContent='center'>
          <Image src={profileInfo} alt='' />
        </Box>
        <Box className='desc' position='relative'>
          <Typography variant='h3' color='#000' fontSize={30} lineHeight='43px' fontWeight={500}>
            Built For OnlyFan Models
          </Typography>
          <Typography variant='body1' fontSize={20} fontWeight={300} lineHeight='32px' color='rgba(0, 0, 0, 0.65)'>
            We have created templates and customizability for OnlyFan models to help you maximize your revenue by engaging your fans
          </Typography>
        </Box>
      </Box>
      <Box className='data-section' position='relative'>
        <DataDetailsAnimation />
        <Box className='desc' position='relative'>
          <Typography variant='h3' color='#000' fontSize={30} lineHeight='43px' fontWeight={500}>
            Data is Power
          </Typography>
          <Typography variant='body1' fontSize={20} fontWeight={300} lineHeight='32px' color='rgba(0, 0, 0, 0.65)'>
            Access the most advanced analytics that track clicks, impressions, referrals, retention, location, and more
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ModelDataSection;
