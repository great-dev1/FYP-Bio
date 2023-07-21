import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import { OnlyFansIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from "components/svg";

import { carouselImages } from "assets/mockdata/fypBioData";
import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const MyTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout className="my-template" title="My Theme" logoColor='white'>
      <BannerCarousel images={carouselImages} />
      <Box className={classes.contentsInner} pb='30px'>
        <UserInfoBox moveToTop={true} />
        <Box>
          <LinkItem
            title="OnlyFans"
            icon={<OnlyFansIcon color='#313744' />}
            hasBgImg
            className='animate__animated animate__flash animate__delay-2s animate__infinite'
          />
          <LinkItem
            title="Discord"
            icon={<DiscordIcon color='#313744' />}
          />
          <LinkItem
            title="Cameo"
            icon={<CameoIcon color='#313744' />}
          />
          <LinkItem
            title="Paypal"
            icon={<PaypalIcon color='#313744' />}
          />
          <LinkItem
            title="GoFundMe"
            icon={<GoFundMeIcon color='#313744' />}
          />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default MyTemplate;
