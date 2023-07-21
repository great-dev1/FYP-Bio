import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";
import clsx from 'clsx';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { InstagramIcon, SnapchatIcon, YoutubeOutlineIcon, FanslyIcon, TwitterIcon, LinkUpIcon, ShareIcon, AddUserIcon } from 'components/svg';

import styles from 'assets/jss/components/designMobileStyles';

const useStyles = makeStyles(styles);

interface Props {
  className?: string;
  socialLinks?: any[];
  hideHeroImg?: boolean;
  logoIcon?: React.ReactNode;
  heroImg?: any;
  userAvatar?: any
}

const ClaimMobile: FC<Props> = (props) => {

  const { className, socialLinks, hideHeroImg, logoIcon, heroImg, userAvatar } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.designMobile, classes.claimLinkMobile, { [className ?? '']: className })}>
      <Box display='flex' alignItems='center' justifyContent='space-between' className={clsx('nav-bar', classes.navbar)}>
        {
          logoIcon ? logoIcon : (
            <svg width="63" height="53" viewBox="0 0 63 53" className='logo'>
              <g transform="translate(-135.265 -35.826)">
                <text transform="translate(155.265 60.827)" fill="#fff" fontSize="23" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="22">BIO</tspan></text>
                <rect width="6" height="40" rx="3" transform="translate(135.265 44.827)" fill="#fff" />
              </g>
            </svg>
          )
        }

        <Box className={clsx(classes.topIconBtn, 'top-icon-btns')}>
          <IconButton>
            <AddUserIcon width={16.6} height={17.9} />
          </IconButton>
          <IconButton>
            <ShareIcon width={14.22} height={17.9} />
          </IconButton>
        </Box>
      </Box>
      {
        !hideHeroImg && (
          <Box display='flex' className='hero-image' sx={{ backgroundImage: `url(${heroImg.src})` }}>
          </Box>
        )
      }

      <Box className={classes.contentsInner} px='24px !important'>
        <Box display='flex' className={clsx(classes.userAvatar, 'user-avatar')} mx='auto' position='relative'>
          <Box width='100%' height='100%' sx={{ borderRadius: '50%', backgroundImage: `url(${userAvatar.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </Box>
        </Box>
        <Box className={clsx(classes.userInfoText, 'user-info-text')} display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h6' fontWeight={700} align='center'>
            Vankisha Eden
          </Typography>
          <Typography variant='body1' align='center'>
            Follow me and check all my new updates and love songs !
          </Typography>
        </Box>
        <Box className={clsx(classes.socialLinks, 'social-links')} display='flex' alignItems='center' justifyContent='center'>
          <Link href='/'>
            <InstagramIcon width={20.8} height={20.8} />
          </Link>
          <Link href='/'>
            <SnapchatIcon width={22.34} height={20.87} />
          </Link>
          <Link href='/'>
            <FanslyIcon width={25.4} height={20.8} />
          </Link>
          <Link href='/'>
            <YoutubeOutlineIcon width={25.4} height={18} />
          </Link>
          <Link href='/'>
            <TwitterIcon width={22.9} height={18.74} />
          </Link>
        </Box>
        {
          socialLinks && (
            <Box className='social-link-item-list'>
              {
                socialLinks.map((cell) => (
                  <Box display='flex'
                    alignItems='center'
                    className={clsx(classes.socialBtn, 'social-link-item')}
                    sx={{ background: 'linear-gradient(to right, #D96464, #D23F9B)' }}
                    key={cell.title}
                    position='relative'
                  >
                    <Box className={clsx(classes.socialBtnIcon, 'social-link-item-icon')} zIndex={1}
                      display='flex' alignItems='center' justifyContent='center' position='relative'>
                      {cell.icon}
                    </Box>
                    <Box mr='auto' className='social-link-item-text' position='relative' zIndex={1}>
                      <Typography variant='h6' fontSize={18} fontWeight={700} lineHeight='25px'>
                        {cell.title}
                      </Typography>
                      {
                        cell.description && (
                          <Typography variant='body1'>
                            {cell.description}
                          </Typography>
                        )
                      }
                    </Box>
                    <svg width="21.195" height="18.613" viewBox="0 0 21.195 18.613" className='link-up'>
                      <g transform="translate(1 1.414)">
                        <path d="M10.128,7.24H3V20.2H15.96V13.072M12.72,4H19.2v6.48M19.2,4l-9.072,9.072" transform="translate(-3 -4)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M1504.378,633.889v12.824h16.367l-6.589-6.122-6.334,4.251-2.338-1.02v-3.231l4.294-2.466v-2.083Z" transform="translate(-1500.549 -633.889)" fill="none" />
                      </g>
                    </svg>
                  </Box>
                ))
              }
            </Box>
          )
        }
      </Box>
    </Box>
  )
}

export default ClaimMobile;
