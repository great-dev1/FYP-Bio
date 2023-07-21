import React, { FC } from 'react';
import Countdown from 'react-countdown';
import Box from '@mui/material/Box';

import Renderer from './renderer';

const CountDownbox: FC = () => {

  return (
    <Box>
      <Countdown
        date={Date.now() + 1800000}
        renderer={(props) => <Renderer {...props} />}
      />
    </Box>
  )
}

export default CountDownbox;
