import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import ClaimLinkLayout from 'components/layouts/claimLayout';
import FirstStep from './firstStep';
import SecondStep from './secondStep';
import ClaimMobile from 'components/mobileDevice/claimMobile';

import { RoudedPinterestIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from 'components/svg';

import cardImg from 'assets/img/claim/claim-img-1.webp';
import herolImg from 'assets/img/homepage/front-view-professional-kitchen.webp';
import userAvatar from 'assets/img/homepage/female-chef-seasoning-salad.webp';

import styles from 'assets/jss/components/claimLayoutStyles';
const useStyles = makeStyles(styles);

const ClaimPage: FC = () => {

  const [step, setStep] = useState(1);
  const [name, setName] = useState('');

  const classes = useStyles();

  const mobileSocials = [
    {
      icon: <RoudedPinterestIcon color='#313744' />,
      title: 'Pinterest'
    },
    {
      icon: <DiscordIcon color='#313744' width={17.47} height={13.32} />,
      title: 'Discord'
    },
    {
      icon: <CameoIcon color='#313744' width={15.12} height={16.62} />,
      title: 'Cameo',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <PaypalIcon color='#313744' width={12.88} height={15.43} />,
      title: 'Paypal',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <GoFundMeIcon color='#313744' width={19.2} height={14.6} />,
      title: 'GoFundMe',
      description: 'Exclusive Content Listed There!!'
    }
  ];

  const socialLinks = [
    {
      icon: <RoudedPinterestIcon color='#313744' />,
      title: 'Pinterest',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <DiscordIcon color='#313744' width={17.47} height={13.32} />,
      title: 'Discord',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <CameoIcon color='#313744' width={15.12} height={16.62} />,
      title: 'Cameo',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <PaypalIcon color='#313744' width={12.88} height={15.43} />,
      title: 'Paypal',
      description: 'Exclusive Content Listed There!!'
    },
    {
      icon: <GoFundMeIcon color='#313744' width={19.2} height={14.6} />,
      title: 'GoFundMe',
      description: 'Exclusive Content Listed There!!'
    }
  ];

  return (
    <ClaimLinkLayout
      title='Claim Your Link'
      step={1}
      cardImage={cardImg}
      mobileDevice={
        <ClaimMobile
          className={classes.claimMobile}
          socialLinks={mobileSocials}
          heroImg={herolImg}
          userAvatar={userAvatar}
        />
      }
      socialLinks={socialLinks}
      className={classes.claimPage}
    >
      {
        step === 1 ? (
          <FirstStep handleContinue={(username) => {
            setName(username);
            setStep(2);
          }} />
        ) : (
          <SecondStep />
        )
      }

    </ClaimLinkLayout>
  )
}

export default ClaimPage;
