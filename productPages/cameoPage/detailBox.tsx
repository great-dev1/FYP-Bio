import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';

import userImg from 'assets/img/user-avatar.webp';
import powerChargeIcon from 'assets/img/product/power_charge_icon.svg';
import timeIcon from 'assets/img/product/cameo-time.svg';

import styles from 'assets/jss/pages/cameoPageStyles';
const useStyles = makeStyles(styles);

const DetailBox: FC = () => {

  const classes = useStyles();

  return (
    <Box className={classes.detailBox} display='flex' alignItems='center'>
      <Box className='user-avatar' display='flex'>
        <CustomImage src={userImg} alt='' width={138} height={142} mdWidth={97} mdHeight={100} />
      </Box>
      <Box className='detail-content'>
        <Box className='title' display='flex' alignItems='center' position='relative'>
          <Typography variant='h6' color='#000' fontWeight={700}>
            Sammi Sweetheart
          </Typography>
          <span></span>
          <Typography variant='body1' color='#000' fontWeight={600}>
            MTV -Jersey Shore
          </Typography>
        </Box>
        <Typography variant='body1' className='description' color='rgba(0, 0, 0, 0.56)'>
          Your Jersey Shore Sweetheart ♥️ Let me give your bestie or family member a shout out, Happy Birthday celebration
          video or even say a line from the show Jersey Shore ☺️
        </Typography>
        <Box display='flex' className='details'>
          <Box display='flex' alignItems='center' className='detail-item'>
            <CustomImage src={powerChargeIcon} alt='' width={21.87} height={30.54} mdWidth={12.6} mdHeight={17.56} />
            <Box className='detail-item-content'>
              <Typography variant='h6' fontWeight={700} color='#000'>
                24hr Delivery
              </Typography>
              <Typography variant='body1' color='#000'>
                Available to book
              </Typography>
            </Box>
          </Box>

          <Box display='flex' alignItems='center' className='detail-item'>
            <CustomImage src={timeIcon} alt='' width={26.84} height={26.84} mdWidth={18.86} mdHeight={18.86} />
            <Box className='detail-item-content'>
              <Typography variant='h6' fontWeight={700} color='#000'>
                0:52
              </Typography>
              <Typography variant='body1' color='#000'>
                Max video length
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailBox;
