import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';

import donationIcon from 'assets/img/homepage/donation.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const Donations: FC = () => {

  const classes = useStyles();

  return (
    <Box className={clsx(classes.donations, 'data-item')}>
      <Box display='flex' className='icon-box'>
        <CustomImage src={donationIcon} alt='' width={107} height={107} mdWidth={49.74} mdHeight={48.23} />
      </Box>
      <Box className='contents'>
        <Typography variant='h6' fontSize={20} lineHeight='25px' color='#000' fontWeight={600}>
          Given<br />
          Donations
        </Typography>
        <Typography variant='body1' fontSize={33} lineHeight='47px' fontWeight={300} color='#000'>
          891
        </Typography>
      </Box>
    </Box>
  )
}

export default Donations;
