import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

import { InstagramIcon, SnapchatIcon, YoutubeOutlineIcon, FanslyIcon, TwitterIcon, LinkUpIcon, ShareIcon, AddUserIcon } from 'components/svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

interface Props {
  className?: string;
  username: string;
  bio: string;
  iconColor: 'white' | 'black';
  heroImg?: any;
  avatarImg?: any;
  socialLinks: any[];
  socialIconColor: string;
  size?: string;
}

const MobileDevice: FC<Props> = (props) => {

  const { className, username, bio, iconColor, heroImg, avatarImg, socialLinks, socialIconColor, size } = props;
  const classes = useStyles();

  const iconColors = { 'white': '#fff', 'black': '#000' }

  return (
    <Box
      className={clsx(
        classes.mobileDevice,
        'mobile-device',
        {
          [className ?? '']: className,
          ['large-size']: size === 'large',
          ['medium-size']: size === 'medium',
          ['small-size']: size === 'small'
        }
      )}
    >
      <Box display='flex' alignItems='center' justifyContent='space-between' className={clsx('nav-bar')}>
        <Link href='/' underline='none' className='logo-link'>
          <svg width="63" height="53" viewBox="0 0 63 53" className='logo-icon'>
            <g transform="translate(-135.265 -35.826)">
              <text transform="translate(155.265 60.827)" fill={iconColors[iconColor]} fontSize="23" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="22">BIO</tspan></text>
              <rect width="6" height="40" rx="3" transform="translate(135.265 44.827)" fill={iconColors[iconColor]} />
            </g>
          </svg>
        </Link>

        <Box className='top-icon-btns' display='flex'>
          <IconButton>
            <AddUserIcon width={16.6} height={17.9} color={iconColors[iconColor]} />
          </IconButton>
          <IconButton>
            <ShareIcon width={14.22} height={17.9} color={iconColors[iconColor]} />
          </IconButton>
        </Box>
      </Box>

      {
        heroImg && (
          <Box className='hero-img' sx={{ backgroundImage: `url(${heroImg?.src})` }}>
          </Box>
        )
      }

      <Box className='mobile-contents'>
        <Box display='flex' className={clsx('user-avatar', { ['top-level']: !heroImg })} mx='auto' position='relative'>
          <Box sx={{
            backgroundImage: `url(${avatarImg.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            borderRadius: '50%'
          }} width='100%' height='100%'></Box>
        </Box>

        <Box className={clsx('user-info-text')} display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h6' fontWeight={700} align='center' color='#fff'>
            {username}
          </Typography>
          <Typography variant='body1' align='center' color='rgba(255, 255, 255, 0.93)' fontWeight={300}>
            {bio}
          </Typography>
        </Box>

        <Box className={clsx('social-links')} display='flex' alignItems='center' justifyContent='center'>
          <Link href='/'>
            <InstagramIcon width={20.8} height={20.8} color={socialIconColor} />
          </Link>
          <Link href='/'>
            <SnapchatIcon width={22.34} height={20.87} color={socialIconColor} />
          </Link>
          <Link href='/'>
            <FanslyIcon width={25.4} height={20.8} color={socialIconColor} />
          </Link>
          <Link href='/'>
            <YoutubeOutlineIcon width={25.4} height={18} color={socialIconColor} />
          </Link>
          <Link href='/'>
            <TwitterIcon width={22.9} height={18.74} color={socialIconColor} />
          </Link>
        </Box>

        <Box className='social-link-item-list'>
          {
            socialLinks.map((cell, index) => (
              <Box display='flex'
                alignItems='center'
                className={clsx('social-link-item', { ['has-back-img']: index === 0 })}
                position='relative' key={cell.title}
              >
                <Box className={clsx('social-link-item-icon')} zIndex={1}
                  display='flex' alignItems='center' justifyContent='center' position='relative'>
                  {cell.icon}
                </Box>
                <Box mr='auto' className='social-link-item-text' position='relative' zIndex={1}>
                  <Typography variant='h6' fontSize={18} fontWeight={700} lineHeight='25px'>
                    {cell.title}
                  </Typography>
                  <Typography variant='body1'>
                    {cell.subText}
                  </Typography>
                </Box>
                <LinkUpIcon width={20.2} height={16.2} color={iconColor} />
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default MobileDevice;
