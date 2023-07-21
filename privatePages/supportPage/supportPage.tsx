import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import SupportLayout from 'components/layouts/supportLayout';
import EmailForm from './emailForm';
import DiscordForm from './discordForm';
import { DiscordIcon, EmailIcon, FacebookIcon, TwitterIcon, RedditIcon, InstagramFilledIcon } from 'components/svg';

import styles from 'assets/jss/pages/supportPageStyles';
const useStyles = makeStyles(styles);

const SupportPage: FC = () => {

  const classes = useStyles();

  const [method, setMethod] = useState('email');

  return (
    <SupportLayout title='Support'>
      <Box className={classes.wrapper}>
        <Box className={classes.contentsInner} display='flex' justifyContent='space-between' flexWrap='wrap' position='relative'>
          <Box className={classes.leftSection}>
            <Box className={classes.leftHeader} position='relative'>
              <Typography variant='body1' color='#000'>
                Get in touch
              </Typography>
              <Typography variant='h1' fontWeight={700} color='#000'>
                How can we help you?
              </Typography>
            </Box>
            <Box>
              <Box className={clsx(classes.optionItem, {[classes.selectedOption]: method === 'email'})} display='flex' alignItems='center'
                onClick={() => setMethod('email')}
              >
                <Box className='option-icon' display='flex' alignItems='center' justifyContent='center'>
                  <EmailIcon color='#9F83EB' />
                </Box>
                <Box>
                  <Typography variant='h2'>
                    Email Address
                  </Typography>
                  <Typography variant='body1'>
                    Hello@fypbio.com
                  </Typography>
                </Box>
              </Box>
              <Box className={clsx(classes.optionItem, {[classes.selectedOption]: method === 'discord'})} display='flex' alignItems='center'
                onClick={() => setMethod('discord')} sx={{marginBottom: '0 !important'}}
              >
                <Box className='option-icon' display='flex' alignItems='center' justifyContent='center'>
                  <DiscordIcon color='#9F83EB' width={25.43} height={18.82} />
                </Box>
                <Box>
                  <Typography variant='h2'>
                    Discord
                  </Typography>
                  <Typography variant='body1'>
                    @fypbiosupport
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.rightSection}>
            {
              method === 'email' ? <EmailForm /> : <DiscordForm />
            }
          </Box>
          
          <Box position='absolute' className={classes.socialLinks} display='flex'>
            <Link href='/' underline='none'>
              <FacebookIcon color='#000' width={11} height={21.8} />
            </Link>
            <Link href='/' underline='none'>
              <TwitterIcon color='#000' width={22.86} height={18.61} />
            </Link>
            <Link href='/' underline='none'>
              <InstagramFilledIcon color='#000' width={22.25} height={22} />
            </Link>
            <Link href='/' underline='none'>
              <RedditIcon color='#000' width={28.1} height={22.74} />
            </Link>
            <Link href='/' underline='none'>
              <DiscordIcon color='#000' width={26} height={18.6} />
            </Link>
          </Box>
        </Box>
      </Box>
    </SupportLayout>
  )
}

export default SupportPage;
