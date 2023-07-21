import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/customButton';
import MobileStepper from 'components/mobileStepper';
import ClaimLinkLayout from 'components/layouts/claimLayout';
import ClaimMobile from 'components/mobileDevice/claimMobile';
import { InstagramIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from 'components/svg';

import { categoriesData } from 'assets/mockdata/categoriesData';
import cardImg from 'assets/img/claim/claim-img-4.webp';
import heroImg from 'assets/img/claim/hero-image-2.webp';
import avatarImg from 'assets/img/claim/user-avatar-2.webp';

import styles from 'assets/jss/pages/claimPageStyles';
const useStyles = makeStyles(styles);

const AboutPage: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  const [categories, setCategories] = useState<string[]>([]);

  const handleToggleCategory = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((cell) => cell !== category));
    } else {
      setCategories([...categories, category]);
    }
  }

  const mobileSocials = [
    {
      icon: <InstagramIcon color='#fff' width={21.8} height={21.8} />,
      title: 'Instagram',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <DiscordIcon color='#fff' width={22.4} height={17} />,
      title: 'Discord',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <CameoIcon color='#fff' width={19.4} height={21.32} />,
      title: 'Cameo',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <PaypalIcon color='#fff' width={16.52} height={19.8} />,
      title: 'Paypal',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <GoFundMeIcon color='#fff' width={24.6} height={18.75} />,
      title: 'GoFundMe',
      description: 'Exclusive Content Listed There!!'
    }
  ];

  const socialLinks = [
    {
      icon: <InstagramIcon color='#fff' width={17.5} height={17.5} />,
      title: 'Instagram',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <DiscordIcon color='#fff' width={17.47} height={13.32} />,
      title: 'Discord',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <CameoIcon color='#fff' width={15.12} height={16.62} />,
      title: 'Cameo',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <PaypalIcon color='#fff' width={12.88} height={15.43} />,
      title: 'Paypal',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <GoFundMeIcon color='#fff' width={19.2} height={14.6} />,
      title: 'GoFundMe',
      description: 'Exclusive Content Listed There!!'
    }
  ];

  return (
    <ClaimLinkLayout title='Create an account'
      step={3}
      cardImage={cardImg}
      mobileDevice={
        <ClaimMobile
          socialLinks={mobileSocials}
          className={classes.aboutMobile}
          logoIcon={<svg width="63" height="53" viewBox="0 0 63 53">
            <g transform="translate(-135.266 -35.826)">
              <text transform="translate(155.265 60.827)" fontSize="23" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="22">BIO</tspan></text>
              <rect width="6" height="40" rx="3" transform="translate(135.265 44.827)" />
            </g>
          </svg>}
          heroImg={heroImg}
          userAvatar={avatarImg}
        />
      }
      socialLinks={socialLinks}
      className={classes.aboutPage}
    >
      <Box className={classes.aboutContents}>
        <Box className={clsx(classes.contents)}>
          <Box className={classes.title}>
            <Typography variant='h3' fontWeight={700}>
              Tell Us About You
            </Typography>
            <Typography variant='body1'>
              Select Categories that Describe Your Content. We will use this to customize your page
            </Typography>
          </Box>
          <MobileStepper step={3} />
        </Box>
        <Box className={classes.categories} display='flex' flexWrap='wrap'>
          {
            categoriesData.map((category) => (
              <CustomButton
                variant='outlined'
                key={category}
                onClick={() => handleToggleCategory(category)}
                className={clsx({ [classes.activeCategory]: categories.includes(category) })}
              >
                {category}
              </CustomButton>
            ))
          }
        </Box>
        <Box className={clsx(classes.aboutContinue, classes.contents, classes.continueBtn)}>
          <CustomButton background='blueGradient' fullWidth onClick={() => router.push('/claim/templates')}>
            Continue
          </CustomButton>
        </Box>
      </Box>
    </ClaimLinkLayout>
  )
}

export default AboutPage;
