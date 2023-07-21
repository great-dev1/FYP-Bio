import React, { FC, ContextType } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LeftArrow, RightArrow } from "./arrowBtns";

import embedContentIcon from 'assets/img/embeds/embed-content.svg';
import latestContentIcon from 'assets/img/embeds/latest-content.svg';
import layoutDesignIcon from 'assets/img/embeds/layout-design.svg';
import monetizableBlocksIcon from 'assets/img/embeds/monetizable-blocks.svg';
import socialLinksIcon from 'assets/img/embeds/social-links.svg';

import styles from 'assets/jss/components/exploreEmbedsStyles';
const useStyles = makeStyles(styles);

type scrollVisibilityApiType = ContextType<typeof VisibilityContext>;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

interface Props {
  activeTab: string;
  onChangeTab: (val: string) => void;
}

const Header: FC<Props> = (props) => {

  const { activeTab, onChangeTab } = props;
  const classes = useStyles();

  return (
    <Box className={classes.headerTab} position='relative'>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
      >
        <Box className={clsx('header-cell', { 'active': activeTab === 'embed-content' })} display='flex' flexDirection='column' alignItems='center'
          onClick={() => onChangeTab('embed-content')}
        >
          <Box className='header-cell-img' display='flex' alignItems='center' justifyContent='center' width={36} height={36} mb='15px'>
            <Image src={embedContentIcon} alt='' width={20.72} height={14.49} />
          </Box>
          <Typography variant='h3' color='#000' fontSize={17} fontWeight={300} lineHeight='24px' align='center'>
            Embed Content
          </Typography>
        </Box>

        <Box className={clsx('header-cell', { 'active': activeTab === 'latest-content' })}
          onClick={() => onChangeTab('latest-content')}
          display='flex' flexDirection='column' alignItems='center'>
          <Box className='header-cell-img' display='flex' alignItems='center' justifyContent='center' width={36} height={36} mb='15px'>
            <Image src={latestContentIcon} alt='' width={14.98} height={14.27} />
          </Box>
          <Typography variant='h3' color='#000' fontSize={17} fontWeight={300} lineHeight='24px' align='center'>
            Latest Content
          </Typography>
        </Box>

        <Box className={clsx('header-cell', { 'active': activeTab === 'layout-design' })}
          onClick={() => onChangeTab('layout-design')}
          display='flex' flexDirection='column' alignItems='center'>
          <Box className='header-cell-img' display='flex' alignItems='center' justifyContent='center' width={36} height={36} mb='15px'>
            <Image src={layoutDesignIcon} alt='' width={12} height={15.71} />
          </Box>
          <Typography variant='h3' color='#000' fontSize={17} fontWeight={300} lineHeight='24px' align='center'>
            Layout & Design
          </Typography>
        </Box>

        <Box className={clsx('header-cell', { 'active': activeTab === 'monetizable-block' })}
          onClick={() => onChangeTab('monetizable-block')}
          display='flex' flexDirection='column' alignItems='center'>
          <Box className='header-cell-img' display='flex' alignItems='center' justifyContent='center' width={36} height={36} mb='15px'>
            <Image src={monetizableBlocksIcon} alt='' width={15.43} height={15.43} />
          </Box>
          <Typography variant='h3' color='#000' fontSize={17} fontWeight={300} lineHeight='24px' align='center'>
            Monetizable Blocks
          </Typography>
        </Box>

        <Box className={clsx('header-cell', { 'active': activeTab === 'social-links' })}
          onClick={() => onChangeTab('social-links')}
          display='flex' flexDirection='column' alignItems='center'>
          <Box className='header-cell-img' display='flex' alignItems='center' justifyContent='center' width={36} height={36} mb='15px'>
            <Image src={socialLinksIcon} alt='' width={16.41} height={16.4} />
          </Box>
          <Typography variant='h3' color='#000' fontSize={17} fontWeight={300} lineHeight='24px' align='center'>
            Social Links
          </Typography>
        </Box>
      </ScrollMenu>
    </Box>
  )
}

export default Header;
