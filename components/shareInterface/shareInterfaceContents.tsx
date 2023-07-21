import React, { FC, useState } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import StartView from './startView';
import SocialMediaView from './socialMediaView';
import AddBioView from './addBioView';
import QrCodeView from './qrCodeView';
import AddContentsView from './addContentsView';
import CustomSnackbar from 'components/customSnackbar';

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
}

const ShareInterfaceContents: FC<Props> = (props) => {

  const { handleClose } = props;
  const classes = useStyles();

  const [tab, setTab] = useState<'start' | 'shareMedia' | 'addBio' | 'qrCode' | 'openPage'>('start');
  const [contentType, setContentType] = useState('');
  const [copied, setCopied] = useState(false);

  const getSocialIcon = (socialName: string) => {
    switch (socialName) {
      case 'Facebook':
        return <Image src={facebookIcon} alt='' width={10.39} height={20} />
      case 'Twitter':
        return <Image src={twitterIcon} alt='' width={19.97} height={16.23} />
      case 'Instagram':
        return <Image src={instagramIcon} alt='' width={19} height={19} />
      case 'Tiktok':
        return <Image src={tiktokIcon} alt='' width={16.66} height={19} />
      case 'Twitch':
        return <Image src={twitchIcon} alt='' width={16.86} height={17.68} />
      case 'Youtube':
        return <Image src={youtubeIcon} alt='' width={21.55} height={15.14} />
      case 'LinkedIn':
        return <Image src={linkedinIcon} alt='' width={18.1} height={16.4} />
      case 'Pinterest':
        return <Image src={pinterestIcon} alt='' width={15.13} height={18.63} />
      case 'Discord':
        return <Image src={discordIcon} alt='' width={19.71} height={14.07} />
      case 'Reddit':
        return <Image src={redditIcon} alt='' width={20.69} height={16.74} />
      default:
        return <Image src={facebookIcon} alt='' width={10.39} height={20} />
    }
  }

  return (
    <Box className={classes.shareContents}>
      {
        tab === 'start' && (
          <StartView
            handleClickNext={(val) => setTab(val)}
            handleClose={handleClose}
            onClickCopy={() => setCopied(true)}
          />
        )
      }
      {
        tab === 'shareMedia' && (
          <SocialMediaView
            handleClose={handleClose}
            handleClickPrev={() => setTab('start')}
          />
        )
      }
      {
        tab === 'addBio' && contentType === '' && (
          <AddBioView
            handleClose={handleClose}
            handleClickPrev={() => setTab('start')}
            handleClickNext={(val) => setContentType(val)}
          />
        )
      }
      {
        tab === 'addBio' && contentType !== '' && (
          <AddContentsView
            handleClose={handleClose}
            handleClickPrev={() => setContentType('')}
            socialName={contentType}
            socialLinkIcon={getSocialIcon(contentType)}
            onClickCopy={() => setCopied(true)}
          />
        )
      }
      {
        tab === 'qrCode' && (
          <QrCodeView
            handleClose={handleClose}
            handleClickPrev={() => setTab('start')}
          />
        )
      }
      <CustomSnackbar
        open={copied}
        handleClose={() => setCopied(false)}
      />
    </Box>
  )
}

export default ShareInterfaceContents;
