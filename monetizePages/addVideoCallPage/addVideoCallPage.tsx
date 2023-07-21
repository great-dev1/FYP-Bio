import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

import PrivateLayout from "components/layouts/privateLayout";
import Header from 'components/addProduct/header';
import DetailCard from 'components/addProduct/detailCard';
import SellMoreContents from 'components/addProduct/sellMoreContents';
import CustomButton from 'components/customButton';
import GeneralInfomation from './generalInfomation';
import LocationSection from './locationSection';
import DailyAvailabilitySection from './dailyAvailabilitySection';
import DateRangeSection from './dateRangeSection';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

const AddVideoCallPage: FC = () => {

  const classes = useStyles();
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PrivateLayout title='Add New 1:1 Video Call' className={classes.wrapper}>
      <Box className={classes.contents}>
        <Header
          title='Create 1:1 Video Call'
          onClickSaveAsDraft={() => { }}
          onClickPublishAccess={() => { }}
          publishBtnText='Publish'
          showMobilePublishBtn
        />
        <Box mt={{ xs: '18px', md: 3 }} display='flex' flexWrap='wrap' justifyContent='space-between'>

          <Box className={classes.leftSection}>
            <GeneralInfomation />
            <DateRangeSection />
            <DailyAvailabilitySection />
            <LocationSection />
          </Box>

          <Box className={clsx(classes.rightSection, classes.videoCallRightSection)}>
            <DetailCard
              bankCash='10.00'
              showCallZoom
              date={isMobile ? '19th Mar, 22' : '19th March, 2022'}
            />
            <Box className='sell-more-contents-box' mt='30px'>
              <SellMoreContents
                specificLinkTitle='Specific Link For 1:1 Video Call'
                specificLinkSubTitle='Use the link below to display your 1:1 Video Call'
                specificLink='https://FYP.bio/lodeto/bundles/QnVuZ..'
                hideBlog
              />
            </Box>
          </Box>

          <Box className={classes.footerBtns}>
            <Grid container columnSpacing='10.6px'>
              <Grid item xs={6}>
                <CustomButton variant='contained' fullWidth className='save-as-draft' boxShadow='none'>
                  Save as Draft
                </CustomButton>
              </Grid>
              <Grid item xs={6}>
                <CustomButton variant='contained' background='blueGradient' fullWidth className='publish-btn' boxShadow='none'>
                  Publish
                </CustomButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </PrivateLayout>
  )
}

export default AddVideoCallPage;
