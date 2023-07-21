import React, { FC, useState } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import SupportLayout from 'components/layouts/supportLayout';
import CardItem from './cardItem';
import CustomImage from 'components/customImage';
import ImageDialog from 'components/imageDialog';

import cardImg from 'assets/img/fypbio/main-card-img.webp';
import userAvatar from 'assets/img/avatar-1.webp';

import styles from 'assets/jss/pages/bundlePageStyles';
const useStyles = makeStyles(styles);

const BundlePage: FC = () => {

  const classes = useStyles();

  const [openImg, setOpenImg] = useState(false);

  return (
    <SupportLayout title='Bought Content Page'>
      <Box className={classes.wrapper} display='flex' justifyContent='space-between' flexWrap='wrap'>
        <Box className={classes.leftSection}>
          <Typography variant='h1' fontWeight={700} color='#000'>
            Content
          </Typography>
          <Grid container rowSpacing={{ xs: '20px', md: '28px' }} columnSpacing={{ xs: '14px', md: '20px' }}>
            {
              [...Array(12)].map((el, index) => (
                <Grid item xs={6} md={6} lg={4} xl={2.4} key={index}>
                  <CardItem handleOpen={() => setOpenImg(true)} />
                </Grid>
              ))
            }
          </Grid>
        </Box>
        <Box className={classes.rightSection}>
          <Box display='flex' className='card-image'>
            <Image src={cardImg} alt='' width={443} height={174} />
          </Box>
          <Box className='card-contents'>
            <Box className='title'>
              <Typography variant='body1' color='#000' fontWeight={300}>
                Bundles
              </Typography>
              <Typography variant='h1' fontWeight={700} color='#000'>
                Topless Sample
              </Typography>
            </Box>
            <Box display='flex' alignItems='center' className='user-info'>
              <CustomImage src={userAvatar} alt='' width={28} height={28} mdWidth={24} mdHeight={24} />
              <Typography variant='body1' color='#AAAAAA'>
                Isabella Adams
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <ImageDialog 
        handleClose={() => setOpenImg(false)} 
        open={openImg} 
        filePath='/img/main-card-img.webp'
      />
    </SupportLayout>
  )
}

export default BundlePage;
