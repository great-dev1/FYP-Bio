import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import { OnlyFansIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const BgImageTemplate2Template: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout className="bg-img-2-template" title="Back Image 2 Theme" logoColor='black'>
      <Box className={classes.contentsInner}>
        <UserInfoBox />
        <Box>
          <LinkItem
            title="OnlyFans"
            icon={<OnlyFansIcon />}
          />
          <LinkItem
            title="Discord"
            icon={<DiscordIcon />}
          />
          <LinkItem
            title="Cameo"
            icon={<CameoIcon />}
          />
          <LinkItem
            title="Paypal"
            icon={<PaypalIcon />}
          />
          <LinkItem
            title="GoFundMe"
            icon={<GoFundMeIcon />}
          />
        </Box>

        <Box mt={{ xs: '24px', md: '55px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default BgImageTemplate2Template;
