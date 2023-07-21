import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

import SupportLayout from 'components/layouts/supportLayout';
import DetailCard from './detailCard';
import CustomImage from 'components/customImage';
import LockCard from './lockCard';
import LikesSection from './likesSection';
import SimilarContents from './similarContents';

import bannerImg from 'assets/img/fypbio/carousel-1.webp';

import styles from 'assets/jss/pages/exclustionPageStyles';
const useStyles = makeStyles(styles);

const ExclusionPage: FC = () => {

  const classes = useStyles();

  return (
    <SupportLayout title='Product Page'>
      <Box display='flex' justifyContent='space-between' flexWrap='wrap' className={classes.contents}>
        <Box className={classes.leftSection}>
          <Box className={classes.descriptionBox}>
            <Typography variant='h1' color='#000' fontWeight={700}>
              Topless Sample
            </Typography>
            <Box className='card-image' display='flex'>
              <CustomImage src={bannerImg} alt='' width={1023} height={347} mdWidth={333} mdHeight={347} />
            </Box>
            <Box className={classes.leftDetailCard}>
              <DetailCard />
            </Box>
            <Box className='desc-text'>
              <Typography variant='h4' color='#000' fontWeight={600} fontSize={19} lineHeight='27px' sx={{ marginBottom: '10px' }}>
                Description
              </Typography>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' fontSize={16.4} lineHeight='25px'>
                This is a sample of what type of content I&apos;m posting on Onlyfans, remember it&apos;s only Samples hihi, if you want to have full nude
                package check my products below and subscribe to get your full satisfaction
              </Typography>
            </Box>

            <Grid container rowSpacing='13px' columnSpacing={{ xs: '13px', md: '18px' }}>
              {
                [...Array(6)].map((el, index) => (
                  <Grid item xs={6} sm={4} md={4} lg={4} xl={2} key={index}>
                    <LockCard locked={index !== 1} filepath='/img/main-card-img.webp' />
                  </Grid>
                ))
              }
            </Grid>
          </Box>
          
          <LikesSection />
          <SimilarContents />
        </Box>
        <Box className={classes.rightSection}>
          <DetailCard />
        </Box>
      </Box>
    </SupportLayout>
  )
}

export default ExclusionPage;
