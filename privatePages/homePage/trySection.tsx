import React, { FC } from 'react';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/customButton';
import HeaderAnimation from './headerAnimation/headerAnimation';

import sectionImg from 'assets/img/homepage/try-section-img.webp';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const TrySection: FC = () => {

  const classes = useStyles();
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const router = useRouter();

  return (
    <Box className={classes.trySection} display='flex' alignItems='center' justifyContent='space-between'>
      <Box className='animation-box'>
        <HeaderAnimation />
      </Box>
      <Box className='left-section'>
        <Typography variant='h6' fontSize={25} fontWeight={400} lineHeight='35px' color='rgba(0, 0, 0, 0.85)'>
          { isMobile ? `We're Better` : 'Better Interface, No Risk, No Fees'}
        </Typography>
        <Typography variant='h1' fontSize={57} lineHeight='80px' color='#000' fontWeight={600}>
          Why Try Us?
        </Typography>
        <Typography variant='body1' fontSize={20} lineHeight='33px' fontWeight={300} color='rgba(0,0,0,0.65)'>
          Still paying for features you need? We offer the most advanced customization without any hidden fees.
        </Typography>
        <CustomButton variant='contained' background='blueGradient' boxShadow='none' onClick={() => router.push('/claim')}>
          {isMobile ? `Start Now` : 'Switch Now'}
        </CustomButton>
      </Box>
      <Box className='right-section' position='relative' display='flex'>
        <Image src={sectionImg} alt='' />
      </Box>
    </Box>
  )
}

export default TrySection;
