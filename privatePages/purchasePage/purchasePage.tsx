import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

import SupportLayout from 'components/layouts/supportLayout';
import TabHeader from './tabHeader';
import ExclusiveContent from './exclusiveContent';
import PersonalShoutout from './personalShoutout';
import VideoCalls from './videoCalls';
import Tipping from './tipping';
import DiscordAccess from './discordAccess';
import TelegramAccess from './telegramAccess';

import styles from 'assets/jss/pages/purchasePageStyles';
const useStyles = makeStyles(styles);

const PurchasePage: FC = () => {

  const classes = useStyles();

  const [selectedTab, setSelectedTab] = useState('Exclusive Content');

  const tabs = [
    'Exclusive Content', 'Personal Shoutout', 'Video Calls', 'Tipping', 'Discord Access', 'Telegram Access'
  ];

  return (
    <SupportLayout title='Purchase Page'>
      <Box className={classes.wrapper}>
        <Box className={classes.contents}>
          <Typography variant='h1' fontWeight={700} className='tab-title' color='#000'>
            {
              selectedTab === 'Exclusive Content' && 'Exclusive Content Management'
            }
            {
              selectedTab === 'Personal Shoutout' && 'Personal Shoutout Management'
            }
             {
              selectedTab === 'Video Calls' && 'Video Calls Management'
            }
             {
              selectedTab === 'Tipping' && 'Tipping Management'
            }
             {
              selectedTab === 'Discord Access' && 'Discord Access Management'
            }
             {
              selectedTab === 'Telegram Access' && 'Telegram Access Management'
            }
          </Typography>
          <Box className={classes.contentsInner}>
            <TabHeader tabs={tabs} value={selectedTab} setValue={(val) => setSelectedTab(val)} />
            <Box className={classes.tabContents}>
              {
                selectedTab === 'Exclusive Content' && <ExclusiveContent />
              }
              {
                selectedTab === 'Personal Shoutout' && <PersonalShoutout />
              }
              {
                selectedTab === 'Video Calls' && <VideoCalls />
              }
              {
                selectedTab === 'Tipping' && <Tipping />
              }
              {
                selectedTab === 'Discord Access' && <DiscordAccess />
              }
              {
                selectedTab === 'Telegram Access' && <TelegramAccess />
              }
            </Box>
          </Box>
        </Box>
      </Box>
    </SupportLayout>
  )
}

export default PurchasePage;
