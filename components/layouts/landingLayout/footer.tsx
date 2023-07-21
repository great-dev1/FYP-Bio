import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import styles from 'assets/jss/components/landingLayoutStyles';
const useStyles = makeStyles(styles);

const Footer: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.footer} display='flex' flexWrap='wrap' justifyContent='space-between'>
      <Box className='copy-info-box'>
        <Link variant='button' display='flex'>
          <svg width="102" height="85" viewBox="0 0 102 85" className='pc-logo'>
            <g transform="translate(-135 -36.471)">
              <text transform="translate(168 76.471)" fontSize="37" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="36">BIO</tspan></text>
              <rect width="10" height="63" rx="3" transform="translate(135 51.471)" fill="#a854f5" />
            </g>
          </svg>

          <svg width="70.889" height="57" viewBox="0 0 70.889 57" className='mobile-logo'>
            <g transform="translate(-135 -38.471)">
              <text transform="translate(158.889 65.471)" fontSize="25" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="24">BIO</tspan></text>
              <rect width="7.239" height="45.607" rx="3" transform="translate(135 46.254)" fill="#a854f5" />
            </g>
          </svg>
        </Link>
        <Typography variant='body1' fontSize={17} fontWeight={300} lineHeight='24px' color='rgba(0, 0, 0, 0.4)'>
          Where visionaries build empires
        </Typography>
        <Typography variant='h6' fontSize={17} fontWeight={400} lineHeight='24px' color='rgba(85, 85, 85, 0.71)'>
          Copyright @FYP.BIO 2022. All Rights Reserved.
        </Typography>
      </Box>
      <Box className='link-box'>
        <Typography variant='h6' fontSize={18} fontWeight={700} color='#000' lineHeight='25px'>
          General
        </Typography>
        <Box className='link-list' display='flex' flexDirection='column'>
          <Link href='/' underline='hover' onClick={(e) => {
            e.preventDefault();
            router.push('/claim/login');
          }}>
            Login
          </Link>
          <Link href='/' underline='hover'>
            Get Started
          </Link>
          <Link href='/' underline='hover'>
            Terms of Service
          </Link>
        </Box>
      </Box>

      <Box className='link-box'>
        <Typography variant='h6' fontSize={18} fontWeight={700} color='#000' lineHeight='25px'>
          Community
        </Typography>
        <Box className='link-list' display='flex' flexDirection='column'>
          <Link href='/' underline='hover'>
            Blog
          </Link>
          <Link href='/' underline='hover'>
            About Us
          </Link>
          <Link href='/' underline='hover'>
            Fyp.bio vs Link Tree
          </Link>
        </Box>
      </Box>

      <Box className='link-box'>
        <Typography variant='h6' fontSize={18} fontWeight={700} color='#000' lineHeight='25px'>
          Contact Us
        </Typography>
        <Box className='link-list' display='flex' flexDirection='column'>
          <Link href='/' underline='hover'>
            Email Us
          </Link>
          <Link href='/' underline='hover'>
            Discord
          </Link>
          <Link href='/' underline='hover'>
            Twitter
          </Link>
        </Box>
      </Box>

      <Typography variant='body1' className='copy-text' fontSize={14} lineHeight='20px' fontWeight={700} color='rgba(85, 85, 85, 0.71)'>
        Copyright @FYP.BIO 2022. All Rights Reserved.
      </Typography>
    </Box>
  )
}

export default Footer;
