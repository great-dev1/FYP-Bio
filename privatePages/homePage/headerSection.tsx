import React, { FC, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';

import CustomButton from 'components/customButton';
import HeaderAnimation from './headerAnimation/headerAnimation';

import arrowRightIcon from 'assets/img/arrow-right-white.svg';
import freeForever from 'assets/img/homepage/free-forever.svg';
import setup from 'assets/img/homepage/setup.svg';
import analytics from 'assets/img/homepage/analytics.svg';
import themes from 'assets/img/homepage/theme.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const HeaderSection: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  const [name, setName] = useState('');

  const handleSubmit = () => {
    router.push('/claim');
  }

  return (
    <Box className={classes.headerSection} display='flex' alignItems='center' flexWrap='wrap' justifyContent='space-between' position='relative'>
      <Box className='left-section'>
        <Typography variant='h1' fontSize={80} lineHeight='100px' fontWeight={700} color='#000'>
          Maximize Your Online Presence Without Limits
        </Typography>
        <Typography variant='body1' fontSize={23} lineHeight='41px' color='rgba(0, 0, 0, 0.53)'>
          FYP.bio is the easiest way to build a link in bio website.
          Increase your followers and sales for free.
        </Typography>
        <Box className={classes.claimNowField} display='flex' flexWrap='wrap' justifyContent='space-between'>
          <OutlinedInput
            placeholder='Your Name'
            fullWidth
            startAdornment={<InputAdornment position="start">FYP.bio/</InputAdornment>}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomButton background='blueGradient' onClick={handleSubmit} className='claim-btn'>
            Claim Now
          </CustomButton>
          <CustomButton
            background='blueGradient'
            onClick={handleSubmit}
            className={classes.startMyPageBtn}
            endIcon={<Image src={arrowRightIcon} width={16} height={16} alt='' />}
          >
            Start My Page
          </CustomButton>
        </Box>

        <Box className='details-info'>
          <Grid container spacing='14px'>
            <Grid item xs={6}>
              <Box position='relative' pl='34px' minHeight='21.35px' display='flex' alignItems='center'>
                <Box display='flex' position='absolute' sx={{ left: 0, top: '50%', transform: 'translateY(-50%)' }}>
                  <Image src={freeForever} alt='' width={17.1} height={21.35} />
                </Box>
                <Typography variant='body1' fontSize={12} lineHeight='17px' color='#000' fontWeight={500}>
                  Free Forever
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box position='relative' pl='34px' minHeight='21.35px' display='flex' alignItems='center'>
                <Box display='flex' position='absolute' sx={{ left: 0, top: '50%', transform: 'translateY(-50%)' }}>
                  <Image src={setup} alt='' width={19.48} height={19.48} />
                </Box>
                <Typography variant='body1' fontSize={12} lineHeight='17px' color='#000' fontWeight={500}>
                  Fast Setup
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box position='relative' pl='34px' minHeight='21.35px' display='flex' alignItems='center'>
                <Box display='flex' position='absolute' sx={{ left: 0, top: '50%', transform: 'translateY(-50%)' }}>
                  <Image src={themes} alt='' width={17.11} height={17.11} />
                </Box>
                <Typography variant='body1' fontSize={12} lineHeight='17px' color='#000' fontWeight={500}>
                  10+ Themes
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box position='relative' pl='34px' minHeight='21.35px' display='flex' alignItems='center'>
                <Box display='flex' position='absolute' sx={{ left: 0, top: '50%', transform: 'translateY(-50%)' }}>
                  <Image src={analytics} alt='' width={19.27} height={17.58} />
                </Box>
                <Typography variant='body1' fontSize={12} lineHeight='17px' color='#000' fontWeight={500}>
                  Advanced Analytics
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className='right-section' position='absolute'>
        <HeaderAnimation />
      </Box>
    </Box>
  )
}

export default HeaderSection;
