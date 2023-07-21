import React, { forwardRef, Ref, useState } from 'react';
import clsx from 'clsx';
import { slice } from 'lodash';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';

import CustomButton from 'components/customButton';
import ContentItem from './contentItem';

import { embedContents } from 'assets/mockdata/exploreEmbedsData';

import styles from 'assets/jss/components/exploreEmbedsStyles';
const useStyles = makeStyles(styles);

const EmbedContents = forwardRef((props, ref: Ref<HTMLDivElement>) => {

  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  }

  return (
    <Box className={clsx(classes.sectionBlock)} ref={ref}>
      <Box className='section-title' mb={2}>
        <Typography variant='h6' fontWeight={700} color='#000' fontSize={18} lineHeight='24px'>
          Embed Your Content
        </Typography>
        <Typography variant='body1' fontSize={16} lineHeight='24px' color='#000' fontWeight={400}>
          Share your content with advanced embeds
        </Typography>
      </Box>

      <Grid container columnSpacing='14px' rowSpacing={{ xs: '0', md: '15px' }} className='content-item-list'>
        {
          slice(embedContents, 0, 6).map((cell, index) => (
            <Grid item xs={12} md={6} key={`${cell.title}-${index}`}>
              <ContentItem data={cell} />
            </Grid>
          ))
        }
        <Grid item xs={12}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Grid container columnSpacing='14px' rowSpacing={{ xs: '0', md: '15px' }} className='content-item-list'>
              {
                slice(embedContents, 6, embedContents.length).map((cell, index) => (
                  <Grid item xs={12} md={6} key={`${cell.title}-${index}`}>
                    <ContentItem data={cell} />
                  </Grid>
                ))
              }
            </Grid>
          </Collapse>
        </Grid>
      </Grid>

      <CustomButton variant='contained' boxShadow='none' className='show-more-btn' onClick={handleToggleExpand}>
        {expanded ? 'Show Less' : 'Show More'}
      </CustomButton>
    </Box>
  )
});

EmbedContents.displayName = 'EmbedContents';

export default EmbedContents;
