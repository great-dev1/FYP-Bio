import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

import logoSvg from 'assets/img/black-logo.png';
import addUser from 'assets/img/add-user.svg';
import shareIcon from 'assets/img/share.svg';
import avatarImg from 'assets/img/avatar-1.webp';
import instagramIcon from 'assets/img/instagram.svg';
import snapchatIcon from 'assets/img/snapchat.svg';
import fanslyIcon from 'assets/img/fansly.svg';
import youtubeIcon from 'assets/img/youtube.svg';
import twitterIcon from 'assets/img/twitter.svg';
import whiteInstagramIcon from 'assets/img/white-instagram.svg';
import linkUpIcon from 'assets/img/link-up.svg';
import vimeoIcon from 'assets/img/vimeo.svg';
import linkUpBlackIcon from 'assets/img/link-up-black.svg';

import styles from 'assets/jss/components/mobileDeviceStyles';

const useStyles = makeStyles(styles);

const MobileDevice: FC = () => {

  const classes = useStyles();

  return (
    <Box className={classes.mobileDevice}>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <svg width="58" height="48" viewBox="0 0 58 48">
          <g transform="translate(0 2)">
            <text transform="translate(18 21)" fontSize="21" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="20">BIO</tspan></text>
            <rect width="5" height="36" rx="2.5" transform="translate(0 6)" />
          </g>
        </svg>
        <Box className={classes.topIconBtn}>
          <IconButton sx={{ marginRight: '12px' }}>
            <Image src={addUser} width={15.36} height={18.07} alt='' />
          </IconButton>
          <IconButton>
            <Image src={shareIcon} width={13.15} height={18.07} alt='' />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ padding: '45px 0 52.6px' }}>
        <Box textAlign='center'>
          <Image src={avatarImg} unoptimized={true} width={120} height={120} alt='Akram Sayed' />
        </Box>
        <Box className={classes.userInfoText} display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h6' fontWeight={700} fontSize={23} lineHeight='41px' align='center'>
            Akram Sayed
          </Typography>
          <Typography variant='body1' fontSize={14} lineHeight='18px' align='center'>
            Follow me and learn all about soccer tips and tricks
          </Typography>
        </Box>
        <Box className={classes.socialLinks} display='flex' alignItems='center' justifyContent='center'>
          <Link href='/'>
            <Image src={instagramIcon} width={19.3} height={21.08} alt='' />
          </Link>
          <Link href='/'>
            <Image src={snapchatIcon} width={20.67} height={21.08} alt='' />
          </Link>
          <Link href='/'>
            <Image src={fanslyIcon} width={23.47} height={21.08} alt='' />
          </Link>
          <Link href='/'>
            <Image src={youtubeIcon} width={23.51} height={18.23} alt='' />
          </Link>
          <Link href='/'>
            <Image src={twitterIcon} width={21.17} height={18.93} alt='' />
          </Link>
        </Box>
      </Box>
      <Box>
        <Box display='flex' alignItems='center' className={classes.instagramBtn}>
          <Box width={45} height={42} mr={3} className={classes.instagramIcon} display='flex' alignItems='center' justifyContent='center'>
            <Image src={whiteInstagramIcon} width={21.48} height={21.48} alt='' />
          </Box>
          <Box mr='auto'>
            <Typography variant='h6' fontSize={16} fontWeight={700} lineHeight='28px'>
              Instagram
            </Typography>
            <Typography variant='body1' fontSize={10} lineHeight={1}>
              Best Monthly Subscription
            </Typography>
          </Box>
          <Image src={linkUpIcon} width={23.63} height={16} alt='' />
        </Box>

        <Box className={classes.vimeoBtn} display='flex' alignItems='center'>
          <Box width={45} height={42} mr={3} className={classes.vimeoIcon} display='flex' alignItems='center' justifyContent='center'>
            <Image src={vimeoIcon} width={21.48} height={21.48} alt='' />
          </Box>
          <Typography variant='h6' fontSize={14} fontWeight={700} lineHeight='25px' sx={{ marginRight: 'auto' }}>
            Vimeo
          </Typography>
          <Image src={linkUpBlackIcon} width={18.68} height={16.37} alt='' />
        </Box>
      </Box>
      <Box textAlign='center' className={clsx(classes.footer, 'mobile-device-footer')}>
        <Typography align='center' variant='body1' fontSize={13} lineHeight='29px'>
          Powered by
        </Typography>
        <Image src={logoSvg} unoptimized={true} width={45} height={36} alt='FYP BIO' />
      </Box>
    </Box>
  )
}

export default MobileDevice;
