import React, { FC, useState, forwardRef, Ref } from 'react';
import clsx from 'clsx';
import { slice } from 'lodash';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';

import CustomButton from 'components/customButton';
import ContentItem from './contentItem';

import { socialLinks } from 'assets/mockdata/exploreEmbedsData';

import styles from 'assets/jss/components/exploreEmbedsStyles';
const useStyles = makeStyles(styles);

const SocialLinks = forwardRef((props, ref: Ref<HTMLDivElement>) => {

  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  }

  return (
    <Box className={clsx(classes.sectionBlock)} ref={ref}>
      <Box className='section-title' mb={2}>
        <Typography variant='h6' fontWeight={700} color='#000' fontSize={18} lineHeight='24px'>
          Social Links
        </Typography>
        <Typography variant='body1' fontSize={16} lineHeight='24px' color='#000' fontWeight={400}>
          Add simple social link buttons.
        </Typography>
      </Box>

      <Grid container columnSpacing='14px' rowSpacing={{ xs: '0', md: '15px' }} className='content-item-list'>
        {
          slice(socialLinks, 0, 6).map((cell, index) => (
            <Grid item xs={12} md={6} key={`${cell.title}-${index}`}>
              <ContentItem data={cell} />
            </Grid>
          ))
        }
        <Grid item xs={12}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Grid container columnSpacing='14px' rowSpacing={{ xs: '0', md: '15px' }} className='content-item-list'>
              {
                slice(socialLinks, 6, socialLinks.length).map((cell, index) => (
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

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
