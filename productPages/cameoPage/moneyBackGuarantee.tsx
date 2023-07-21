import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import checkMarkIcon from 'assets/img/product/money-check.svg';
import visaIcon from 'assets/img/product/visa.svg';
import mastercardIcon from 'assets/img/product/mastercard.svg';
import googlePayIcon from 'assets/img/product/google-pay.svg';
import applePayIcon from 'assets/img/product/apple-pay.svg';

import styles from 'assets/jss/pages/cameoPageStyles';
const useStyles = makeStyles(styles);

const MoneyBackGuarantee: FC = () => {

  const classes = useStyles();

  return (
    <Box className={classes.moneyGuarantee}>
      <Box display='flex' alignItems='center' mb='20px'>
        <Image src={checkMarkIcon} alt='' width={21.5} height={21.5} />
        <Typography variant='h6' fontWeight={600} color='#000' fontSize={20} lineHeight='28px' sx={{ marginLeft: '19.5px' }}>
          Money back guarantee
        </Typography>
      </Box>

      <Typography variant='body1' fontSize={16} lineHeight='24px' color='rgba(0, 0, 0, 0.32)'>
        If you pay on web by card, we reserve the amount when you place your order but only charge once you have received the video. <br /><br />
        If you book a video on web with another payment method, we will always provide a full refund if the celebrity doesn’t respond.
      </Typography>

      <Box mt='43px' display='flex' alignItems='center' columnGap='27px' className='payment-links'>
        <Link href='/' underline='none'>
          <Image src={visaIcon} alt='' width={53.2} height={17.24} />
        </Link>
        <Link href='/' underline='none'>
          <Image src={mastercardIcon} alt='' width={39.9} height={24.64} />
        </Link>
        <Link href='/' underline='none'>
          <Image src={googlePayIcon} alt='' width={65.5} height={25.76} />
        </Link>
        <Link href='/' underline='none'>
          <Image src={applePayIcon} alt='' width={68.78} height={28} />
        </Link>
      </Box>
    </Box>
  )
}

export default MoneyBackGuarantee;
