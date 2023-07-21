import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';

import totalViewIcon from 'assets/img/homepage/total-views.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const TotalViews: FC = () => {

  const classes = useStyles();

  return (
    <Box className={clsx(classes.totalViews, 'data-item')} display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' className='icon-box'>
        <CustomImage src={totalViewIcon} alt='' width={89.67} height={94.82} mdWidth={45.04} mdHeight={47.62} />
      </Box>
      <Box className='contents'>
        <Typography variant='h6' fontSize={22} lineHeight='28px' color='#fff' fontWeight={600}>
          Total<br />
          Views
        </Typography>
        <Typography variant='body1' fontSize={37} lineHeight='52px' fontWeight={300} color='#fff'>
          13,102 +
        </Typography>
      </Box>
    </Box>
  )
}

export default TotalViews;
