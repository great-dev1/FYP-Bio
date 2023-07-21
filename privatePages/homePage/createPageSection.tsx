import React, { FC, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import CustomButton from 'components/customButton';
import MobileDevice from './mobileDevice';
import {
  DiscordIcon, TiktokIcon, CameoIcon, TwitchIcon, VimeoIcon,
  SoundcloudIcon, FacebookIcon, PinterestIcon, OnlyFansIcon, GoFundMeIcon, PaypalIcon
} from 'components/svg';

import arrowRightIcon from 'assets/img/homepage/arrow-right.svg';
import onlyFansHeroImg from 'assets/img/homepage/design-mobile-carousel-img.webp';
import snowHeroImg from 'assets/img/homepage/snow-mobile-hero.webp';
import threeDHeroImg from 'assets/img/fypbio/carousel-1.webp';
import userThemeHeroImg from 'assets/img/homepage/front-view-professional-kitchen.webp';

import userAvatar1 from 'assets/img/homepage/user-avatar-1.webp';
import userAvatar2 from 'assets/img/avatar-1.webp';
import userAvatar3 from 'assets/img/homepage/user-avatar-2.webp';
import userAvatar4 from 'assets/img/homepage/dog.webp';
import userAvatar5 from 'assets/img/homepage/female-chef-seasoning-salad.webp';
import nextIcon from 'assets/img/homepage/carousel-next-2.svg';
import prevIcon from 'assets/img/homepage/carousel-prev-2.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const CreateReactSection: FC = () => {

  const carouselRef = useRef<Slider>(null);
  const classes = useStyles();
  const router = useRouter();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const tempLinks = [
    '/fyp.bio/three-dimension-buttons', '/fyp.bio/snow', '/fyp.bio/minimal', '/fyp.bio/glass', '/fyp.bio/only-fans',
    '/fyp.bio/neon', '/fyp.bio/my-theme', '/fyp.bio/bg-img-1', '/fyp.bio/bg-img-2', '/fyp.bio/bg-img-3'
  ];

  const settings = {
    className: 'center variable-width',
    centerMode: true,
    infinite: true,
    centerPadding: "124px",
    slidesToShow: 5,
    speed: 1000,
    arrows: false,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: (current: any, next: any) => setCarouselIndex(next),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 350,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  }

  const onlyfansLinks = [
    {
      title: 'OnlyFans',
      subText: 'Best Premium Content',
      icon: <OnlyFansIcon color='#fff' />
    },
    {
      title: 'Vimeo',
      subText: 'Exclusive Content Listed There!!',
      icon: <VimeoIcon color='#fff' />
    },
    {
      title: 'Twitch',
      subText: 'Exclusive Content Listed There!!',
      icon: <TwitchIcon color='#fff' />
    },
  ];

  const minimalLinks = [
    {
      title: 'Tiktok',
      subText: 'Exclusive Content Listed There!!',
      icon: <TiktokIcon color='#fff' />
    },
    {
      title: 'Vimeo',
      icon: <VimeoIcon color='#000' />
    },
    {
      title: 'Twitch',
      subText: 'Exclusive Content Listed There!!',
      icon: <TwitchIcon color='#000' />
    },
    {
      title: 'Facebook',
      icon: <FacebookIcon color='#000' />
    },
    {
      title: 'Soundcloud',
      subText: 'Exclusive Content Listed There!!',
      icon: <SoundcloudIcon color='#000' />
    },
    {
      title: 'Pinterest',
      subText: 'Exclusive Content Listed There!!',
      icon: <PinterestIcon color='#000' />
    }
  ];

  const glassLinks = [
    {
      title: 'Facebook',
      subText: 'Best Premium Content',
      icon: <FacebookIcon color='#F35A89' />
    },
    {
      title: 'Discord',
      subText: 'Exclusive Content Listed There!!',
      icon: <DiscordIcon color='#F35A89' />
    },
    {
      title: 'Cameo',
      subText: 'Exclusive Content Listed There!!',
      icon: <CameoIcon color='#F35A89' />
    },
  ];

  const snowLinks = [
    {
      title: 'OnlyFans',
      subText: 'Best Premium Content',
      icon: <OnlyFansIcon color='#fff' />
    },
    {
      title: 'Vimeo',
      subText: 'Exclusive Content Listed There!!',
      icon: <VimeoIcon color='#fff' />
    },
    {
      title: 'Twitch',
      subText: 'Exclusive Content Listed There!!',
      icon: <TwitchIcon color='#fff' />
    },
  ];

  const neonLinks = [
    {
      title: 'OnlyFans',
      subText: 'Best Premium Content',
      icon: <OnlyFansIcon color='#54AAF5' />
    },
    {
      title: 'Discord',
      subText: 'Exclusive Content Listed There!!',
      icon: <DiscordIcon color='#54AAF5' />
    },
    {
      title: 'Cameo',
      subText: 'Exclusive Content Listed There!!',
      icon: <CameoIcon color='#54AAF5' />
    },
    {
      title: 'Paypal',
      subText: 'Exclusive Content Listed There!!',
      icon: <PaypalIcon color='#54AAF5' />
    },
    {
      title: 'GoFundMe',
      subText: 'Exclusive Content Listed There!!',
      icon: <GoFundMeIcon color='#54AAF5' />
    },
  ];

  const userThemeLinks = [
    {
      title: 'OnlyFans',
      icon: <OnlyFansIcon color='#313744' />
    },
    {
      title: 'Discord',
      icon: <DiscordIcon color='#313744' />
    },
    {
      title: 'Cameo',
      subText: 'Exclusive Content Listed There!!',
      icon: <CameoIcon color='#313744' />
    },
  ];

  const bg1Links = [
    {
      title: 'OnlyFans',
      icon: <OnlyFansIcon color='#fff' />
    },
    {
      title: 'Discord',
      icon: <DiscordIcon color='#fff' />
    },
    {
      title: 'Cameo',
      icon: <CameoIcon color='#fff' />
    },
    {
      title: 'Paypal',
      icon: <PaypalIcon color='#fff' />
    },
    {
      title: 'GoFundMe',
      icon: <GoFundMeIcon color='#fff' />
    }
  ]; 

  const getSize = (index: number) => {
    if (index === carouselIndex) {
      return 'large';
    } else {
      if (index === ((carouselIndex + 1) > 9 ? 0 : (carouselIndex + 1))) {
        return 'medium';
      }
      if (((index + 1) > 9 ? 0 : (index + 1)) === carouselIndex) {
        return 'medium';
      }
    }
    return 'small';
  }

  return (
    <Box className={classes.creatingPageSection}>
      <Box className='title-box' mx='auto'>
        <Typography variant='h6' fontSize={25} lineHeight='35px' color='rgba(0, 0, 0, 0.85)' align='center'>
          Join Us
        </Typography>
        <Typography variant='h1' align='center' color='#000' fontSize={57} lineHeight='80px' fontWeight={600}>
          Create a Page
        </Typography>
        <Typography variant='body1' fontSize={20} lineHeight='33px' color='rgba(0, 0, 0, 0.65)' align='center'>
          Use one of our beautifully designed templates or design your own with our free website builder
        </Typography>
      </Box>
      <Box className={classes.mobileCarousel} position='relative'>
        <Slider ref={carouselRef} {...settings}>
          <MobileDevice
            className={(clsx(classes.threeDimention, {
              ['right-medium']: getSize(0) === 'medium' && carouselIndex === 9,
              ['right-small']: getSize(0) === 'small' && carouselIndex === 8,
              ['right-small-2']: getSize(0) === 'small' && carouselIndex === 7,
              ['left-medium']: getSize(0) === 'medium' && carouselIndex === 1,
              ['left-small']: getSize(0) === 'small' && carouselIndex === 2,
              ['left-small-2']: getSize(0) === 'small' && carouselIndex === 3
            }))}
            username='Johny West'
            bio={`I'm a T-rex and if you made me angry I might eat you`}
            iconColor='black'
            heroImg={threeDHeroImg}
            avatarImg={userAvatar4}
            socialLinks={snowLinks}
            socialIconColor='#000'
            size={getSize(0)}
          />
          <MobileDevice
            className={clsx(classes.snow, {
              ['right-medium']: getSize(1) === 'medium' && carouselIndex === 0,
              ['right-small']: getSize(1) === 'small' && carouselIndex === 9,
              ['right-small-2']: getSize(1) === 'small' && carouselIndex === 8,
              ['left-medium']: getSize(1) === 'medium' && carouselIndex === 2,
              ['left-small']: getSize(1) === 'small' && carouselIndex === 3,
              ['left-small-2']: getSize(1) === 'small' && carouselIndex === 4
            })}
            username='Vankisha Eden'
            bio='Follow me and check all my new updates and love songs !'
            iconColor='black'
            heroImg={snowHeroImg}
            avatarImg={userAvatar3}
            socialLinks={snowLinks}
            socialIconColor='#000'
            size={getSize(1)}
          />
          <MobileDevice
            className={clsx(classes.minimalTheme, {
              ['right-medium']: getSize(2) === 'medium' && carouselIndex === 1,
              ['right-small']: getSize(2) === 'small' && carouselIndex === 0,
              ['right-small-2']: getSize(2) === 'small' && carouselIndex === 9,
              ['left-medium']: getSize(2) === 'medium' && carouselIndex === 3,
              ['left-small']: getSize(2) === 'small' && carouselIndex === 4,
              ['left-small-2']: getSize(2) === 'small' && carouselIndex === 5
            }
            )}
            username='Akram Sayed'
            bio='Follow me and learn all about soccer tips and tricks'
            iconColor='black'
            avatarImg={userAvatar2}
            socialLinks={minimalLinks}
            socialIconColor='#000'
            size={getSize(2)}
          />
          <MobileDevice
            className={clsx(classes.glass, {
              ['right-medium']: getSize(3) === 'medium' && carouselIndex === 2,
              ['right-small']: getSize(3) === 'small' && carouselIndex === 1,
              ['right-small-2']: getSize(3) === 'small' && carouselIndex === 0,
              ['left-medium']: getSize(3) === 'medium' && carouselIndex === 4,
              ['left-small']: getSize(3) === 'small' && carouselIndex === 5,
              ['left-small-2']: getSize(3) === 'small' && carouselIndex === 6
            })}
            username='Vankisha Eden'
            bio='Follow me and check all my new updates and love songs !'
            iconColor='white'
            heroImg={onlyFansHeroImg}
            avatarImg={userAvatar1}
            socialLinks={glassLinks}
            socialIconColor='#fff'
            size={getSize(3)}
          />
          <MobileDevice
            className={clsx(classes.onlyFans, {
              ['right-medium']: getSize(4) === 'medium' && carouselIndex === 3,
              ['right-small']: getSize(4) === 'small' && carouselIndex === 2,
              ['right-small-2']: getSize(4) === 'small' && carouselIndex === 1,
              ['left-medium']: getSize(4) === 'medium' && carouselIndex === 5,
              ['left-small']: getSize(4) === 'small' && carouselIndex === 6,
              ['left-small-2']: getSize(4) === 'small' && carouselIndex === 7
            })}
            username='Jessica James'
            bio={`Whatever the link you choose, you'll be addicted.`}
            iconColor='white'
            heroImg={onlyFansHeroImg}
            avatarImg={userAvatar1}
            socialLinks={onlyfansLinks}
            socialIconColor='#fff'
            size={getSize(4)}
          />
          <MobileDevice
            className={clsx(classes.neon, {
              ['right-medium']: getSize(5) === 'medium' && carouselIndex === 4,
              ['right-small']: getSize(5) === 'small' && carouselIndex === 3,
              ['right-small-2']: getSize(5) === 'small' && carouselIndex === 2,
              ['left-medium']: getSize(5) === 'medium' && carouselIndex === 6,
              ['left-small']: getSize(5) === 'small' && carouselIndex === 7,
              ['left-small-2']: getSize(5) === 'small' && carouselIndex === 8
            })}
            username='Vankisha Eden'
            bio='Follow me and check all my new updates and love songs !'
            iconColor='white'
            avatarImg={userAvatar2}
            socialLinks={neonLinks}
            socialIconColor='#54AAF5'
            size={getSize(5)}
          />
          <MobileDevice
            className={clsx(classes.userTheme, {
              ['right-medium']: getSize(6) === 'medium' && carouselIndex === 5,
              ['right-small']: getSize(6) === 'small' && carouselIndex === 4,
              ['right-small-2']: getSize(6) === 'small' && carouselIndex === 3,
              ['left-medium']: getSize(6) === 'medium' && carouselIndex === 7,
              ['left-small']: getSize(6) === 'small' && carouselIndex === 8,
              ['left-small-2']: getSize(6) === 'small' && carouselIndex === 9
            })}
            username='Vankisha Eden'
            bio={`Follow me and check all my new updates and love songs !`}
            iconColor='white'
            heroImg={userThemeHeroImg}
            avatarImg={userAvatar5}
            socialLinks={userThemeLinks}
            socialIconColor='#fff'
            size={getSize(6)}
          />
          <MobileDevice
            className={clsx(classes.bgImg_1, {
              ['right-medium']: getSize(7) === 'medium' && carouselIndex === 6,
              ['right-small']: getSize(7) === 'small' && carouselIndex === 5,
              ['right-small-2']: getSize(7) === 'small' && carouselIndex === 4,
              ['left-medium']: getSize(7) === 'medium' && carouselIndex === 8,
              ['left-small']: getSize(7) === 'small' && carouselIndex === 9,
              ['left-small-2']: getSize(7) === 'small' && carouselIndex === 0
            })}
            username='Jessica James'
            bio={`Whatever the link you choose, you'll be addicted.`}
            iconColor='white'
            avatarImg={userAvatar2}
            socialLinks={bg1Links}
            socialIconColor='#fff'
            size={getSize(7)}
          />
          <MobileDevice
            className={clsx(classes.bgImg_2, {
              ['right-medium']: getSize(8) === 'medium' && carouselIndex === 7,
              ['right-small']: getSize(8) === 'small' && carouselIndex === 6,
              ['right-small-2']: getSize(8) === 'small' && carouselIndex === 5,
              ['left-medium']: getSize(8) === 'medium' && carouselIndex === 9,
              ['left-small']: getSize(8) === 'small' && carouselIndex === 0,
              ['left-small-2']: getSize(8) === 'small' && carouselIndex === 1
            })}
            username='Jessica James'
            bio={`Whatever the link you choose, you'll be addicted.`}
            iconColor='black'
            avatarImg={userAvatar2}
            socialLinks={bg1Links}
            socialIconColor='#000'
            size={getSize(8)}
          />
          <MobileDevice
            className={clsx(classes.bgImg_3, {
              ['right-medium']: getSize(9) === 'medium' && carouselIndex === 8,
              ['right-small']: getSize(9) === 'small' && carouselIndex === 7,
              ['right-small-2']: getSize(9) === 'small' && carouselIndex === 6,
              ['left-medium']: getSize(9) === 'medium' && carouselIndex === 0,
              ['left-small']: getSize(9) === 'small' && carouselIndex === 1,
              ['left-small-2']: getSize(9) === 'small' && carouselIndex === 2
            })}
            username='Jessica James'
            bio={`Whatever the link you choose, you'll be addicted.`}
            iconColor='black'
            avatarImg={userAvatar2}
            socialLinks={bg1Links}
            socialIconColor='#fff'
            size={getSize(9)}
          />
        </Slider>

        <Link variant='button' onClick={() => carouselRef.current?.slickNext()} className='arrow-next carousel-control'>
          <Image src={nextIcon} alt='' width={11.67} height={19.8} />
        </Link>
        <Link variant='button' onClick={() => carouselRef.current?.slickPrev()} className='arrow-prev carousel-control'>
          <Image src={prevIcon} alt='' width={11.67} height={19.8} />
        </Link>
      </Box>

      <Box className='section-footer' display='flex' justifyContent='center'>
        <CustomButton variant='contained' background='blueGradient' boxShadow='none' onClick={() => router.push(tempLinks[carouselIndex])}
          endIcon={<Image src={arrowRightIcon} alt='' width={21.32} height={16} />}
        >
          Use This Template
        </CustomButton>
      </Box>
    </Box>
  )
}

export default CreateReactSection;
