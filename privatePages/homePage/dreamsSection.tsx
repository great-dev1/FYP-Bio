import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/customButton';

import sectionImg from 'assets/img/homepage/dreams-section.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const DreamsSection: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.dreamSection} display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='center'>
      <Box display='flex' className='img-section'>
        <Image src={sectionImg} alt='' />
      </Box>
      <Box className='contents-section'>
        <Typography variant='h6' fontSize={25} lineHeight='35px' color='rgba(0,0,0,0.85)' fontWeight={400}>
          Make your dreams come true
        </Typography>
        <Typography variant='h1' color='#000' fontSize={57} lineHeight='68px' fontWeight={600}>
          Create the For You Page of your Dreams!
        </Typography>
        <Typography variant='body1' fontSize={20} lineHeight='33px' color='rgba(0, 0, 0, 0.65)' fontWeight={300}>
          Add your social media links, videos, music, events, pictures, and more. Drive sales and watch your brand grow
        </Typography>
        <CustomButton variant='contained' background='blueGradient' onClick={() => router.push('/claim')}>
          Start Now
        </CustomButton>
      </Box>
    </Box>
  )
}

export default DreamsSection;
