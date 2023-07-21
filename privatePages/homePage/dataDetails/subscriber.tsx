import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';

import subscribeUserIcon from 'assets/img/homepage/subscribe-user.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const Subscriber: FC = () => {

  const classes = useStyles();

  return (
    <Box className={clsx(classes.subscriber, 'data-item')} display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' className='icon-box'>
        <CustomImage src={subscribeUserIcon} alt='' width={89.67} height={53.34} mdWidth={44.7} mdHeight={26.91} />
      </Box>
      <Box>
        <Typography variant='h6' fontSize={22} fontWeight={600} color='#fff' lineHeight='28px'>
          New<br />Subscribers
        </Typography>
        <Typography variant='body1' color='#fff' fontSize={37} fontWeight={300} lineHeight='52px'>
          509 +
        </Typography>
      </Box>
    </Box>
  )
}

export default Subscriber;
