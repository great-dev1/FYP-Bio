import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

import PrivateLayout from "components/layouts/privateLayout";
import Header from 'components/addProduct/header';
import DetailCard from 'components/addProduct/detailCard';
import SellMoreContents from 'components/addProduct/sellMoreContents';
import GeneralInfomation from './generalInfomation';
import CustomButton from 'components/customButton';
import AddContentsSection from './addContentsSection';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

const AddExclusionPage: FC = () => {

  const classes = useStyles();

  const [times, setTimes] = useState('Monthly');
  const [isFree, setIsFree] = useState(false);

  return (
    <PrivateLayout title='Add New Photo / Video' className={classes.wrapper}>
      <Box className={classes.contents}>
        <Header
          title='Add Exclusive Video or Image'
          onClickSaveAsDraft={() => { }}
          onClickPublishAccess={() => { }}
          publishBtnText='Publish'
        />
        <Box mt={{ xs: '18px', md: 3 }} display='flex' flexWrap='wrap' justifyContent='space-between'>
          <Box className={classes.leftSection}>
            <GeneralInfomation
              times={times}
              onChangeTimes={(val) => setTimes(val)}
              isFree={isFree}
              onChangeIsFree={(val) => setIsFree(val)}
            />
            <AddContentsSection />
          </Box>

          <Box className={classes.rightSection}>
            <DetailCard bankCash='10.00' />
            <Box className='sell-more-contents-box' mt='30px'>
              <SellMoreContents
                specificLinkTitle='Specific Link For This Exclusive Content'
                specificLinkSubTitle='Use the link below to display your exclusive content post'
                specificLink='https://FYP.bio/lodeto/bundles/QnVuZ..'
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

export default AddExclusionPage;
