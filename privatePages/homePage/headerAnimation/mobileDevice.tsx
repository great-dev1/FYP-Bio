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
  heroImg?: any;
  avatarImg?: any;
  socialLinks: any[];
  hideSocial?: boolean;
  socialLinkColor?: string;
}

const MobileDevice: FC<Props> = (props) => {

  const { className, username, bio, heroImg, avatarImg, socialLinks, hideSocial, socialLinkColor } = props;
  const classes = useStyles();

  return (
    <Box
      className={clsx(
        classes.headerMobile,
        'mobile-device',
        {
          [className ?? '']: className
        }
      )}
    >
      <Box className='hero-img' sx={{ backgroundImage: `url(${heroImg?.src})` }}>
      </Box>

      <Box className='mobile-contents'>
        <Box display='flex' className={clsx('user-avatar')} mx='auto' position='relative'>
          <Box sx={{
            backgroundImage: `url(${avatarImg.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            borderRadius: '50%'
          }} width='100%' height='100%'></Box>
        </Box>

        <Box className={clsx('user-info-text')} display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h6' fontWeight={700} align='center' color='#fff' fontSize={20} lineHeight='28px'>
            {username}
          </Typography>
          <Typography variant='body1' align='center' color='rgba(255, 255, 255, 0.93)' fontWeight={300} fontSize={12} lineHeight='15px'>
            {bio}
          </Typography>
        </Box>

        {
          !hideSocial && (
            <Box className={clsx('social-links')} display='flex' alignItems='center' justifyContent='center'>
              <Link href='/'>
                <InstagramIcon width={17.45} height={17.45} color={socialLinkColor ?? '#fff'} />
              </Link>
              <Link href='/'>
                <SnapchatIcon width={18.69} height={17.45} color={socialLinkColor ?? '#fff'} />
              </Link>
              <Link href='/'>
                <FanslyIcon width={21.22} height={17.45} color={socialLinkColor ?? '#fff'} />
              </Link>
              <Link href='/'>
                <YoutubeOutlineIcon width={21.26} height={15} color={socialLinkColor ?? '#fff'} />
              </Link>
              <Link href='/'>
                <TwitterIcon width={19.14} height={15.67} color={socialLinkColor ?? '#fff'} />
              </Link>
            </Box>
          )
        }

        <Box className='social-link-item-list'>
          {
            socialLinks.map((cell, index) => (
              <Box display='flex'
                alignItems='center'
                className={clsx('social-link-item', { ['first-line']: index === 0 })}
                position='relative' key={cell.title}
                mb='14px'
              >
                <Box className={clsx('social-link-item-icon')} zIndex={1} mr='20px'
                  display='flex' alignItems='center' justifyContent='center' position='relative'>
                  {cell.icon}
                </Box>
                <Box mr='auto' className='social-link-item-text' position='relative' zIndex={1}>
                  <Typography variant='h6' fontSize={13} fontWeight={700} lineHeight='19px' color='#fff'>
                    {cell.title}
                  </Typography>
                </Box>
                <LinkUpIcon width={16.89} height={13.55} color='#fff' />
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default MobileDevice;
