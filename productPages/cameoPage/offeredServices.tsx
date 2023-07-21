import React, { FC } from 'react';
import { scroller } from "react-scroll";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { ShareFileIcon, CameraIcon } from 'components/svg';

import styles from 'assets/jss/pages/cameoPageStyles';
const useStyles = makeStyles(styles);

const OfferedServices: FC = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const enableScroller = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClickVideoBtn = () => {
    if (enableScroller) {
      scroller.scrollTo('cameo-for-form', {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: 0
      });
    }
  }

  return (
    <Box className={classes.offeredServices}>
      <Box display='flex' alignItems='center' justifyContent='space-between' className='header'>
        <Typography variant='h6' fontWeight={700} color='#000'>
          Offered Services
        </Typography>
        <Button variant='contained'>
          <ShareFileIcon color='#000' />
          Share
        </Button>
      </Box>
      <Button variant='contained' fullWidth className='book-btn' onClick={handleClickVideoBtn}>
        <CameraIcon />
        <span className='btn-text'>{isMobile ? 'Personalized Video' : 'Book Personalized Video'}</span>
        <span className='price'>$100.00</span>
      </Button>
      <Button variant='contained' fullWidth className='book-btn business-btn' onClick={handleClickVideoBtn}>
        <CameraIcon color='#DDDDDD' />
        <span className="btn-text">
          {isMobile ? 'Business Video' : 'Book Business Video'}
        </span>
        <span className='price'>$500.00</span>
      </Button>
    </Box>
  )
}

export default OfferedServices;
