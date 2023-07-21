import React, { FC, useState, useRef } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import RightContent from './profitEarnings/rightContents';
import ProfitItem from './profitEarnings/profitItem';

import pictureImg from 'assets/img/monetize/picture.svg';
import videoCallImg from 'assets/img/monetize/video-call.svg';
import donationImg from 'assets/img/monetize/donation.svg';
import playImg from 'assets/img/homepage/play.svg';
import comImg from 'assets/img/homepage/community.png';
import exclusiveTabImg from 'assets/img/homepage/exclusive-content-tab.webp';
import tippingTabImg from 'assets/img/homepage/tipping-tab.webp';
import cameoTabImg from 'assets/img/homepage/cameo-tab.webp';
import communityTabImg from 'assets/img/homepage/community-tab.webp';
import videoCallTabImg from 'assets/img/homepage/video-tab.webp';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const ProfitEarningsSection: FC = () => {

  const classes = useStyles();
  const carouselRef = useRef<Slider>(null);
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [tab, setTab] = useState('exclusive');
  const tabs = ['exclusive', 'tipping', 'cameo', 'community', 'video'];

  const settings = {
    className: 'center variable-width',
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    swipeToSlide: true,
    autoplay: isMobile ? true : false,
    autoplaySpeed: 5000,
    beforeChange: (current: any, next: any) => {
      setTab(tabs[next]);
    }
  }

  return (
    <Box className={classes.profitEarningSection} display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='center'>
      <Box className="left-contents">
        <Box className='tab-content'>
          {
            tab === 'exclusive' && (
              <Box display='flex' className='animate__animated animate__fadeIn'>
                <Image src={exclusiveTabImg} alt='' width={1062} height={841} />
              </Box>
            )
          }
          {
            tab === 'tipping' && (
              <Box display='flex' className='animate__animated animate__fadeIn'>
                <Image src={tippingTabImg} alt='' width={1062} height={841} loading='lazy' />
              </Box>
            )
          }
          {
            tab === 'cameo' && (
              <Box display='flex' className='animate__animated animate__fadeIn'>
                <Image src={cameoTabImg} alt='' width={1062} height={841} />
              </Box>
            )
          }
          {
            tab === 'community' && (
              <Box display='flex' className='animate__animated animate__fadeIn'>
                <Image src={communityTabImg} alt='' width={1062} height={841} />
              </Box>
            )
          }
          {
            tab === 'video' && (
              <Box display='flex' className='animate__animated animate__fadeIn'>
                <Image src={videoCallTabImg} alt='' width={1062} height={841} />
              </Box>
            )
          }
        </Box>
      </Box>

      <Box className='right-contents'>
        <RightContent onChangeTab={(val) => setTab(val)} activeTab={tab} />
      </Box>

      <Box width='100%' order={2} className='slider-wrapper' position='relative'>
        <Slider ref={carouselRef} {...settings}>
          <ProfitItem
            icon={<Image src={pictureImg} alt='' width={23} height={23} />}
            title='Exclusive Content'
            description='Sell photos, videos, and other content'
            iconClassName='exclusive'
          />
          <ProfitItem
            icon={<Image src={donationImg} alt='' width={25} height={25} />}
            title='Tipping'
            description='Let your followers send you tips and messages'
            iconClassName='tipping'
          />
          <ProfitItem
            icon={<Image src={playImg} alt='' width={25} height={25} />}
            title='Cameo'
            description='Sell custom videos to your fans'
            iconClassName='cameo'
          />
          <ProfitItem
            icon={<Image src={comImg} alt='' width={41} height={41} />}
            title='Community Access'
            description='Sell access to a Discord or Telegram group'
            iconClassName='commuity'
          />
          <ProfitItem
            icon={<Image src={videoCallImg} alt='' width={23} height={23} />}
            title='1:1 Video Calls'
            description='Sell video calls with your fans through zoom'
            iconClassName='video'
          />
        </Slider>
        <Box display='flex' columnGap='9px' className='dot-list' position='absolute'>
          <Link variant='button' className={clsx({ ['active']: tab === 'exclusive' })}
            onClick={() => carouselRef.current?.slickGoTo(0)}
          ></Link>
          <Link variant='button' className={clsx({ ['active']: tab === 'tipping' })}
            onClick={() => carouselRef.current?.slickGoTo(1)}
          ></Link>
          <Link variant='button' className={clsx({ ['active']: tab === 'cameo' })}
            onClick={() => carouselRef.current?.slickGoTo(2)}></Link>
          <Link variant='button' className={clsx({ ['active']: tab === 'community' })}
            onClick={() => carouselRef.current?.slickGoTo(3)}></Link>
          <Link variant='button' className={clsx({ ['active']: tab === 'video' })}
            onClick={() => carouselRef.current?.slickGoTo(4)}></Link>
        </Box>
        <Link
          variant='button'
          className='next-arrow-btn'
          onClick={() => carouselRef.current?.slickNext()}
          underline='none'
        >
          Next
        </Link>
      </Box>
    </Box>
  )
}

export default ProfitEarningsSection;
