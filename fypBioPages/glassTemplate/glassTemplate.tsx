import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import { OnlyFansIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { carouselImages } from "assets/mockdata/fypBioData";
import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const GlassTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout className="glass-template" title="Glass Theme" logoColor='white'>
      <BannerCarousel images={carouselImages} />
      <Box className={classes.contentsInner}>
        <UserInfoBox moveToTop={true} />
        <Box>
          <LinkItem
            title="OnlyFans"
            icon={<OnlyFansIcon color='#F4617C' />}
            hasBgImg={true}
            className='animate__animated animate__fadeInDown animate__delay-2s'
          />
          <LinkItem
            title="Discord"
            icon={<DiscordIcon color='#F4617C' />}
          />
          <LinkItem
            title="Cameo"
            icon={<CameoIcon color='#F4617C' />}
          />
          <LinkItem
            title="Paypal"
            icon={<PaypalIcon color='#F4617C' />}
          />
          <LinkItem
            title="GoFundMe"
            icon={<GoFundMeIcon color='#F4617C' />}
          />
        </Box>

        <Box mt={{ xs: '24px', md: '55px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default GlassTemplate;
