import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import chevronRight from 'assets/img/homepage/chevron-right.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const ClaimFormSection: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.claimFormSection} position='relative'>
      <Box className='section-inner' mx='auto' position='relative'>
        <Typography variant='h1' align='center' color='#fff' fontSize={80} fontWeight={700} lineHeight='100px'
          className='pc-title'
        >
          Claim your link and start today
        </Typography>
        <Typography variant='h1' className='mobile-title' align='center' color='#fff' fontSize={80} fontWeight={700} lineHeight='100px'>
          Claim your link and start growing
        </Typography>
        <Typography variant='body1' align='center' className='sub-title' color='#fff' fontSize={23} lineHeight='41px'>
          FYP.bio is the easiest way to build a link in bio website. Increase your followers and sales for free.
        </Typography>

        <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
          <OutlinedInput placeholder='Your Name'
            startAdornment={<InputAdornment position="start">
              <Typography variant='body1' className='prefix-text' fontSize={25} lineHeight='35px' fontWeight={700} color='#fff'>
                FYP.bio/
              </Typography>
            </InputAdornment>}
          />
          <Button className='claim-btn' variant='contained' onClick={() => router.push('/claim')}>
            Claim Now
            <Image src={chevronRight} alt='' width={16} height={16} />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ClaimFormSection;
