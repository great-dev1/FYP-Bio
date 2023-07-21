import React, { FC } from 'react';
import clsx from 'clsx';

import Box, { BoxProps } from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import MonthlyVisitors from './monthlyVisitors';
import NetEarning from './netEarnings';
import ExclusiveContent from './exclusiveContent';
import PersonalShoutouts from './personalShoutouts';

interface Props extends BoxProps {
  isShow: Boolean;
}

const SecondDataDetails: FC<Props> = (props) => {

  const { isShow, ...baseProps} = props;

  return (
    <Box {...baseProps}>
      <Grid container columnSpacing={{ xs: '14px', lg: '26px' }} rowSpacing={{ xs: '12px', lg: 3 }}>
        <Grid item xs={3.8} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <MonthlyVisitors />
        </Grid>
        <Grid item xs={8.2} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <NetEarning />
        </Grid>
        <Grid item xs={8.2} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <ExclusiveContent />
        </Grid>
        <Grid item xs={3.8} className={clsx({'animate__animated animate__zoomIn animate__fast animate__delay-250-ms': isShow})}>
          <PersonalShoutouts />
        </Grid>
      </Grid>
    </Box>
  )
}

export default SecondDataDetails;
