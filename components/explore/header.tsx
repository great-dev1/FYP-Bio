import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import CustomButton from 'components/customButton';

import arrowRightIcon from 'assets/img/homepage/arrow-right.svg';

import styles from 'assets/jss/pages/explorePageStyles';
const useStyles = makeStyles(styles);

const Header: FC = () => {

  const classes = useStyles();

  return (
    <Box className={classes.header} position='relative'>
      <Box className='header-contents' position='relative' mx='auto'>
        <Typography variant='h1' color='#fff' fontSize={50} lineHeight='70px' fontWeight={700} align='center'>
          Buy Content, Shoutouts, and Calls from Creators
        </Typography>
        <Typography variant='body1' color='rgba(255, 255, 255, 0.83)' fontSize={21} lineHeight='41px' align='center'>
          Fyp.bio helps creators increase followers and build revenue streams.
          Get shoutouts from creators, schedule calls, and more.
        </Typography>
        <Box display='flex' justifyContent='center'>
          <CustomButton variant='contained' fullWidth className='create-btn'>
            Sign Up And Create Your Page
          </CustomButton>
        </Box>

        <Link variant='button' underline='none' className='lean-more'>
          Learn More
          <Image src={arrowRightIcon} alt='' width={16} height={12} />
        </Link>
      </Box>
    </Box>
  )
}

export default Header;
