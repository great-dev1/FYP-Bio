import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ProfitItem from './profitItem';

import pictureImg from 'assets/img/monetize/picture.svg';
import videoCallImg from 'assets/img/monetize/video-call.svg';
import donationImg from 'assets/img/monetize/donation.svg';
import playImg from 'assets/img/homepage/play.svg';
import comImg from 'assets/img/homepage/community.png';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

interface Props {
  onChangeTab: (val: string) => void;
  activeTab: string;
}

const RightContent: FC<Props> = (props) => {

  const { onChangeTab, activeTab } = props;
  const classes = useStyles();

  return (
    <Box>
      <Typography variant='body1' fontSize={25} lineHeight='35px' color='rgba(0,0,0,0.85)' className='sub-title'>
        More Profit and Earnings
      </Typography>
      <Typography variant='h3' fontWeight={600} fontSize={57} lineHeight='68px' color='#000' className='title'>
        Expand Your Earning
        Potential.
      </Typography>
      <Typography variant='body1' fontSize={20} lineHeight='33px' color='rgba(0, 0, 0, 0.65)' fontWeight={300} className='description'>
        Our unique monetization tools turn your bio page into a
        storefront where your followers can purchase content,
        cameos, 1:1 calls, community access, and more
      </Typography>
      <Box className='profit-items' display='flex' flexDirection='column' rowGap='25px'>
        <ProfitItem
          icon={<Image src={pictureImg} alt='' width={23} height={23} />}
          title='Exclusive Content'
          description='Sell photos, videos, and other content'
          onClick={() => onChangeTab('exclusive')}
          isActive={activeTab === 'exclusive'}
          iconClassName='exclusive'
        />
        <ProfitItem
          icon={<Image src={donationImg} alt='' width={25} height={25} />}
          title='Tipping'
          description='Let your followers send you tips and messages'
          onClick={() => onChangeTab('tipping')}
          isActive={activeTab === 'tipping'}
          iconClassName='tipping'
        />
        <ProfitItem
          icon={<Image src={playImg} alt='' width={25} height={25} />}
          title='cameo'
          description='Sell custom videos to your fans'
          onClick={() => onChangeTab('cameo')}
          isActive={activeTab === 'cameo'}
          iconClassName='cameo'
        />
        <ProfitItem
          icon={<Image src={comImg} alt='' width={41} height={41} />}
          title='Community Access'
          description='Sell access to a Discord or Telegram group'
          onClick={() => onChangeTab('community')}
          isActive={activeTab === 'community'}
          iconClassName='commuity'
        />
        <ProfitItem
          icon={<Image src={videoCallImg} alt='' width={23} height={23} />}
          title='1:1 Video Calls'
          description='Sell video calls with your fans through zoom'
          onClick={() => onChangeTab('video')}
          isActive={activeTab === 'video'}
          iconClassName='video'
        />
      </Box>
    </Box>
  )
}

export default RightContent;
