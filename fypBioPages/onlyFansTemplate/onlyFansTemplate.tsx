import React, { FC } from "react";
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import { OnlyFansIcon, VimeoIcon, TwitchIcon, SpotifyIcon, TiktokIcon } from "components/svg";
import HeartCard from 'components/fypBioTemplate/heartCard';
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { carouselImages } from "assets/mockdata/fypBioData";
import cardImg from 'assets/img/fypbio/card-img.webp';
import styles from "assets/jss/pages/fypBioPageStyles";

const useStyles = makeStyles(styles);

const OnlyFansTemplate: FC = () => {
  const classes = useStyles();

  return (
    <FypBioLayout className="only-fans-template" title="Only Fans Theme" logoColor='white'>
      <BannerCarousel images={carouselImages} />
      <Box className={classes.contentsInner}>
        <UserInfoBox moveToTop={true} />
        <Box>
          <LinkItem
            title="OnlyFans"
            icon={<OnlyFansIcon />}
            hasBgImg={true}
            className='animate__animated animate__bounce animate__delay-2s animate__infinite'
          />
          <LinkItem
            title="Vimeo"
            icon={<VimeoIcon />}
          />
          <LinkItem
            title="Twitch"
            icon={<TwitchIcon />}
          />
          <LinkItem title="Spotify" icon={<SpotifyIcon />} />
          <LinkItem
            title="Tiktok"
            icon={<TiktokIcon />}
          />

          <Box className={clsx(classes.subscribeForm, 'subscribe-form')}>
            <Typography variant='body1'>
              Get all the latest about me!!
            </Typography>
            <Box position='relative'>
              <OutlinedInput fullWidth placeholder='Enter Email Address' />
              <Button variant='contained'>
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>

        <Grid container rowSpacing='20px' columnSpacing={{ md: 3 }}>
          <Grid item xs={12} sm={6}>
            <HeartCard
              backgroundImg={cardImg}
              title='Random Theory Podcast'
              subTitle='Listen to our new podcast over here'
              showDetails={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard
              backgroundImg={cardImg}
              title='Random Theory Podcast'
              subTitle='Listen to our new podcast over here'
              showDetails={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard
              backgroundImg={cardImg}
              title='Random Theory Podcast'
              subTitle='Listen to our new podcast over here'
              showDetails={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard
              backgroundImg={cardImg}
              title='Random Theory Podcast'
              subTitle='Listen to our new podcast over here'
              showDetails={true}
            />
          </Grid>
        </Grid>

        <Box my={{ xs: '20px', md: '26px' }}>
          <LinkItem
            title="Twitch"
            icon={<TwitchIcon />}
          />
        </Box>

        <Grid container rowSpacing='20px' columnSpacing={{ md: 3 }}>
          <Grid item xs={12} sm={6}>
            <HeartCard backgroundImg={cardImg} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard backgroundImg={cardImg} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard backgroundImg={cardImg} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard backgroundImg={cardImg} />
          </Grid>
        </Grid>

        <Box mt={{xs: '24px', md: '55px'}}>
          <CardsSection showCarousel={true} />
        </Box>
      </Box>
    </FypBioLayout>
  );
};

export default OnlyFansTemplate;
