import React, { FC, useState } from 'react'
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import RadioGroup from '@mui/material/RadioGroup';

import CustomImage from 'components/customImage';
import CustomRadio from 'components/customRadio';

import googleIcon from 'assets/img/product/google.svg';
import zoomIcon from 'assets/img/product/zoom.svg';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

const LocationSection: FC = () => {

  const classes = useStyles();

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box className={classes.videoLocationBox}>
      <Box className='title-box'>
        <Typography variant='h6' fontWeight={600} color='#474461' fontSize={16} lineHeight='24px'>
          Location
        </Typography>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' fontSize={14} fontWeight={300} lineHeight='20px'>
          Choose how attendees will join your meeting.
        </Typography>
      </Box>
      <RadioGroup
        defaultValue=""
        value={value}
        onChange={handleChange}
      >
        <Grid container rowSpacing={{ xs: '22px', md: 4 }}>
          <Grid item xs={12}>
            <Box className='location-item' display='flex' alignItems='center' onClick={() => setValue('google')}>
              <Box className='img-box' display='flex' alignItems='center' justifyContent='center'>
                <CustomImage src={googleIcon} alt='' width={26} height={26} mdWidth={14.88} mdHeight={14.88} />
              </Box>
              <Box className='text-box' flex={1}>
                <Typography variant='h6' color='#474461' fontSize={16} lineHeight='24px' fontWeight={600}>
                  Google Meet
                </Typography>
                <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' fontWeight={300} fontSize={14} lineHeight='20px'>
                  A Google Meet link will be generated for you.
                </Typography>
              </Box>
              <CustomRadio value='google' />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className='location-item' display='flex' alignItems='center' onClick={() => setValue('zoom')}>
              <Box className='img-box' display='flex' alignItems='center' justifyContent='center'>
                <CustomImage src={zoomIcon} alt='' width={31} height={31} mdWidth={15.13} mdHeight={15.13} />
              </Box>
              <Box className='text-box' flex={1}>
                <Typography variant='h6' color='#474461' fontSize={16} lineHeight='24px' fontWeight={600}>
                  Zoom
                </Typography>
                <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' fontWeight={300} fontSize={14} lineHeight='20px'>
                  A Zoom link will be generated for you.
                </Typography>
              </Box>
              <CustomRadio value='zoom' />
            </Box>
          </Grid>
        </Grid>
      </RadioGroup>
    </Box>
  )
}

export default LocationSection;
