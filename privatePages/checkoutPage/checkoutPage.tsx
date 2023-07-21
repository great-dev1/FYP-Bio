import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import SupportLayout from 'components/layouts/supportLayout';
import SubscriptionForm from './subscriptionForm';
import DetailBox from './detailBox';

import styles from 'assets/jss/pages/checkoutPageStyles';
const useStyles = makeStyles(styles);

const CheckoutPage: FC = () => {

  const classes = useStyles();

  return (
    <SupportLayout title='Checkout'>
      <Box className={classes.wrapper} display='flex' flexWrap='wrap'>
        <Box className={classes.leftSection}>
          <SubscriptionForm />
        </Box>
        <Box className={classes.rightSection}>
          <DetailBox />
        </Box>
      </Box>
    </SupportLayout>
  )
}

export default CheckoutPage;
