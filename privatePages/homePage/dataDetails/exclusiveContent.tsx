import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';

import exclusiveContent from 'assets/img/homepage/exclusive-content.svg';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

const ExclusiveContent: FC = () => {

  const classes = useStyles();

  return (
    <Box className={clsx(classes.exclusiveContent, 'data-item')} display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' className='icon-box'>
        <CustomImage src={exclusiveContent} alt='' width={100} height={89.5} mdWidth={89.67} mdHeight={100} />
      </Box>
      <Box>
        <Typography variant='body1' color='#fff' fontSize={37} fontWeight={300} lineHeight='52px' align='center'>
          29
        </Typography>
        <Typography variant='h6' fontSize={22} fontWeight={600} color='#fff' lineHeight='28px' align='center'>
          Exclusive<br />
          Content
        </Typography>
      </Box>
    </Box>
  )
}

export default ExclusiveContent;
