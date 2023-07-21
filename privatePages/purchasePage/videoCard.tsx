import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CustomImage from 'components/customImage';
import { ClockIcon, CalendarIcon, EyeIcon, PlayArrowIcon } from 'components/svg';

import userAvatar from 'assets/img/avatar-1.webp';

import styles from 'assets/jss/pages/purchasePageStyles';
const useStyles = makeStyles(styles);

interface Props {
  title: string;
  author: string;
  date: string;
  time: string;
  handleOpenVideo: () => void;
}

const VideoCard: FC<Props> = (props) => {

  const { title, author, date, time, handleOpenVideo } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.imgCard, classes.videoCard)}>
      <Box className='card-video' display='flex' position='relative'>
        <video loop autoPlay={false} muted>
          <source src='/video/video.mp4' type='video/mp4' />
        </video>
        <Button variant='contained' className='play-btn' onClick={handleOpenVideo}>
          <PlayArrowIcon />
        </Button>
        <Box position='absolute' className='card-actions' display='flex'>
          <Link
            href='/'
            className='eye'
            onClick={(e) => {
              e.preventDefault();
              handleOpenVideo();
            }}
          >
            <EyeIcon color='#000' />
          </Link>
        </Box>
      </Box>
      <Link href='/' fontWeight={700} className='card-title' underline='hover' target='_blank'>
        {title}
      </Link>
      <Box display='flex' alignItems='center' className='card-user'>
        <CustomImage src={userAvatar} alt='' width={28} height={28} mdWidth={26} mdHeight={26} />
        <Link href='/' underline='hover' target='_blank'>
          {`by ${author}`}
        </Link>
      </Box>
      <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
        <Box display='flex' alignItems='center' width='60%'>
          <CalendarIcon color='#200E32' />
          <Typography variant='body1' className='date-time-value' color='#474461'>
            {date}
          </Typography>
        </Box>
        <Box display='flex' alignItems='center' width='40%'>
          <ClockIcon color='#000' />
          <Typography variant='body1' color='#474461' className='date-time-value'>
            {time}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default VideoCard;
