import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import { OnlyFansIcon, VimeoIcon, ShopifyIcon, CashappIcon, GleamIcon, BitcoinIcon, EthIcon, DogeIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { carouselImages } from "assets/mockdata/fypBioData";
import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const SnowTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout className="snow-template" title="Snow Theme" logoColor='black'>
      <BannerCarousel images={carouselImages} />
      <Box className={classes.contentsInner}>
        <UserInfoBox moveToTop={true} />
        <Box>
          <LinkItem
            title="OnlyFans"
            icon={<OnlyFansIcon />}
            hasBgImg={true}
            className='animate__animated animate__tada animate__delay-2s animate__infinite'
          />
          <LinkItem
            title="Vimeo"
            description="Exclusive Content Listed There!!"
            icon={<VimeoIcon />}
          />
          <LinkItem
            title="Shopify"
            description="Exclusive Content Listed There!!"
            icon={<ShopifyIcon />}
          />
          <LinkItem
            title="Cashapp"
            icon={<CashappIcon />}
          />
          <LinkItem
            title="Gleam"
            icon={<GleamIcon />}
          />
          <LinkItem
            title="Bitcoin"
            icon={<BitcoinIcon />}
          />
          <LinkItem
            title="ETH"
            icon={<EthIcon />}
          />
          <LinkItem
            title="Doge"
            icon={<DogeIcon />}
          />
        </Box>

        <Box mt={{ xs: '24px', md: '42px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default SnowTemplate;
