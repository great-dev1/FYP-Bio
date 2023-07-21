import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';

import personalShoutouts from 'assets/img/homepage/personal-shoutouts.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const PersonalShoutouts: FC = () => {

  const classes = useStyles();

  return (
    <Box className={clsx(classes.personalShoutouts, 'data-item')} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Box display='flex' className='icon-box'>
        <CustomImage src={personalShoutouts} alt='' width={70} height={60} mdWidth={49.74} mdHeight={48.23} />
      </Box>
      <Box className='contents'>
        <Typography variant='body1' fontSize={33} lineHeight='47px' fontWeight={300} color='#000' align='center'>
          12
        </Typography>
        <Typography variant='h6' fontSize={20} lineHeight='25px' color='#000' fontWeight={600} align='center'>
          Personal<br />
          Shoutouts
        </Typography>
      </Box>
    </Box>
  )
}

export default PersonalShoutouts;
