import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box, { BoxProps } from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Subscriber from './subscriber';
import TimeBox from './timeBox';
import Donations from './donations';
import TotalViews from './totalViews';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

interface Props extends BoxProps {
  isShow: Boolean;
}

const DataDetails: FC<Props> = (props) => {

  const { isShow, ...baseProps} = props;
  const classes = useStyles();

  return (
    <Box {...baseProps}>
      <Grid container columnSpacing={{ xs: '14px', lg: '26px' }} rowSpacing={{ xs: '12px', lg: 3 }}>
        <Grid item xs={8.2} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <Subscriber />
        </Grid>
        <Grid item xs={3.8} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <TimeBox />
        </Grid>
        <Grid item xs={3.8} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <Donations />
        </Grid>
        <Grid item xs={8.2} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <TotalViews />
        </Grid>
      </Grid>
    </Box>
  )
}

export default DataDetails;
