import React, { FC } from 'react';
import YouTube from 'react-youtube';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import {
  OnlyFansIcon, VimeoIcon, TwitchIcon, FacebookIcon,
  SoundcloudIcon, PinterestIcon, TelegramIcon, RedditIcon   
} from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const MinimalTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout className="minimal-template" title="Minimal Theme" logoColor='black'>
      <Box className={classes.contentsInner}>
        <UserInfoBox />
        <Box>
          <LinkItem
            title="OnlyFans"
            icon={<OnlyFansIcon color='#fff' />}
            hasBgImg={true}
            className='animate__animated animate__jello animate__infinite'
          />
          <LinkItem
            title="Vimeo"
            icon={<VimeoIcon color='#000' />}
          />
          <LinkItem
            title="Twitch"
            icon={<TwitchIcon color='#000' />}
          />
          <LinkItem title="Facebook" icon={<FacebookIcon color='#000' />} />
          <LinkItem
            title="Soundcloud"
            icon={<SoundcloudIcon color='#000' />}
          />
          <LinkItem title="Pinterest"
            icon={<PinterestIcon color='#000' />}
          />
          <LinkItem
            title="Telegram"
            icon={<TelegramIcon color='#000' />}
          />
          <LinkItem title="Reddit"
            icon={<RedditIcon color='#000' />}
          />
        </Box>

        <Box className={classes.videoWrapper}>
          <YouTube 
            videoId='kvkAoCbTM3Q'
            loading='lazy'
          />
        </Box>

        <Box mt={{ xs: '30px', md: '44px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default MinimalTemplate;
