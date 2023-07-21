import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import LandingLayout from 'components/layouts/landingLayout';
import ClaimFormSection from './claimFormSection';
import TrySection from './trySection';
import DreamsSection from './dreamsSection';
import ModelDataSection from './modelDataSection';
import GetPaidSection from './getPaidSection';
import ProfitEarningsSection from './profitEarningsSection';
import CreateReactSection from './createPageSection';
import HeaderSection from './headerSection';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const HomePage: FC = () => {

  const classes = useStyles();

  return (
    <LandingLayout title='Home Page'>
      <HeaderSection />
      <DreamsSection />
      <TrySection />
      <ProfitEarningsSection />
      <ModelDataSection />
      <GetPaidSection />
      <CreateReactSection />
      <ClaimFormSection />
    </LandingLayout>
  )
}

export default HomePage;
