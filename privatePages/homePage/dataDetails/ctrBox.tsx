import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';

import ctrIcon from 'assets/img/homepage/ctr.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const CtrBox: FC = () => {

  const classes = useStyles();

  return (
    <Box className={clsx(classes.ctrBox, 'data-item')} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Box display='flex' className='icon-box'>
        <CustomImage src={ctrIcon} alt='' width={30} height={50} mdWidth={49.74} mdHeight={48.23} />
      </Box>
      <Box className='contents'>
        <Typography variant='body1' fontSize={33} lineHeight='47px' fontWeight={300} color='#fff' align='center'>
          18.6%
        </Typography>
        <Typography variant='h6' fontSize={20} lineHeight='25px' color='#fff' fontWeight={600} align='center'>
          CTR
        </Typography>
      </Box>
    </Box>
  )
}

export default CtrBox;
