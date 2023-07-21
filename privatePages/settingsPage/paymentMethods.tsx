import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import MobileMenuItem from './mobileMenuItem';
import TabContentsBox from './tabContentsBox';
import PaymentCard from './paymentCard';
import CustomImage from 'components/customImage';
import CustomSelect from 'components/customSelect';

import { settingsMenuList, currencyList } from 'assets/mockdata/settingsData';
import paypalIcon from 'assets/img/settings/paypal.svg';
import stripeIcon from 'assets/img/settings/stripe.svg';

import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  currentTab: boolean;
  handleSetTab: () => void;
}

const PaymentMethods: FC<Props> = (props) => {

  const { currentTab, handleSetTab } = props;
  const classes = useStyles();
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [currency, setCurrency] = useState('USD');

  return (
    <Box className={clsx(classes.tabContent, { [classes.deactiveTab]: !currentTab })} id='payment'>
      <Typography variant='h3' fontWeight={700} className='tab-title'>
        Payment Methods
      </Typography>
      <MobileMenuItem
        active={currentTab}
        data={settingsMenuList.find((cell) => cell.title === 'Payment')}
        handleClick={handleSetTab}
      />
      <TabContentsBox expanded={currentTab}>
        <Box className={classes.paymentMethods}>
          <Typography variant='body1' fontWeight={300}>
            Setup and integrate a payment provider to receive payments from your fans.
            Start selling content, shoutouts, community access, and much more. <br /><br />
            Tip: Setup PayPal and Stripe to increase sales. If you only setup one, some users will not purchase your product.
          </Typography>
          <Grid container rowSpacing={{ xs: '20px', sm: '20px', md: '28px', lg: '28px', xl: '28px' }}>
            <Grid item xs={12}>
              <PaymentCard
                icon={<CustomImage src={paypalIcon} alt='' width={29.5} height={35} mdWidth={20} mdHeight={23.3} />}
                title='PayPal'
                description={isMobile ? 'Enable your followers to pay through PayPal.' : 'Enable your followers to pay through PayPal. Payouts process within a few business days.'}
                handleConnect={() => { }}
              />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard
                icon={<CustomImage src={stripeIcon} alt='' width={24.65} height={35} mdWidth={16.5} mdHeight={23.3} />}
                title='Stripe'
                description='Allow your followers to pay via Credit Card, Apple Pay and Google Pay. '
                handleConnect={() => { }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomSelect
                fullWidth
                options={currencyList}
                value={currency}
                variant='outlined'
                onChange={(e) => setCurrency(e.target.value as string)}
                labelText='Currency'
                rounded='none'
                className='currency-select'
              />
            </Grid>
          </Grid>
        </Box>
      </TabContentsBox>
    </Box>
  )
}

export default PaymentMethods;
