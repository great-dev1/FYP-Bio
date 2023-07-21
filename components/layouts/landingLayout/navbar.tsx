import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';

import CustomButton from 'components/customButton';
import UserMenuBtn from './userMenuBtn';

import threeLine from 'assets/img/support/three-lines.svg';

import styles from 'assets/jss/components/landingLayoutStyles';
const useStyles = makeStyles(styles);

const Navbar: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  const onClickLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLSpanElement, MouseEvent>, path: string) => {
    e.preventDefault();
    router.push(path);
  }

  return (
    <Box className={clsx('navbar', classes.navbar)} display='flex' alignItems='center' justifyContent='space-between' position='relative' flexWrap='wrap'>
      <Link href='/' underline='none'
        className={clsx('nav-logo')}
        onClick={(e) => {
          e.preventDefault();
          router.push('/');
        }}
      >
        <svg width="99" height="83" viewBox="0 0 99 83" className='pc-logo'>
          <g transform="translate(-135 -36)">
            <text transform="translate(166 75)" fontSize="36" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="35">BIO</tspan></text>
            <rect width="9" height="60" rx="3" transform="translate(135 50)" fill="#a854f5" />
          </g>
        </svg>

        <svg width="63" height="53" viewBox="0 0 63 53" className='mobile-logo'>
          <g transform="translate(-135.265 -35.827)">
            <text transform="translate(155.265 60.827)" fontSize="23" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="22">BIO</tspan></text>
            <rect width="6" height="40" rx="3" transform="translate(135.265 44.827)" fill="#a854f5" />
          </g>
        </svg>
      </Link>
      <Box className={clsx('navbar-links', classes.links)} display='flex'>
        <Link href='/' underline='none'>
          Features
        </Link>
        <Link href='/' underline='none' onClick={(e) => onClickLink(e, '/explore')}>
          Explore
        </Link>
        <Link href='/' underline='none'>
          Premium
        </Link>
        <Link href='/' underline='none'>
          Learn
        </Link>
      </Box>
      <Box>
        {
          (router.pathname === '/bundle' || router.pathname === '/purchase') ? <UserMenuBtn /> : (
            <>
              <Link href='/' underline='none' className={clsx(classes.signInBtn, 'sign-btn')}
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/claim/login');
                }}>
                Sign In
              </Link>
              <CustomButton variant='contained' background='blueGradient' boxShadow='none'
                className={clsx(classes.startBtn, 'start-btn')} onClick={() => router.push('/claim')}>
                Start Now
              </CustomButton>
            </>
          )
        }
        <IconButton className={classes.toggleBtn}>
          <Image src={threeLine} width={22.8} height={10} alt='' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Navbar;
