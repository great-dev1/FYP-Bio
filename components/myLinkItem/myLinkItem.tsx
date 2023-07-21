import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import TitleField from './titleField';
import UrlField from './urlField';
import MyLinkTab from './myLinkTab';
import PrioritizeContents from './prioritizeContents';
import ScheduleContents from './scheduleContents';
import LockContents from './lockContents';
import RedirectContents from './redirectContents';
import CountdownContents from './countdownContents';
import LinkStyleContents from './linkStyleContents';
import AddImageContents from './addImageContents';

import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

const MyLinkItem: FC = () => {

  const classes = useStyles();

  const [tab, setTab] = useState('');

  return (
    <Box className={classes.myLinkItemWrapper}>
      <TitleField />
      <UrlField />
      <MyLinkTab activeTab={tab} onChangeTab={(val) => setTab(val)} />
      {
        tab === 'design' && (
          <LinkStyleContents handleClose={() => setTab('')} />
        )
      }
      {
        tab === 'picture' && (
          <AddImageContents handleClose={() => setTab('')} />
        )
      }
      {
        tab === 'prioritize' && (
          <PrioritizeContents handleClose={() => setTab('')} />
        )
      }
      {
        tab === 'schedule' && (
          <ScheduleContents handleClose={() => setTab('')} />
        )
      }
      {
        tab === 'lock' && (
          <LockContents handleClose={() => setTab('')} />
        )
      }
      {
        tab === 'redirect' && (
          <RedirectContents handleClose={() => setTab('')} />
        )
      }
      {
        tab === 'countdown' && (
          <CountdownContents handleClose={() => setTab('')} />
        )
      }
    </Box>
  )
}

export default MyLinkItem;
