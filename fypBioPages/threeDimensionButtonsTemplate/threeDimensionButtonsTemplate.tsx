import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import { OnlyFansIcon, VimeoIcon, ShopifyIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { carouselImages } from "assets/mockdata/fypBioData";
import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const ThreeDimensionTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout className="three-dimension-buttons-template" title="3D Buttons" logoColor='black'>
      <BannerCarousel images={carouselImages} />
      <Box className={classes.contentsInner}>
        <UserInfoBox moveToTop={true} />
        <Box className='link-items-list'>
          <LinkItem
            title="OnlyFans"
            icon={<OnlyFansIcon />}
            className='animate__animated animate__pulse animate__delay-2s animate__infinite'
          />
          <LinkItem
            title="Vimeo"
            icon={<VimeoIcon />}
          />
          <LinkItem
            title="Shopify"
            icon={<ShopifyIcon />}
          />
        </Box>

        <Box mt={{ xs: '30px', md: '58px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default ThreeDimensionTemplate;
