import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';

import purchaseIcon from 'assets/img/homepage/purchases.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const TotalPurchases: FC = () => {

  const classes = useStyles();

  return (
    <Box className={clsx(classes.totalPurchases, 'data-item')} display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' className='icon-box'>
        <CustomImage src={purchaseIcon} alt='' width={100} height={100} mdWidth={89.67} mdHeight={100} />
      </Box>
      <Box>
        <Typography variant='body1' color='#000' fontSize={37} fontWeight={300} lineHeight='52px' align='center'>
          $29,310
        </Typography>
        <Typography variant='h6' fontSize={22} fontWeight={600} color='#000' lineHeight='28px' align='center'>
          Total<br />
          Purchases
        </Typography>
      </Box>
    </Box>
  )
}

export default TotalPurchases;
