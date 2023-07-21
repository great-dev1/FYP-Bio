import React, { FC } from 'react';
import clsx from 'clsx';

import Box, { BoxProps } from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import GrossEarnings from './grossEarnings';
import CtrBox from './ctrBox';
import TipsReceived from './tipsReceived';
import TotalPurchases from './totalPurchases';

interface Props extends BoxProps {
  isShow: Boolean;
}

const ThirdDataDetails: FC<Props> = (props) => {  

  const { isShow, ...baseProps} = props;

  return (
    <Box {...baseProps}>
      <Grid container columnSpacing={{ xs: '14px', lg: '26px' }} rowSpacing={{ xs: '12px', lg: 3 }}>
        <Grid item xs={3.8} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <GrossEarnings />
        </Grid>
        <Grid item xs={8.2} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <TipsReceived />
        </Grid>
        <Grid item xs={8.2} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <TotalPurchases />
        </Grid>
        <Grid item xs={3.8} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <CtrBox />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ThirdDataDetails;

