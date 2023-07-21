import React, { FC, ContextType, useState, useMemo } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Country, State } from 'country-state-city';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid';

import CustomButton from 'components/customButton';
import SubscriptionItem from './subscriptionItem';
import { LeftArrow, RightArrow } from "./arrowBtns";
import CustomInput from 'components/customInput';
import CustomSelect from 'components/customSelect';

import { monthOptions } from 'assets/mockdata/checkoutData';

import paypalIcon from 'assets/img/checkout/paypal.svg';
import amazonIcon from 'assets/img/checkout/amazon.svg';
import appleIcon from 'assets/img/checkout/apple.svg';
import mastercardIcon from 'assets/img/checkout/mastercard.svg';
import visaIcon from 'assets/img/checkout/visa.svg';
import googleIcon from 'assets/img/product/google.svg';

import styles from 'assets/jss/pages/checkoutPageStyles';
const useStyles = makeStyles(styles);

type scrollVisibilityApiType = ContextType<typeof VisibilityContext>;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const SubscriptionForm: FC = () => {

  const classes = useStyles();
  const countryList = useMemo(() => Country.getAllCountries(), []);

  const [subscription, setSubscription] = useState('credit-card');
  const [state, setState] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [country, setCountry] = useState('');

  const handleChangeSubscription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubscription((event.target as HTMLInputElement).value);
  };

  return (
    <Box className={classes.subscriptionForm}>
      <Typography variant='h1' fontWeight={700} fontSize={24} lineHeight='33px' color='#000'>
        Set up your subscription
      </Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={subscription}
        onChange={handleChangeSubscription}
        name="subscription"
      >
        <Box className={classes.subscriptionMethods}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
            itemClassName='scroll-item'
            wrapperClassName='scroll-wrapper'
          >
            <SubscriptionItem
              value="credit-card"
              title='Credit Card'
              subTitle='MC - Visa'
              checked={subscription === 'credit-card'}
              onClick={(val) => setSubscription(val)}
              icon={
                <>
                  <Image src={mastercardIcon} alt='' width={19.36} height={11.62} />
                  <Image src={visaIcon} alt='' width={20.8} height={11.7} />
                </>
              }
            />
            <SubscriptionItem
              value="paypal"
              title='PayPal'
              subTitle='Simple & Easy'
              checked={subscription === 'paypal'}
              onClick={(val) => setSubscription(val)}
              icon={<Image src={paypalIcon} alt='' width={24} height={23} />}
            />
            <SubscriptionItem
              value="amazon"
              title='Amazon Pay'
              subTitle='Just a touch'
              checked={subscription === 'amazon'}
              onClick={(val) => setSubscription(val)}
              icon={<Image src={amazonIcon} alt='' width={23.76} height={23.77} />}
            />
            <SubscriptionItem
              value="apple"
              title='Apple Pay'
              subTitle='Just a touch'
              checked={subscription === 'apple'}
              onClick={(val) => setSubscription(val)}
              icon={<Image src={appleIcon} alt='' width={17.38} height={21.32} />}
            />
            <SubscriptionItem
              value="google"
              title='Google Pay'
              subTitle='Just a touch'
              checked={subscription === 'google'}
              onClick={(val) => setSubscription(val)}
              icon={<Image src={googleIcon} alt='' width={23} height={23} />}
            />
          </ScrollMenu>

        </Box>
      </RadioGroup>

      <Box className={classes.formSection}>
        <Grid container columnSpacing={{ xs: '18px', md: '28px' }} rowSpacing={{ xs: '20px', md: 3 }}>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <CustomInput
              labelText='Discount Promotion Code'
              onChange={(e) => { }}
              variant='normal'
              placeholder='Enter Promotion Code'
              fullWidth
              className={classes.formField}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6} xl={6}>
            <CustomInput
              labelText='Card Holder Name'
              onChange={(e) => { }}
              variant='normal'
              placeholder='Enter Card Holder Name'
              fullWidth
              className={classes.formField}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6} xl={6}>
            <CustomInput
              labelText='Billing Address'
              onChange={(e) => { }}
              variant='normal'
              placeholder='Enter Billing Address'
              fullWidth
              className={classes.formField}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6} xl={6}>
            <CustomInput
              labelText='Card Number'
              onChange={(e) => { }}
              variant='normal'
              placeholder='Enter Card Number'
              fullWidth
              className={classes.formField}
            />
          </Grid>

          <Grid item xs={6} md={3} lg={6} xl={3}>
            <CustomSelect
              labelText='State'
              fullWidth
              options={country === '' ? [] : State.getStatesOfCountry(country).map((cell) => ({ data: cell.isoCode, label: cell.name }))}
              value={state}
              variant='outlined'
              onChange={(e) => setState(e.target.value as string)}
              className={classes.formField}
              placeholder='Enter State'
            />
          </Grid>

          <Grid item xs={6} md={3} lg={6} xl={3}>
            <CustomInput
              labelText='Zip Code'
              onChange={(e) => { }}
              variant='normal'
              placeholder='Enter Zip Code'
              fullWidth
              className={classes.formField}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={12} xl={6}>
            <Typography variant='body1' className='expiry-date-label' fontSize={16} lineHeight='23px' color='#474461' fontWeight={600}>
              Expiry Date
            </Typography>
            <Box className={classes.expiryDate} display='flex' position='relative'>
              <CustomSelect
                fullWidth
                options={monthOptions}
                value={month}
                variant='outlined'
                onChange={(e) => setMonth(e.target.value as string)}
                className={clsx(classes.formField, 'expiry-select')}
                placeholder='Enter Month'
              />
              <CustomSelect
                fullWidth
                options={
                  [...Array(20)].map((el, index) => ({ data: `${new Date().getFullYear() + index}`, label: `${new Date().getFullYear() + index}` }))
                }
                value={year}
                variant='outlined'
                onChange={(e) => setYear(e.target.value as string)}
                className={clsx(classes.formField, 'expiry-select')}
                placeholder='Enter Year'
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={6} xl={6}>
            <CustomSelect
              labelText='Country'
              fullWidth
              options={countryList.map((cell) => ({ data: cell.isoCode, label: cell.name }))}
              value={country}
              variant='outlined'
              onChange={(e) => setCountry(e.target.value as string)}
              className={classes.formField}
              placeholder='Enter Country'
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6} xl={6}>
            <CustomInput
              labelText='CVC'
              onChange={(e) => { }}
              variant='normal'
              placeholder='Enter CVC'
              fullWidth
              className={classes.formField}
            />
          </Grid>
        </Grid>

        <CustomButton variant='contained' fullWidth background='blueGradient' boxShadow='none' className={classes.payBtn}>
          Pay and Subscribe
        </CustomButton>
      </Box>
    </Box>
  )
}

export default SubscriptionForm;
