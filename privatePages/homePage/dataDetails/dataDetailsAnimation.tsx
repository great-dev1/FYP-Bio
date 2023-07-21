import React, { FC, useState } from 'react';
import { animated, useSpring } from "react-spring";
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import DataDetails from './dataDetails';
import SecondDataDetails from './secondDataDetails';
import ThirdDataDetails from './thirdDataDetails';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const DataDetailsAnimation: FC = () => {

  const classes = useStyles();

  const [showIndex, setShowIndex] = useState(0);
  const [rotateIndex, setRotateIndex] = useState(0);

  const AnimatedBox = animated(Box);

  const [springs, api] = useSpring({
    config: {
      duration: 500
    },
    rotateY: rotateIndex * -180
  }, [rotateIndex]);

  const handleClick = () => {
    setShowIndex((showIndex + 1) % 3);
    setRotateIndex(rotateIndex + 1);
  }

  return (
    <Box className={classes.dataDetailsAnimation} width='100%'>
      <AnimatedBox style={{ ...springs }} onClick={handleClick} position='relative' className='animation-wrapper'>
        <DataDetails
          position='absolute'
          width='100%'
          isShow={showIndex === 0}
          sx={{
            top: 0,
            left: 0,
            opacity: showIndex === 0 ? 1 : 0,
            transition: 'opacity .5s',
            transform: `rotateY(${rotateIndex % 2 === 0 ? 0 : '180deg'})`
          }} />
        <SecondDataDetails
          isShow={showIndex === 1}
          position='absolute'
          width='100%'
          sx={{
            top: 0, left: 0,
            opacity: showIndex === 1 ? 1 : 0,
            transition: 'opacity .5s',
            transform: `rotateY(${rotateIndex % 2 === 0 ? 0 : '180deg'})`
          }} />
        <ThirdDataDetails
          isShow={showIndex === 2}
          position='absolute'
          width='100%'
          sx={{
            top: 0,
            left: 0,
            opacity: showIndex === 2 ? 1 : 0,
            transition: 'opacity .5s',
            transform: `rotateY(${rotateIndex % 2 === 0 ? 0 : '180deg'})`
          }} />
      </AnimatedBox>
    </Box>
  )
}

export default DataDetailsAnimation;
