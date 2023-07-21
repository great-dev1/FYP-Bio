import React, { FC } from 'react';
import { Formik } from 'formik';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';

import CustomButton from 'components/customButton';
import CustomInput from 'components/customInput';
import MobileStepper from 'components/mobileStepper';
import ClaimLinkLayout from 'components/layouts/claimLayout';
import ClaimMobile from 'components/mobileDevice/claimMobile';
import { FacebookIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from 'components/svg';
import CustomImage from 'components/customImage';

import { AuthFormType } from 'types';
import { AuthFormSchema } from 'utils/formSchema';

import cardImg from 'assets/img/claim/rows-red-seats-theater.webp';
import emailIcon from 'assets/img/claim/email.svg';
import keyIcon from 'assets/img/claim/key.svg';
import twitterIcon from 'assets/img/twitter-black.svg';
import googleIcon from 'assets/img/google-black.svg';
import appleIcon from 'assets/img/apple-black.svg';
import userAvatar from 'assets/img/claim/user-avatar-1.webp';

import styles from 'assets/jss/pages/claimPageStyles';
const useStyles = makeStyles(styles);

const defaultValues: AuthFormType = {
  email: '',
  password: ''
}

const LoginPage: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  const onHandleSubmit = (data: AuthFormType) => {
    console.log(data);
    router.push('/claim/about');
  }

  const mobileSocials = [
    {
      icon: <FacebookIcon color='#54AAF5' width={11} height={21.78} />,
      title: 'Facebook'
    },
    {
      icon: <DiscordIcon color='#54AAF5' width={22.4} height={17} />,
      title: 'Discord',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <CameoIcon color='#54AAF5' width={19.4} height={21.32} />,
      title: 'Cameo',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <PaypalIcon color='#54AAF5' width={16.52} height={19.8} />,
      title: 'Paypal',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <GoFundMeIcon color='#54AAF5' width={24.6} height={18.75} />,
      title: 'GoFundMe',
      description: 'Exclusive Content Listed There!!'
    }
  ];

  const socialLinks = [
    {
      icon: <FacebookIcon color='#54AAF5' width={9} height={17.8} />,
      title: 'Facebook'
    },
    {
      icon: <DiscordIcon color='#54AAF5' width={17.47} height={13.32} />,
      title: 'Discord',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <CameoIcon color='#54AAF5' width={15.12} height={16.62} />,
      title: 'Cameo',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <PaypalIcon color='#54AAF5' width={12.88} height={15.43} />,
      title: 'Paypal',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <GoFundMeIcon color='#54AAF5' width={19.2} height={14.6} />,
      title: 'GoFundMe',
      description: 'Exclusive Content Listed There!!'
    }
  ];

  return (
    <ClaimLinkLayout title='Create an account'
      step={2}
      cardImage={cardImg}
      mobileDevice={
        <ClaimMobile
          socialLinks={mobileSocials}
          hideHeroImg={true}
          className={classes.signUpMobile}
          userAvatar={userAvatar}
        />
      }
      socialLinks={socialLinks}
      className={classes.signUpPage}
    >
      <Box className={clsx(classes.contents, classes.mobileContents)}>
        <Formik
          initialValues={{ ...defaultValues }}
          validationSchema={AuthFormSchema}
          onSubmit={onHandleSubmit}
        >
          {
            ({ errors, handleChange, handleSubmit, touched }) => (
              <form autoComplete="off" noValidate onSubmit={handleSubmit} className='auth-form'>
                <Box className={classes.title}>
                  <Typography variant='h3' fontWeight={700}>
                    Login to account
                  </Typography>
                  <Typography variant='body1'>
                    Let&apos;s login to your account
                  </Typography>
                </Box>
                <MobileStepper step={2} />
                <Box className={classes.emailField}>
                  <CustomInput
                    labelText='Email Address'
                    onChange={handleChange}
                    placeholder='Enter Email Address'
                    fullWidth
                    name='email'
                    inputProps={{
                      startAdornment: <InputAdornment position='start'><Image src={emailIcon} alt='' width={28} height={28} /></InputAdornment>
                    }}
                    error={Boolean(touched.email && errors.email)}
                  />
                </Box>
                <Box>
                  <CustomInput
                    labelText='Password'
                    onChange={handleChange}
                    placeholder='Enter Password'
                    fullWidth
                    name='password'
                    inputProps={{
                      type: 'password',
                      autoComplete: 'off',
                      startAdornment: <InputAdornment position='start'><Image src={keyIcon} alt='' width={24} height={24} /></InputAdornment>
                    }}
                    error={Boolean(touched.password && errors.password)}
                  />
                </Box>
                <Box display='flex' position='relative' justifyContent='center' className={classes.orText}>
                  <Typography variant='body1' fontWeight={500}>
                    OR
                  </Typography>
                </Box>
                <Box display='flex' justifyContent='space-between' className={classes.socialLinks}>
                  <Link href='/'>
                    <CustomImage src={twitterIcon} alt='' width={29} height={23.7} mdWidth={17.77} mdHeight={14.55} />
                  </Link>
                  <Link href='/'>
                    <CustomImage src={googleIcon} alt='' width={24} height={23.68} mdWidth={14.55} mdHeight={14.55} />
                  </Link>
                  <Link href='/'>
                    <CustomImage src={appleIcon} alt='' width={22.5} height={28.84} mdWidth={13.83} mdHeight={17.72} />
                  </Link>
                </Box>
                <Typography variant='body1' align='center' className={classes.authText}>
                  Don&apos;t have an account?&nbsp;
                  <Link href='/' underline='none' onClick={(e) => {
                    e.preventDefault();
                    router.push('/claim/signup');
                  }}>Sign Up</Link>
                </Typography>
                <Box className={classes.continueBtn} sx={{ marginTop: '0 !important' }}>
                  <CustomButton background='blueGradient' fullWidth type='submit'>
                    Continue
                  </CustomButton>
                </Box>
                <Typography variant='body1' align='center' className={classes.authBottomText}>
                  By signing up, you agree to our&nbsp;
                  <Link href='/' underline='none'>Privacy Policy</Link>&nbsp;and&nbsp;
                  <Link href='/' underline='none'>Terms of Service</Link>
                </Typography>
              </form>
            )}
        </Formik>
      </Box>
    </ClaimLinkLayout>
  )
}

export default LoginPage;
