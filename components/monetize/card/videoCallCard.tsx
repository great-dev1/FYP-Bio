import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import CustomButton from 'components/customButton';

import userAvatar from 'assets/img/avatar-1.webp';
import phoneIcon from 'assets/img/monetize/phone.svg';

import styles from 'assets/jss/components/monetizeStyles';
const useStyles = makeStyles(styles);

interface Props {
  onClickConfirm: () => void;
  onClickReject: () => void;
}

const VideoCallCard: FC<Props> = (props) => {
 
  const { onClickConfirm, onClickReject } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.textCard, classes.videoCallCard)}>
      <Box className='card-header' display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
        <Box>
          <Box display='flex' alignItems='center'>
            <Image src={phoneIcon} alt='' width={26.6} height={26.6} />
            <Typography variant='h3' fontWeight={700} color='#000' className='product-title' sx={{ marginLeft: '13px' }}>
              Video Shoutout
            </Typography>
          </Box>

          <Box display='flex' alignItems='center' className='date-time'>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
              22th Aug, 2021
            </Typography>
            <span></span>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
              09:00 AM
            </Typography>
          </Box>
        </Box>

        <Box className='revenue-value'>
          <Typography variant='body1' color='rgba(0, 0, 0, 1)'>
            Revenue
          </Typography>
          <Typography variant='h4' fontWeight={500} color='#000'>
            $1,500
          </Typography>
        </Box>
      </Box>

      <Box className='timeline' display='flex' alignItems='center' justifyContent='space-between'>
        <Typography variant='body1' fontWeight={600} color='rgba(0, 0, 0, 0.65)'>
          09:00 AM
        </Typography>
        <Box></Box>
        <Typography variant='body1' fontWeight={600} color='rgba(0, 0, 0, 0.65)'>
          09:15 AM
        </Typography>
      </Box>

      <Box className='customer' display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.65)' fontWeight={300}>
          Customer
        </Typography>
        <Box className='user-name' display='flex' alignItems='center'>
          <Image src={userAvatar} alt='' width={22} height={22} />
          <Link underline='hover' href='/' target='_blank'>
            Isabella Khan
          </Link>
        </Box>
      </Box>

      <Box className='customer-fee'>
        <Grid container rowSpacing={{ xs: '13px', md: '14.6px' }}>
          <Grid item xs={4}>
            <Box>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
                Email
              </Typography>
              <Typography variant='h5' fontWeight={500} color='rgba(0, 0, 0, 0.65)'>
                info@mail
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
                Fee
              </Typography>
              <Typography variant='h5' fontWeight={500} color='rgba(0, 0, 0, 0.65)'>
                $20.00
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
                Phone
              </Typography>
              <Typography variant='h5' fontWeight={500} color='rgba(0, 0, 0, 0.65)'>
                053784114
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
                Call Time
              </Typography>
              <Typography variant='h5' fontWeight={500} color='rgba(0, 0, 0, 0.65)'>
                09:00 AM
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
                Call Date
              </Typography>
              <Typography variant='h5' fontWeight={500} color='rgba(0, 0, 0, 0.65)'>
                22th Aug, 2021
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className='action-btns' display='flex' justifyContent='space-between'>
        <CustomButton variant='contained' background='blueGradient' boxShadow='none' className='confirm-btn' onClick={onClickConfirm}>
          Confirm
        </CustomButton>
        <CustomButton variant='contained' boxShadow='none' className='reject-btn' onClick={onClickReject}>
          Reject
        </CustomButton>
      </Box>
    </Box>
  )
}

export default VideoCallCard;
