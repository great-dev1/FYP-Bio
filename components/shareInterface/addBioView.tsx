import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

import CustomImage from 'components/customImage';
import TitleBox from './titleBox';

import chevronIcon from 'assets/img/share-ui/chevron-right.svg';
import facebookIcon from 'assets/img/share-ui/facebook.svg';
import twitterIcon from 'assets/img/share-ui/twitter.svg';
import instagramIcon from 'assets/img/share-ui/instagram.svg';
import linkedinIcon from 'assets/img/share-ui/linkedin.svg';
import tiktokIcon from 'assets/img/tiktok.svg';
import youtubeIcon from 'assets/img/red-youtube.svg';
import discordIcon from 'assets/img/discord.svg';
import pinterestIcon from 'assets/img/share-ui/pinterest.svg';
import redditIcon from 'assets/img/share-ui/reddit.svg';
import twitchIcon from 'assets/img/share-ui/twitch.svg';

import styles from 'assets/jss/components/shareInterfaceDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
  handleClickPrev: () => void;
  handleClickNext: (val: string) => void;
}

const AddBioView: FC<Props> = (props) => {

  const { handleClose, handleClickPrev, handleClickNext } = props;
  const classes = useStyles();

  return (
    <>
      <TitleBox
        title='Add to my Bio'
        subTitle='Share your FYP.Bio link to all your fans so everyone knows about it'
        handleClose={handleClose}
        showPrev
        handleClickPrev={handleClickPrev}
      />
      <Box className={classes.addBioView}>
        <Grid container rowSpacing={{ xs: '25px', md: '22.5px' }}>
          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')} onClick={() => handleClickNext('Facebook')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={facebookIcon} alt='' width={10.39} height={20} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Facebook
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')} onClick={() => handleClickNext('Twitter')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={twitterIcon} alt='' width={19.97} height={16.23} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Twitter
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')} onClick={() => handleClickNext('Instagram')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={instagramIcon} alt='' width={19} height={19} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Instagram
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')} onClick={() => handleClickNext('Tiktok')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={tiktokIcon} alt='' width={16.66} height={19} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Tiktok
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')} onClick={() => handleClickNext('Twitch')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={twitchIcon} alt='' width={16.86} height={17.68} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Twitch
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')} onClick={() => handleClickNext('Youtube')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={youtubeIcon} alt='' width={21.55} height={15.14} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Youtube
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')} onClick={() => handleClickNext('LinkedIn')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={linkedinIcon} alt='' width={18.1} height={16.4} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                LinkedIn
              </Typography>
              <IconButton className='next-btn' >
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')} onClick={() => handleClickNext('Pinterest')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={pinterestIcon} alt='' width={15.13} height={18.63} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Pinterest
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')} onClick={() => handleClickNext('Discord')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={discordIcon} alt='' width={19.71} height={14.07} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Discord
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')} onClick={() => handleClickNext('Reddit')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={redditIcon} alt='' width={20.69} height={16.74} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Reddit
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AddBioView;
