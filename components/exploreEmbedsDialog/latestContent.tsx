import React, { forwardRef, Ref } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ContentItem from './contentItem';

import { latestContents } from 'assets/mockdata/exploreEmbedsData';

import styles from 'assets/jss/components/exploreEmbedsStyles';
const useStyles = makeStyles(styles);

interface Props {

}

const LatestContents = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.sectionBlock)} ref={ref}>
      <Box className='section-title' mb={2}>
        <Typography variant='h6' fontWeight={700} color='#000' fontSize={18} lineHeight='24px'>
          Latest Content
        </Typography>
        <Typography variant='body1' fontSize={16} lineHeight='24px' color='#000' fontWeight={400}>
          Embed your latest post or video.
        </Typography>
      </Box>

      <Grid container columnSpacing='14px' rowSpacing={{ xs: '0', md: '15px' }} className='content-item-list'>
        {
          latestContents.map((cell, index) => (
            <Grid item xs={12} md={6} key={`${cell.title}-${index}`}>
              <ContentItem data={cell} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
});

LatestContents.displayName = 'LatestContents';

export default LatestContents;
