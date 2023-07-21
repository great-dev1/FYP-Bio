import React, { FC, useState, useRef } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import CustomImage from 'components/customImage';
import Header from './header';
import EmbedContents from './embedContents';
import LatestContents from './latestContent';
import LayoutDesign from './layoutDesign';
import MonetizableBlocks from './monetizableBlocks';
import SocialLinks from './socialLinks';

import closeIcon from 'assets/img/close-black.svg';

import styles from 'assets/jss/components/exploreEmbedsStyles';
const useStyles = makeStyles(styles);

interface Props {
  open: boolean;
  handleClose: () => void;
}

const ExploreEmbedsDialog: FC<Props> = (props) => {

  const { open, handleClose } = props;

  const classes = useStyles();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const embedSectionRef = useRef<HTMLDivElement>(null);
  const latestSectionRef = useRef<HTMLDivElement>(null);
  const layoutSectionRef = useRef<HTMLDivElement>(null);
  const monetizableSectionRef = useRef<HTMLDivElement>(null);
  const socialSectionRef = useRef<HTMLDivElement>(null);

  const [tab, setTab] = useState('embed-content');

  const onClickTab = (tabId: string) => {
    if (tabId === 'embed-content') {
      embedSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'latest-content') {
      latestSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'layout-design') {
      layoutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'monetizable-block') {
      monetizableSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'social-links') {
      socialSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    setTab(tabId);
  }

  const listenToScroll = () => {
    if (wrapperRef.current) {
      const { bottom: wBottom, top: wTop } = wrapperRef.current.getBoundingClientRect();
      if (embedSectionRef.current) {
        const { bottom: embedBottom, top: embedTop } = embedSectionRef.current.getBoundingClientRect();
        if ((embedTop >= wTop) || (wBottom < embedBottom)) {
          setTab('embed-content');
        }
      }
      if (latestSectionRef.current) {
        const { bottom: latestBottom, top: latestTop } = latestSectionRef.current.getBoundingClientRect();
        if ((latestTop >= wTop && latestBottom <= wBottom) || (latestTop < wTop && wBottom < latestBottom)) {
          setTab('latest-content');
        }
      }
      if (layoutSectionRef.current) {
        const { bottom: layoutBottom, top: layoutTop } = layoutSectionRef.current.getBoundingClientRect();
        if ((layoutTop >= wTop && layoutBottom <= wBottom) || (layoutTop < wTop && wBottom < layoutBottom)) {
          setTab('layout-design');
        }
      }
      if (monetizableSectionRef.current) {
        const { bottom: mBottom, top: mTop } = monetizableSectionRef.current.getBoundingClientRect();
        if ((mTop >= wTop && mBottom <= wBottom) || (mTop < wTop && wBottom < mBottom) || (mTop >= wTop && mTop < (wTop + 100))) {
          setTab('monetizable-block');
        }
      }
      if(socialSectionRef.current) {
        const { bottom: sBottom, top: sTop } = socialSectionRef.current.getBoundingClientRect();
        if ((sTop >= wTop && sBottom <= wBottom) || (sTop < wTop && wBottom < sBottom) || (sTop >= wTop && sTop < (wTop + 100))) {
          setTab('social-links');
        }
      }
    }
  }

  const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    listenToScroll();
  } 

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog}>
      <Box className={classes.contents} position='relative' display='flex' flexDirection='column'>
        <IconButton className={classes.closeBtn} onClick={handleClose}>
          <CustomImage src={closeIcon} alt='Close' width={15.2} height={15.2} mdWidth={9.42} mdHeight={9.42} />
        </IconButton>
        <Typography className='modal-title' variant='h1' fontWeight={700} color='#000' fontSize={20} lineHeight='28px'>
          Add New Block
        </Typography>
        <Header activeTab={tab} onChangeTab={onClickTab} />

        <Box className={classes.scrollWrapper} ref={wrapperRef} onScroll={scrollHandler}>
          <EmbedContents ref={embedSectionRef} />
          <LatestContents ref={latestSectionRef} />
          <LayoutDesign ref={layoutSectionRef} />
          <MonetizableBlocks ref={monetizableSectionRef} />
          <SocialLinks ref={socialSectionRef} />
        </Box>
      </Box>
    </Dialog>
  )
}

export default ExploreEmbedsDialog;
