import React, { FC, ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import Head from "next/head";
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import NavLogo from './navLogo';

import reviewImg from 'assets/img/quote-left-svgrepo-com.png';
import instagramIcon from 'assets/img/instagram-color.svg';
import tiktokIcon from 'assets/img/tiktok.svg';
import twitterIcon from 'assets/img/twitter-blue.svg';
import snapChatIcon from 'assets/img/snapchat-color.svg';
import dollarImg from 'assets/img/fypbio/dollar.webp';

import styles from 'assets/jss/components/claimLayoutStyles';
const useStyles = makeStyles(styles);

interface Props {
  children?: ReactNode;
  title?: string;
  step: number;
  cardImage: StaticImageData;
  mobileDevice?: ReactNode;
  socialLinks?: any[];
  className?: string;
}

const ClaimLayout: FC<Props> = (props) => {

  const { children, title, step, cardImage, mobileDevice, socialLinks, className } = props;

  const classes = useStyles();
  const router = useRouter();

  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>
      <Box className={clsx(classes.layout, { [className ?? '']: className })} display='flex' position='relative'>
        <Box className={clsx(classes.leftSection, 'left-section')}>
          <Box className={classes.navbar} position='relative'>
            <Link href='/' className='nav-logo' underline='none'>
              <NavLogo />
            </Link>
            <Box display='flex'>
              {
                [...Array(4)].map((_, i) => (
                  <Box className={clsx(classes.stepper, { [classes.activeStep]: step > i })} key={i}></Box>
                ))
              }
            </Box>
          </Box>
          <Box className={clsx(classes.contents, 'contents-inner')}>
            {children}
          </Box>
        </Box>
        <Box className={clsx(classes.rightSection)} position='relative'>
          <Box position='absolute' className={classes.reviewImg} display='flex'>
            <Image src={reviewImg} unoptimized={true} width={206} height={206} alt='' />
          </Box>
          <Box className={classes.rightContents} ml='auto' position='relative'>
            <Typography variant='h3' fontWeight={700}>
              Claim Your Digital <br />Identity
            </Typography>
            <Typography variant='body1'>
              Join Thousands of Creators who use FYP.bio to maximize their potential
            </Typography>
            <Box className={classes.socialLinks} ml='auto' display='flex' flexDirection='column' alignItems='end'>
              <Link variant='button'>
                <Image src={instagramIcon} alt='' width={23.18} height={23.18} />
              </Link>
              <Link variant='button'>
                <Image src={tiktokIcon} alt='' width={27} height={27} />
              </Link>
              <Link variant='button'>
                <Image src={snapChatIcon} alt='' width={28} height={28} />
              </Link>
              <Link variant='button'>
                <Image src={twitterIcon} alt='' width={29} height={29} />
              </Link>
            </Box>
          </Box>
          <Box className={classes.footerLogo} position='absolute' onClick={() => router.push('/')} display='flex' alignItems='center'>
            <svg width="60" height="51" viewBox="0 0 60 51">
              <g transform="translate(-134.877 -35.803)">
                <text transform="translate(153.876 59.803)" fill="#fff" fontSize="22" fontFamily="Gilroy" fontWeight="700">
                  <tspan x="0" y="0">FYP.</tspan><tspan x="0" y="21">BIO</tspan></text>
                <rect width="6" height="36" rx="3" transform="translate(134.876 44.803)" fill="#fff" />
              </g>
            </svg>
          </Box>
          <Box position='absolute' className={clsx(classes.claimImg, classes.firstClaim)} display='flex'>
            {mobileDevice}
          </Box>

          <Box position='absolute' className={clsx(classes.claimImg, classes.secondClaim)} display='flex'>
            <Box width='100%' className={clsx('sorcial-group', classes.socialGroup)}>
              {
                socialLinks?.map((cell: any) => (
                  <Box display='flex'
                    alignItems='center'
                    className={clsx(classes.socialBtn, 'social-link-item')}
                    sx={{ background: 'linear-gradient(to right, #D96464, #D23F9B)' }}
                    key={cell.title}
                  >
                    <Box className={clsx(classes.socialBtnIcon, 'social-link-item-icon')} display='flex' alignItems='center' justifyContent='center'>
                      {cell.icon}
                    </Box>
                    <Box mr='auto' className='social-link-item-text'>
                      <Typography variant='h6' fontSize={12} fontWeight={700} lineHeight='17px'>
                        {cell.title}
                      </Typography>
                    </Box>
                    <svg width="16.744" height="15.043" viewBox="0 0 16.744 15.043">
                      <g transform="translate(1 1.414)">
                        <path d="M8.557,6.526H3v10.1H13.1V11.072M10.578,4h5.052V9.052m0-5.052L8.557,11.072" transform="translate(-3 -4)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M1504.378,633.889v10h12.759L1512,639.114l-4.938,3.314-1.823-.8v-2.519l3.347-1.922v-1.624Z" transform="translate(-1501.393 -633.889)" fill="none" />
                      </g>
                    </svg>
                  </Box>
                ))
              }
            </Box>
          </Box>

          <Box position='absolute' className={clsx(classes.claimImg, classes.thirdClaim)} display='flex'>
            <Box className={clsx(classes.imageCard, 'image-card')} width='100%'>
              <Box display='flex' className='img-box' sx={{ background: `url(${cardImage.src})` }}>
              </Box>
              <Typography variant='h6' fontWeight={700} lineHeight='21px' fontSize={15} color='#000' sx={{ marginBottom: '4px' }}>
                Nude Images
              </Typography>
              <Typography variant='body1' lineHeight='13px' fontSize='10px' color='rgba(0, 0, 0, 0.65)'>
                Samples of the content I am posting on OnlyFans
              </Typography>
              <Box display='flex' alignItems='center' mt='10px'>
                <Image src={dollarImg} width={22.5} height={22.5} alt='' unoptimized={true} loading='lazy' />
                <Typography variant='body1' className='card-price' fontWeight={300} fontSize={11} lineHeight='13px'>
                  USD <b>2.00</b>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ClaimLayout;
