import React, { FC } from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface RendererProps {
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
}

const Renderer: FC<RendererProps> = (props) => {
  const { days, hours, minutes, seconds } = props; 

  return (
    <Box display='flex'>
      <Box>
        <Typography variant='h3' align='center' fontWeight={500}>
          {days.toString().padStart(2, '0')}
        </Typography>
        <Typography variant='body1' align='center'>
          Day
        </Typography>
      </Box>
      <Box>
        <Typography variant='h3' align='center' fontWeight={500}>
          &nbsp;:&nbsp;
        </Typography>
      </Box>
      <Box>
        <Typography variant='h3' align='center' fontWeight={500}>
          {hours.toString().padStart(2, '0')}
        </Typography>
        <Typography variant='body1' align='center'>
          Hour
        </Typography>
      </Box>
      <Box>
        <Typography variant='h3' align='center' fontWeight={500}>
          &nbsp;:&nbsp;
        </Typography>
      </Box>
      <Box>
        <Typography variant='h3' align='center' fontWeight={500}>
          {minutes.toString().padStart(2, '0')}
        </Typography>
        <Typography variant='body1' align='center'>
          Min
        </Typography>
      </Box>
      <Box>
        <Typography variant='h3' align='center' fontWeight={500}>
          &nbsp;:&nbsp;
        </Typography>
      </Box>
      <Box>
        <Typography variant='h3' align='center' fontWeight={500}>
          {seconds.toString().padStart(2, '0')}
        </Typography>
        <Typography variant='body1' align='center'>
          Sec
        </Typography>
      </Box>
    </Box>
  );
};

export default Renderer;
