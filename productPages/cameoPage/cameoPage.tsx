import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import SupportLayout from 'components/layouts/supportLayout';
import VideoDialog from 'components/videoDialog';
import MoneyBackGuarantee from './moneyBackGuarantee';
import OfferedServices from './offeredServices';
import DetailBox from './detailBox';
import RecentOrders from './recentOrders';
import Questions from './questions';
import CameoForForm from './cameoForForm';
import CameoFromForm from './cameoFromForm';
import InstructionsForm from './instructionsForm';
import CustomButton from 'components/customButton';

import styles from 'assets/jss/pages/cameoPageStyles';
const useStyles = makeStyles(styles);

const CameoPage: FC = () => {

  const classes = useStyles();

  const [openVideo, setOpenVideo] = useState(false);

  return (
    <SupportLayout title='Buyer Cameo Product Page'>
      <Box className={classes.wrapper} display='flex' flexWrap='wrap' justifyContent='space-between'>
        <Box className={classes.leftSection}>
          <DetailBox />
          <Box className={classes.leftOffer} mt={{xs: '13px', md: '23px'}}>
            <OfferedServices />
          </Box>
          <RecentOrders onClickVideo={() => setOpenVideo(true)} />
          <Questions />
          <CameoForForm />
          <CameoFromForm />
          <InstructionsForm />
          <CustomButton variant='contained' fullWidth background='blueGradient' className={classes.purchaseBtn} boxShadow='none'>
            Purchase Cameo
          </CustomButton>
        </Box>
        <Box className={classes.rightSection}>
          <Box className={classes.rightOffer}>
            <OfferedServices />
          </Box>
          <MoneyBackGuarantee />
        </Box>
      </Box>

      <VideoDialog
        filePath='/video/video.mp4'
        open={openVideo}
        handleClose={() => setOpenVideo(false)}
      />
    </SupportLayout>
  )
}

export default CameoPage;
