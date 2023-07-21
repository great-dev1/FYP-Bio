import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ClaimMobile from 'components/mobileDevice/claimMobile';
import { InstagramIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from 'components/svg';

import dollarImg from 'assets/img/fypbio/dollar.webp';
import cardImg from 'assets/img/claim/template-card-img.webp';
import heroImg from 'assets/img/claim/design-mobile-carousel-img.webp';
import userAvatar from 'assets/img/claim/user-avatar-3.webp';

import styles from 'assets/jss/pages/templatesPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  hideHeroImg?: boolean;
}

const RightSection: FC<Props> = (props) => {

  const { hideHeroImg } = props;
  const classes = useStyles();
  const router = useRouter();

  const mobileSocials = [
    {
      icon: <InstagramIcon color='#F35A89' width={21.8} height={21.8} />,
      title: 'Instagram',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <DiscordIcon color='#F35A89' width={22.4} height={17} />,
      title: 'Discord',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <CameoIcon color='#F35A89' width={19.4} height={21.32} />,
      title: 'Cameo',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <PaypalIcon color='#F35A89' width={16.52} height={19.8} />,
      title: 'Paypal',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <GoFundMeIcon color='#F35A89' width={24.6} height={18.75} />,
      title: 'GoFundMe',
      description: 'Exclusive Content Listed There!!'
    }
  ];

  const socialLinks = [
    {
      icon: <InstagramIcon color='#F35A89' width={17.5} height={17.5} />,
      title: 'Instagram',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <DiscordIcon color='#F35A89' width={17.47} height={13.32} />,
      title: 'Discord',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <CameoIcon color='#F35A89' width={15.12} height={16.62} />,
      title: 'Cameo',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <PaypalIcon color='#F35A89' width={12.88} height={15.43} />,
      title: 'Paypal',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <GoFundMeIcon color='#F35A89' width={19.2} height={14.6} />,
      title: 'GoFundMe',
      description: 'Exclusive Content Listed There!!'
    }
  ];

  return (
    <Box className={classes.rightSection} position='relative'>
      <Box className={classes.rightContents} position='relative' mx='auto'>
        <Typography variant='h3' fontWeight={700} align='center'>
          Selected Template
        </Typography>
        <Typography variant='body1' align='center'>
          See below an example of the template you have selected
        </Typography>
      </Box>
      <Box className={classes.footerLogo} ml='auto' onClick={() => router.push('/')} display='flex'>
        <svg width="60" height="51" viewBox="0 0 60 51">
          <g transform="translate(-134.877 -35.803)">
            <text transform="translate(153.876 59.803)" fill="#fff" fontSize="22" fontFamily="Gilroy" fontWeight="700">
              <tspan x="0" y="0">FYP.</tspan><tspan x="0" y="21">BIO</tspan></text>
            <rect width="6" height="36" rx="3" transform="translate(134.876 44.803)" fill="#fff" />
          </g>
        </svg>
      </Box>
      <Box position='absolute' className={clsx(classes.claimImg, classes.firstClaim)} display='flex'>
        <ClaimMobile
          socialLinks={mobileSocials}
          className={clsx(classes.mobile, 'preview-mobile')}
          heroImg={heroImg}
          userAvatar={userAvatar}
          hideHeroImg={hideHeroImg}
        />
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
                position='relative'
              >
                <Box className={clsx(classes.socialBtnIcon, 'social-link-item-icon')} display='flex' alignItems='center' justifyContent='center' position='relative' zIndex={1}>
                  {cell.icon}
                </Box>
                <Box mr='auto' className='social-link-item-text' position='relative' zIndex={1}>
                  <Typography variant='h6' fontSize={12} fontWeight={700} lineHeight='17px'>
                    {cell.title}
                  </Typography>
                  {
                    cell.description && (
                      <Typography variant='body1' fontSize={7} lineHeight={1}>
                        {cell.description}
                      </Typography>
                    )
                  }
                </Box>
                <svg width="16.744" height="15.043" viewBox="0 0 16.744 15.043" className='link-up-icon'>
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
          <Box display='flex' className='img-box'>
            <Image src={cardImg} alt='' width={240} height={120} />
          </Box>
          <Typography variant='h6' fontWeight={700} lineHeight='21px' fontSize={15} color='#000' sx={{ marginBottom: '4px' }}>
            Instagram Content
          </Typography>
          <Typography variant='body1' lineHeight='13px' fontSize='10px' color='rgba(0, 0, 0, 0.65)'>
            Samples of the content I am postingon OnlyFans
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
  )
}

export default RightSection;
