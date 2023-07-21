import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import LandingLayout from 'components/layouts/landingLayout';
import Header from 'components/explore/header';

import styles from 'assets/jss/pages/explorePageStyles';
const useStyles = makeStyles(styles);

const ExplorePage: FC = () => {

  const classes = useStyles();

  return (
    <LandingLayout title='Explore Page'>
      <Header />
    </LandingLayout>
  )
}

export default ExplorePage;
