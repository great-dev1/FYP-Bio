import React, { FC, useState, useEffect } from 'react';
import { animated, useSpring } from "react-spring";
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  TiktokIcon, VimeoIcon, TwitchIcon,
  SoundcloudIcon, OnlyFansIcon
} from 'components/svg';
import MobileDevice from './mobileDevice';

import userAvatar1 from 'assets/img/homepage/user-avatar-1.webp';
import threeDHeroImg from 'assets/img/fypbio/carousel-1.webp';
import videoPlay from 'assets/img/homepage/video-play.svg';
import subscribeForm from 'assets/img/homepage/header-subscribe.svg';
import videoIcon from 'assets/img/homepage/header-video.svg';
import airplain from 'assets/img/homepage/airplain.svg';
import snowHeroImg from 'assets/img/homepage/snow-mobile-hero.webp';
import userAvatar3 from 'assets/img/homepage/user-avatar-2.webp';
import twoPhotos from 'assets/img/homepage/two-photos.svg';
import header_2_1 from 'assets/img/homepage/header-2-1.svg';
import camera from 'assets/img/homepage/header-camera.svg';
import userThemeHeroImg from 'assets/img/homepage/front-view-professional-kitchen.webp';
import userAvatar4 from 'assets/img/homepage/dog.webp';
import header_3_1 from 'assets/img/homepage/header-3-1.svg';
import header_3_2 from 'assets/img/homepage/header-3-2.svg';
import header_3_3 from 'assets/img/homepage/header-3-3.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const HeaderAnimation: FC = () => {

  const classes = useStyles();
  const [showIndex, setShowIndex] = useState(0);
  const [rotateIndex, setRotateIndex] = useState(0);

  const firstDeviceLinks = [
    {
      title: 'OnlyFans',
      icon: <OnlyFansIcon color='#313744' width={19.23} height={19.56} />
    },
    {
      title: 'Vimeo',
      icon: <VimeoIcon color='#313744' width={17.74} height={15.3} />
    },
    {
      title: 'Twitch',
      icon: <TwitchIcon color='#313744' width={15.64} height={18.25} />
    },
    {
      title: 'Tiktok',
      icon: <TiktokIcon color='#313744' width={15.85} height={18.25} />
    },
    {
      title: 'Soundcloud',
      icon: <SoundcloudIcon color='#313744' width={17.91} height={8.96} />
    }
  ];

  const secondDeviceLinks = [
    {
      title: 'OnlyFans',
      icon: <OnlyFansIcon color='#fff' width={19.23} height={19.56} />
    },
    {
      title: 'Vimeo',
      icon: <VimeoIcon color='#fff' width={17.74} height={15.3} />
    },
    {
      title: 'Twitch',
      icon: <TwitchIcon color='#fff' width={15.64} height={18.25} />
    },
    {
      title: 'Tiktok',
      icon: <TiktokIcon color='#fff' width={15.85} height={18.25} />
    },
    {
      title: 'Soundcloud',
      icon: <SoundcloudIcon color='#fff' width={17.91} height={8.96} />
    }
  ];

  const thirdDeviceLinks = [
    {
      title: 'OnlyFans',
      icon: <OnlyFansIcon color='#64A6DC' width={19.23} height={19.56} />
    },
    {
      title: 'Vimeo',
      icon: <VimeoIcon color='#64A6DC' width={17.74} height={15.3} />
    },
    {
      title: 'Twitch',
      icon: <TwitchIcon color='#64A6DC' width={15.64} height={18.25} />
    },
    {
      title: 'Tiktok',
      icon: <TiktokIcon color='#64A6DC' width={15.85} height={18.25} />
    },
    {
      title: 'Soundcloud',
      icon: <SoundcloudIcon color='#64A6DC' width={17.91} height={8.96} />
    }
  ];

  const AnimatedBox = animated(Box);

  const [springs, api] = useSpring({
    config: {
      duration: 500
    },
    rotateY: rotateIndex * -180
  }, [rotateIndex]);

  const handleClick = () => {
    setShowIndex((showIndex + 1) % 3);
    setRotateIndex(rotateIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIndex((showIndex + 1) % 3);
      setRotateIndex(rotateIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [showIndex, rotateIndex])

  return (
    <AnimatedBox position='relative' width='100%' height='100%' style={{ ...springs }} onClick={handleClick}
      className={classes.headerAnimation}
    >
      <Box className={classes.firstHeaderWrapper} position='absolute'
        sx={{
          top: 0,
          left: 0,
          opacity: showIndex === 0 ? 1 : 0,
          transition: 'opacity .5s',
          transform: `rotateY(${rotateIndex % 2 === 0 ? 0 : '180deg'})`
        }}
      >
        <MobileDevice
          username='Vankisha Eden'
          bio='Follow me and check all my new updates and love songs !'
          heroImg={threeDHeroImg}
          avatarImg={userAvatar1}
          socialLinks={firstDeviceLinks}
          className={clsx('first-device', { 'animate__animated animate__fadeIn animate__fast animate__delay-250-ms': showIndex === 0 })}
        />
        <Box
          className={clsx('video-card', { 'animate__animated animate__fadeIn animate__fast animate__delay-1s': showIndex === 0 })}
          display='flex' position='absolute'>
          <Box display='flex' alignItems='center' justifyContent='space-between' mt='auto' width='100%'>
            <Typography variant='h6' fontSize={16} lineHeight='24px' color='#fff' fontWeight={600}>
              Traveling to Morocco
            </Typography>
            <Typography variant='body1' color='#fff' fontSize={12} lineHeight='18px'>
              23:05
            </Typography>
          </Box>
          <Box className='play-btn' display='flex' position='absolute'>
            <Image src={videoPlay} width={50} height={50} alt='' />
          </Box>
        </Box>

        <Box
          className={clsx('subscribe-form', { 'animate__animated animate__fadeIn animate__fast animate__delay-750-ms': showIndex === 0 })}
          display='flex' position='absolute'>
          <Image src={subscribeForm} alt='' width={305} height={132} />
        </Box>

        <Box display='flex'
          className={clsx('video', { 'animate__animated animate__fadeIn animate__fast animate__delay-1500ms': showIndex === 0 })} position='absolute'>
          <Image src={videoIcon} alt='' width={80} height={80} />
        </Box>

        <Box
          className={clsx('airplane', { 'animate__animated animate__fadeIn animate__fast animate__delay-500-ms': showIndex === 0 })}
          display='flex' position='absolute'>
          <Image src={airplain} alt='' width={380} height={262.9} />
        </Box>
      </Box>

      <Box className={classes.secondHeaderWrapper} position='absolute'
        sx={{
          top: 0,
          left: 0,
          opacity: showIndex === 1 ? 1 : 0,
          transition: 'opacity .5s',
          transform: `rotateY(${rotateIndex % 2 === 0 ? 0 : '180deg'})`
        }}
      >
        <MobileDevice
          username='Alessandra'
          bio='Modelling and Fitness'
          heroImg={snowHeroImg}
          avatarImg={userAvatar3}
          socialLinks={secondDeviceLinks}
          className={clsx('second-device', { 'animate__animated animate__fadeIn animate__fast animate__delay-250-ms': showIndex === 1 })}
        />
        <Box
          className={clsx('image-card', { 'animate__animated animate__fadeIn animate__fast animate__fast animate__delay-750-ms': showIndex === 1 })}
          position='absolute'>
          <Box className='img-box' position='relative'>
            <Typography variant='body1' color='#fff' fontSize={16} lineHeight='24px' fontWeight={500}>
              $9.99
            </Typography>
          </Box>
          <Box display='flex' alignItems='center' className='card-content'>
            <Box className='icon' display='flex' mr='4px'>
              <Image src={twoPhotos} alt='' width={25} height={23} />
            </Box>
            <Box>
              <Typography variant='h6' fontSize={16} lineHeight='24px' color='#000' fontWeight={500}>
                Exclusive Pics
              </Typography>
              <Typography variant='body1' fontSize={11} lineHeight='14px' color='#000'>
                Subscribers only
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display='flex'
          className={clsx('top-right-img', { 'animate__animated animate__fadeIn animate__fast animate__delay-1s': showIndex === 1 })}
          position='absolute'>
          <Image src={header_2_1} width={80} alt='' height={80} />
        </Box>
        <Box
          className={clsx('camera', { 'animate__animated animate__fadeIn animate__fast animate__delay-500-ms': showIndex === 1 })}
          display='flex' position='absolute'>
          <Image src={camera} alt='' width={260} height={322} />
        </Box>
      </Box>

      <Box className={classes.thirdHeaderWrapper} position='absolute'
        sx={{
          top: 0,
          left: 0,
          opacity: showIndex === 2 ? 1 : 0,
          transition: 'opacity .5s',
          transform: `rotateY(${rotateIndex % 2 === 0 ? 0 : '180deg'})`
        }}
      >
        <MobileDevice
          username='Elite League'
          bio='Gaming & Esports Org'
          heroImg={userThemeHeroImg}
          avatarImg={userAvatar4}
          socialLinks={thirdDeviceLinks}
          className={clsx('third-device', { 'animate__animated animate__fadeIn animate__fast animate__delay-250-ms': showIndex === 2 })}
          socialLinkColor='#64A6DC'
        />
        <Box
          className={clsx('top-left', { 'animate__animated animate__fadeIn animate__fast animate__delay-750-ms': showIndex === 2 })}
          display='flex' position='absolute'>
          <Image src={header_3_1} alt='' width={290} height={190} />
        </Box>
        <Box
          className={clsx('left-middle', { 'animate__animated animate__fadeIn animate__fast animate__delay-1s': showIndex === 2 })}
          display='flex' position='absolute'>
          <Image src={header_3_2} width={80} height={80} alt='' />
        </Box>
        <Box position='absolute' display='flex'
          className={clsx('right-bottom', { 'animate__animated animate__fadeIn animate__fast animate__delay-500-ms': showIndex === 2 })}>
          <Image src={header_3_3} alt='' width={310} height={300} />
        </Box>
      </Box>
    </AnimatedBox>
  )
}

export default HeaderAnimation;
