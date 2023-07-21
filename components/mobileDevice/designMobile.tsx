import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import Carousel from "react-multi-carousel";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { LogoIcon } from 'components/svg';

import addUser from 'assets/img/design/add-user-white.svg';
import shareIcon from 'assets/img/design/share-white.svg';
import carouselImg from 'assets/img/design/design-mobile-carousel-img.png';
import avatarImg from 'assets/img/design/user-avatar.png';
import instagramIcon from 'assets/img/design/instagram-white.svg';
import snapchatIcon from 'assets/img/design/snapchat-white.svg';
import fanslyIcon from 'assets/img/design/fansly-white.svg';
import youtubeIcon from 'assets/img/design/youtube-white.svg';
import twitterIcon from 'assets/img/design/twitter-white.svg';
import linkUpIcon from 'assets/img/design/link-up-white.svg';
import faceBookIcon from 'assets/img/design/facebook-pink.svg';
import discordIcon from 'assets/img/design/discord-pink.svg';

import styles from 'assets/jss/components/designMobileStyles';

const useStyles = makeStyles(styles);

export const carouselConfig = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 992, min: 600 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};

const DesignMobile: FC = () => {

  const classes = useStyles();

  return (
    <Box className={classes.designMobile}>
      <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.navbar}>
        <svg width="72" height="60" viewBox="0 0 72 60">
          <g transform="translate(-0.15 1.783)">
            <text transform="translate(23.15 26.217)" fill="#fff" fontSize="26" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="25">BIO</tspan></text>
            <rect width="7" height="46" rx="3" transform="translate(0.15 7.217)" fill="#fff" />
          </g>
        </svg>
        <Box className={classes.topIconBtn}>
          <IconButton sx={{ marginRight: '12px' }}>
            <Image src={addUser} width={18.7} height={20.2} alt='' />
          </IconButton>
          <IconButton>
            <Image src={shareIcon} width={16} height={20.2} alt='' />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.carouselBox}>
        <Carousel
          responsive={carouselConfig}
          infinite={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {
            [1, 2, 3].map((cell: any) => (
              <Box key={cell} display='flex' className={classes.carouselCell}>
                <Image src={carouselImg} alt='' width={467} height={455} />
              </Box>
            ))
          }
        </Carousel>
      </Box>
      <Box className={classes.contentsInner}>
        <Box display='flex' className={classes.userAvatar} mx='auto' position='relative'>
          <Image src={avatarImg} alt='' width={145} height={145} />
        </Box>
        <Box className={classes.userInfoText} display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h6' fontWeight={700} align='center'>
            Vankisha Eden
          </Typography>
          <Typography variant='body1' align='center'>
            Follow me and check all my new updates and love songs !
          </Typography>
        </Box>
        <Box className={classes.socialLinks} display='flex' alignItems='center' justifyContent='center'>
          <Link href='/'>
            <Image src={instagramIcon} width={23.6} height={23.6} alt='' />
          </Link>
          <Link href='/'>
            <Image src={snapchatIcon} width={25.24} height={23.6} alt='' />
          </Link>
          <Link href='/'>
            <Image src={fanslyIcon} width={28.7} height={23.4} alt='' />
          </Link>
          <Link href='/'>
            <Image src={youtubeIcon} width={28.7} height={20.4} alt='' />
          </Link>
          <Link href='/'>
            <Image src={twitterIcon} width={25.9} height={21.2} alt='' />
          </Link>
        </Box>
        <Box>
          <Box display='flex' alignItems='center' className={classes.socialBtn} sx={{ background: 'linear-gradient(to right, #D96464, #D23F9B)' }}>
            <Box className={classes.socialBtnIcon} display='flex' alignItems='center' justifyContent='center'>
              <Image src={faceBookIcon} width={12.4} height={24.6} alt='' />
            </Box>
            <Box mr='auto'>
              <Typography variant='h6' fontSize={18} fontWeight={700} lineHeight='25px'>
                Facebook
              </Typography>
              <Typography variant='body1' fontSize={12} lineHeight={1}>
                Best Premium Content
              </Typography>
            </Box>
            <Image src={linkUpIcon} width={23} height={18.3} alt='' />
          </Box>

          <Box display='flex' alignItems='center' className={classes.socialBtn} sx={{ background: 'linear-gradient(to right, #D96464, #D23F9B)' }}>
            <Box className={classes.socialBtnIcon} display='flex' alignItems='center' justifyContent='center'>
              <Image src={discordIcon} width={25.3} height={19.3} alt='' />
            </Box>
            <Box mr='auto'>
              <Typography variant='h6' fontSize={18} fontWeight={700} lineHeight='25px'>
                Discord
              </Typography>
              <Typography variant='body1' fontSize={12} lineHeight={1}>
                Exclusive Content Listed There!!
              </Typography>
            </Box>
            <Image src={linkUpIcon} width={23} height={18.3} alt='' />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DesignMobile;
