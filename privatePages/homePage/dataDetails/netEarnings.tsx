import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';

import netEarningIcon from 'assets/img/homepage/net-earning.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const NetEarning: FC = () => {

  const classes = useStyles();

  return (
    <Box className={clsx(classes.netEarning, 'data-item')} display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' className='icon-box'>
        <CustomImage src={netEarningIcon} alt='' width={89.67} height={100} mdWidth={89.67} mdHeight={100} />
      </Box>
      <Box>
        <Typography variant='body1' color='#fff' fontSize={37} fontWeight={300} lineHeight='52px'>
          $32,614
        </Typography>
        <Typography variant='h6' fontSize={22} fontWeight={600} color='#fff' lineHeight='28px' align='center'>
          Net<br />
          Earnings
        </Typography>
      </Box>
    </Box>
  )
}

export default NetEarning;
