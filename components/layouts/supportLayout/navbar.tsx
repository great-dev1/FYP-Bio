import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';

import { LogoIcon } from 'components/svg';
import CustomButton from 'components/customButton';
import UserMenuBtn from './userMenuBtn';

import threeLine from 'assets/img/support/three-lines.svg';

import styles from 'assets/jss/components/supportLayoutStyles';
const useStyles = makeStyles(styles);

const Navbar: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={clsx('navbar', classes.navbar)} display='flex' alignItems='center' justifyContent='space-between' position='relative' flexWrap='wrap'>
      <Link href='/' underline='none'
        className={clsx('nav-logo', { [classes.bundlePageLogo]: router.pathname === '/bundle' })}
        onClick={(e) => {
          e.preventDefault();
          router.push('/');
        }}
      >
        <LogoIcon />
      </Link>
      <Box className={clsx('navbar-links', classes.links)} display='flex'>
        {
          router.pathname === '/support' ? (
            <>
              <Link href='/' underline='none'>
                Features
              </Link>
              <Link href='/' underline='none'>
                Explore
              </Link>
              <Link href='/' underline='none'>
                Premium
              </Link>
              <Link href='/' underline='none'>
                Learn
              </Link>
            </>
          ) : (
            <>
              <Link href='/' underline='none'>
                My Purchases
              </Link>
              <Link href='/' underline='none'>
                Subscriptions
              </Link>
            </>
          )
        }
      </Box>
      <Box>
        {
          (router.pathname === '/bundle' || router.pathname === '/purchase') ? <UserMenuBtn /> : (
            <>
              <Link href='/' underline='none' className={clsx(classes.signInBtn, 'sign-btn')}>
                Sign In
              </Link>
              <CustomButton variant='contained' background='blueGradient' boxShadow='none' className={clsx(classes.startBtn, 'start-btn')}>
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
