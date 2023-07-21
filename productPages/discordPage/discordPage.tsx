import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import SupportLayout from 'components/layouts/supportLayout';
import CustomImage from 'components/customImage';
import MembershipCard from './membershipCard';

import headerImg from 'assets/img/product/discord-header.webp';
import chooseMembership from 'assets/img/product/choose-membership.svg';
import loginImg from 'assets/img/product/login.svg';
import dollarImg from 'assets/img/product/dollar.svg';
import communityIcon from 'assets/img/product/community.svg';

import styles from 'assets/jss/pages/discordPageStyles';
const useStyles = makeStyles(styles);

const DiscordPage: FC = () => {

  const classes = useStyles();

  return (
    <SupportLayout title='Discord Product Page'>
      <Box className={classes.wrapper}>
        <Box className={classes.banner}></Box>
        <Box className={classes.contents}>
          <Box className={classes.header}>
            <Box width='fit-content' display='flex' mx='auto' className='header-img'>
              <CustomImage src={headerImg} alt='' width={123} height={127} mdWidth={101} mdHeight={104} />
            </Box>
            <Typography variant='h1' align='center' color='#000' fontWeight={700}>
              Community Name
            </Typography>
            <Typography variant='body1' align='center' color='#000' fontWeight={300}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et doloe weror
              laboris nisi ut aliquip ex ea commodo consequat. Duis aui.
            </Typography>
          </Box>

          <Box className={classes.optionsBox}>
            <Typography variant='h2' align='center' color='#000' fontWeight={600}>
              Select Membership Level
            </Typography>

            <Grid container rowSpacing='43px' columnSpacing={{ xs: 3, lg: '30px', xl: '50px' }} justifyContent='center'>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <MembershipCard
                  levelType='Behind Scenes'
                  price={10}
                  options={[
                    'Access to Behind the scenes content, personal vlogs and photos',
                    'Participate in my monthly livestreams directly from the cabin, join in and ask questions or just hang out with the rest of us',
                    'Access to my Discord and Telegram channels and groups'
                  ]}
                  role='Behind Scenes'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <MembershipCard
                  levelType='The Secret Group'
                  price={15}
                  description='All the perks you get from Behind Scenes in addition to'
                  options={[
                    'Be a part of the secret group that gets to vote on the topics of my future live videos and content',
                    'You get to see all my bloopers! and yes there are lots of them'
                  ]}
                  role='Secret Group Member'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <MembershipCard
                  levelType='One on One'
                  price={20}
                  description='All the perks you get from The Secret Group in addition to'
                  options={[
                    'Once a month get a private video session with me, English or Swedish The subject is yours to choose and the session is up to 30 min',
                    'Access to my Discord and Telegram private channel and group'
                  ]}
                  role='One on One'
                />
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.footer}>
            <Typography variant='h4' align='center' fontWeight={700} color='#000'>
              How it works
            </Typography>
            <Box className={classes.footerInner}>
              <Grid container rowSpacing='28px'>
                <Grid item xs={12} sm={6} md={3}>
                  <Box className={classes.workCard}>
                    <Box display='flex' justifyContent='center' className='card-img'>
                      <CustomImage src={chooseMembership} alt='' width={46} height={46} mdWidth={37.1} mdHeight={37.1} />
                    </Box>
                    <Typography variant='body1' align='center' fontWeight={300} color='#000'>
                      Choose Membership
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box className={classes.workCard}>
                    <Box display='flex' justifyContent='center' className='card-img'>
                      <CustomImage src={loginImg} alt='' width={42.5} height={40} mdWidth={34.4} mdHeight={32.4} />
                    </Box>
                    <Typography variant='body1' align='center' fontWeight={300} color='#000'>
                      Login To Discord
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box className={classes.workCard}>
                    <Box display='flex' justifyContent='center' className='card-img'>
                      <CustomImage src={dollarImg} alt='' width={22.6} height={44} mdWidth={18.3} mdHeight={35.55} />
                    </Box>
                    <Typography variant='body1' align='center' fontWeight={300} color='#000'>
                      Make a Purchase
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box className={classes.workCard}>
                    <Box display='flex' justifyContent='center' className='card-img'>
                      <CustomImage src={communityIcon} alt='' width={36.05} height={32.1} mdWidth={29.15} mdHeight={15.94} />
                    </Box>
                    <Typography variant='body1' align='center' fontWeight={300} color='#000'>
                      Get Community Invite
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </SupportLayout>
  )
}

export default DiscordPage;
