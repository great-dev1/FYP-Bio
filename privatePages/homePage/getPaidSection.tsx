import React, { FC, useState, useEffect, useRef } from 'react';
import { animated, useSprings } from "react-spring";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CustomImage from 'components/customImage';

import masterCardIcon from 'assets/img/homepage/master-card.svg';
import visaIcon from 'assets/img/homepage/visa.svg';
import purseIcon from 'assets/img/homepage/purse.svg';
import moneyIcon from 'assets/img/homepage/money.svg';
import dollarIcon from 'assets/img/homepage/dollar.svg';
import paypalIcon from 'assets/img/homepage/paypal.svg';
import moneyBagIcon from 'assets/img/homepage/money-bag.svg';
import dollarGroupIcon from 'assets/img/homepage/dollar-group.svg';
import centerMoneyBagIcon from 'assets/img/homepage/money_bag_perspective_matte_s.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

let coods = [
  {
    top: 0,
    left: 424,
    opacity: 0.4
  },
  {
    top: 128,
    left: 537,
    opacity: 0.4
  },
  {
    top: 267,
    left: 537,
    opacity: 0.4
  },
  {
    top: 426,
    left: 486,
    opacity: 0.4
  },
  {
    top: 426,
    left: 75,
    opacity: 0.4
  },
  {
    top: 280,
    left: 0,
    opacity: 1
  },
  {
    top: 128,   
    left: 26,
    opacity: 0.4
  },
  {
    top: 0,
    left: 130,
    opacity: 0.4
  }
];

const GetPaidSection: FC = () => {

  const classes = useStyles();
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);
  const AnimatedBox = animated(Box);
  const [count, setCount] = useState(0);
  const [mobileCoods, setMobileCoods] = useState<any[]>([]);

  const [springs, api] = useSprings(8, (i) => ({
    config: {
      duration: 500
    },
    top: isMobile ? mobileCoods[(i + count) % 8]?.top ?? 0 : coods[(i + count) % 8].top,
    left: isMobile ? mobileCoods[(i + count) % 8]?.left ?? 0 : coods[(i + count) % 8].left,
    opacity: coods[(i + count) % 8].opacity 
  }), [count, mobileCoods])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
    }, 2000);

    return () => clearInterval(interval);
  }, [count])

  useEffect(() =>{
    if (ref.current) {      
      const refWidth = ref.current.clientWidth;
      setMobileCoods([
        {
          top: 0,
          left: refWidth * 0.7
        },
        {
          top: 75,
          left: refWidth * 0.88
        },
        {
          top: 152,
          left: refWidth * 0.86
        },
        {
          top: 240,
          left: refWidth * 0.77
        },
        {
          top: 240,
          left: refWidth * 0.093
        },
        {
          top: 160,
          left: 0
        },
        {
          top: 76,
          left: 4
        },
        {
          top: 9.5,
          left: refWidth * 0.18
        }
      ])
    }
  }, [isMobile, ref])

  return (
    <Box className={classes.getPaidSection} display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
      <Box className='left-section'>
        <Typography variant='h6' fontSize={25} lineHeight='35px' fontWeight={400} color='rgba(0, 0, 0, 0.85)'>
          Flexible Payments
        </Typography>
        <Typography variant='h1' fontSize={57} fontWeight={700} lineHeight='80px' color='#000'>
          Get Paid in Seconds
        </Typography>
        <Typography variant='body1' fontSize={20} lineHeight='33px' color='rgba(0, 0, 0, 0.65)'>
          Collect Donations and Sell Products directly on your page. Start accepting payments from your followers in 87 supported currencies
        </Typography>
        <Button variant='contained' onClick={() => router.push('/claim')}>
          Start Now
        </Button>
      </Box>

      <Box className='right-section' position='relative' ref={ref}>
        <Box display='flex' className='center-img' mx='auto'>
          <CustomImage src={centerMoneyBagIcon} alt='' width={406} height={406} mdWidth={225} mdHeight={225} />
        </Box>
        <AnimatedBox position='absolute' display='flex' style={{ ...springs[0] }} width={69} height={69}
          className='dollar-group'
        >
          <CustomImage src={dollarGroupIcon} alt='' width={69} height={69} mdWidth={42.75} mdHeight={42.75} />
        </AnimatedBox>

        <AnimatedBox position='absolute' className='dollar' display='flex' style={{ ...springs[1] }} width={65} height={65}>
          <CustomImage src={dollarIcon} alt='' width={65} height={65} mdWidth={37.56} mdHeight={37.56} />
        </AnimatedBox>

        <AnimatedBox position='absolute' className='money' display='flex' style={{ ...springs[2] }} width={85} height={85}>
          <CustomImage src={moneyIcon} alt='' width={85} height={85} mdWidth={46.31} mdHeight={46.31} />
        </AnimatedBox>

        <AnimatedBox position='absolute' className='purse' display='flex' style={{ ...springs[3] }} width={74} height={74}>
          <CustomImage src={purseIcon} alt='' width={74} height={74} mdWidth={35.69} mdHeight={35.69} />
        </AnimatedBox>

        <AnimatedBox position='absolute' className='visa' display='flex' style={{ ...springs[4] }} width={74} height={74}>
          <CustomImage src={visaIcon} alt='' width={74} height={74} mdWidth={41.35} mdHeight={41.35} />
        </AnimatedBox>

        <AnimatedBox position='absolute' className='marstercard' display='flex' style={{ ...springs[5] }} width={94} height={56}>
          <CustomImage src={masterCardIcon} alt='' width={94} height={56} mdWidth={52.1} mdHeight={31.26} />
        </AnimatedBox>

        <AnimatedBox position='absolute' className='money-bag' display='flex' style={{ ...springs[6] }} width={65} height={65}>
          <CustomImage src={moneyBagIcon} alt='' width={65} height={65} mdWidth={35.56} mdHeight={35.56} />
        </AnimatedBox>

        <AnimatedBox position='absolute' className='paypal' display='flex' style={{ ...springs[7] }} width={57} height={57}>
          <CustomImage src={paypalIcon} alt='' width={57} height={57} mdWidth={30.6} mdHeight={30.6} />
        </AnimatedBox>
      </Box>
    </Box>
  )
}

export default GetPaidSection;
