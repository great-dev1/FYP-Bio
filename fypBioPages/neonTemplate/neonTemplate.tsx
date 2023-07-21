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

const NeonTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout className="neon-template" title="Neon Theme" logoColor='white'>
      <BannerCarousel images={carouselImages} />
      <Box className={classes.contentsInner}>
        <UserInfoBox moveToTop={true} />
        <Box>
          <LinkItem
            title="OnlyFans"
            icon={<OnlyFansIcon color='#54AAF5' />}
            className='animate__animated animate__wobble animate__delay-2s animate__infinite'
          />
          <LinkItem
            title="Discord"
            icon={<DiscordIcon color='#54AAF5' />}
          />
          <LinkItem
            title="Cameo"
            icon={<CameoIcon color='#54AAF5' />}
          />
          <LinkItem
            title="Paypal"
            icon={<PaypalIcon color='#54AAF5' />}
          />
          <LinkItem
            title="GoFundMe"
            icon={<GoFundMeIcon color='#54AAF5' />}
          />
        </Box>

        <Box mt={{ xs: '24px', md: '40px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default NeonTemplate;
