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
import snapchatIcon from 'assets/img/snapchat-color.svg';
import whatsappIcon from 'assets/img/share-ui/whatsapp.svg';
import linkedinIcon from 'assets/img/share-ui/linkedin.svg';
import messengerIcon from 'assets/img/share-ui/messenger.svg';
import emailIcon from 'assets/img/share-ui/email.svg';

import styles from 'assets/jss/components/shareInterfaceDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
  handleClickPrev: () => void;
}

const SocialMediaView: FC<Props> = (props) => {

  const { handleClose, handleClickPrev } = props;
  const classes = useStyles();

  return (
    <>
      <TitleBox
        title='Share on Social Media'
        subTitle='Share your FYP.Bio link to all your fans so everyone knows about it'
        handleClose={handleClose}
        showPrev
        handleClickPrev={handleClickPrev}
      />
      <Box className={classes.socialMediaView}>
        <Grid container rowSpacing={{ xs: '25px', md: '22.5px' }}>
          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={facebookIcon} alt='' width={10.39} height={20} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Share on Facebook
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={twitterIcon} alt='' width={19.97} height={16.23} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Share on Twitter
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={instagramIcon} alt='' width={19} height={19} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Share on Instagram
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={snapchatIcon} alt='' width={20.05} height={18.77} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Share on Snapchat
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={whatsappIcon} alt='' width={18.28} height={18.28} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Share on Whatsapp
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={linkedinIcon} alt='' width={18.1} height={16.4} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Share on LinkedIn
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={messengerIcon} alt='' width={17.02} height={18.28} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Share on Massenger
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className={clsx(classes.socialLink, 'social-line')}>
              <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
                <Image src={emailIcon} alt='' width={18.27} height={18.28} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
                Share on Email
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

export default SocialMediaView;
