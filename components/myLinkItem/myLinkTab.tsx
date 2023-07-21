import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import CustomImage from 'components/customImage';
import { DesignPencilIcon, ImageIcon, JqueryIcon, OutlinedLockIcon } from 'components/svg';

import calendarIcon from 'assets/img/calendar.svg';
import redirectIcon from 'assets/img/redirect.svg';
import clockIcon from 'assets/img/clock.svg';
import removeIcon from 'assets/img/remove.svg';
import activeCalendarIcon from 'assets/img/active-calendar.svg';
import activeRedirectIcon from 'assets/img/active-redirect.svg';
import activeClockIcon from 'assets/img/active-clock.svg';

import styles from 'assets/jss/components/myLinkItemStyles';
const useStyles = makeStyles(styles);

interface Props {
  activeTab: string;
  onChangeTab: (val: string) => void;
}

const MyLinkTab: FC<Props> = (props) => {

  const { activeTab, onChangeTab } = props;
  const classes = useStyles();

  return (
    <Box className={classes.tabs} display='flex'>
      <Button
        className={clsx(classes.tabBtn, { [classes.activeTab]: activeTab === 'design' })}
        onClick={() => onChangeTab('design')}
      >
        <DesignPencilIcon color={activeTab === 'design' ? '#BB14E2' : '#8b8b8b'} />
      </Button>
      <Button
        className={clsx(classes.tabBtn, { [classes.activeTab]: activeTab === 'picture' })}
        onClick={() => onChangeTab('picture')}
      >
        <ImageIcon width={20.43} height={16.22} color={activeTab === 'picture' ? '#BB14E2' : '#8b8b8b'} />
      </Button>
      <Button
        className={clsx(classes.tabBtn, { [classes.activeTab]: activeTab === 'prioritize' })}
        onClick={() => onChangeTab('prioritize')}
      >
        <JqueryIcon color={activeTab === 'prioritize' ? '#BB14E2' : '#8b8b8b'} />
      </Button>
      <Button
        className={clsx(classes.tabBtn, { [classes.activeTab]: activeTab === 'schedule' })}
        onClick={() => onChangeTab('schedule')}
      >      
        {
          activeTab === 'schedule' ? (
            <CustomImage src={activeCalendarIcon} width={18.1} height={17.98} mdWidth={13.36} mdHeight={13.27} alt="" />
          ) : (
            <CustomImage src={calendarIcon} width={18.1} height={17.98} mdWidth={13.36} mdHeight={13.27} alt="" />
          )
        }
      </Button>
      <Button
        className={clsx(classes.tabBtn, { [classes.activeTab]: activeTab === 'lock' })}
        onClick={() => onChangeTab('lock')}
      >
        <OutlinedLockIcon color={activeTab === 'lock' ? '#BB14E2' : '#8b8b8b'} />
      </Button>
      <Button
        className={clsx(classes.tabBtn, { [classes.activeTab]: activeTab === 'redirect' })}
        onClick={() => onChangeTab('redirect')}
      >
        {
          activeTab === 'redirect' ? (
            <CustomImage src={activeRedirectIcon} width={23} height={23} mdWidth={16.7} mdHeight={16.7} alt="" />
          ) : (
            <CustomImage src={redirectIcon} width={23} height={23} mdWidth={16.7} mdHeight={16.7} alt="" />
          )
        }        
      </Button>
      <Button
        className={clsx(classes.tabBtn, { [classes.activeTab]: activeTab === 'countdown' })}
        onClick={() => onChangeTab('countdown')}
      >
        {
          activeTab === 'countdown' ? (
            <CustomImage src={activeClockIcon} width={17.97} height={17.97} mdWidth={13.77} mdHeight={13.77} alt="" />
          ) : (
            <CustomImage src={clockIcon} width={17.97} height={17.97} mdWidth={13.77} mdHeight={13.77} alt="" />
          )
        }
      </Button>

      <IconButton className={classes.tabRemoveBtn}>
        <Image src={removeIcon} width={16.38} height={16.39} alt="" />
      </IconButton>
    </Box>
  )
}

export default MyLinkTab;
