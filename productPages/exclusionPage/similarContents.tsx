import React, { FC, ContextType } from 'react';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

import CardItem from './cardItem';
import { LeftArrow, RightArrow } from "./arrows";

import styles from 'assets/jss/pages/exclustionPageStyles';
const useStyles = makeStyles(styles);

type scrollVisibilityApiType = ContextType<typeof VisibilityContext>;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const SimilarContents: FC = () => {

  const classes = useStyles();

  const items = [
    {
      title: 'Nude Images',
      description: 'Samples of the content I am postingon OnlyFans',
      price: '2.00'
    },
    {
      title: 'VIP Video Content',
      description: 'Multiple videos from my OnlyFans that have partial and full nudity',
      price: '5.00'
    },
    {
      title: 'Full VIP Package',
      description: 'Fully nude photos and videos from my OnlyFans',
      price: '15.00'
    },
    {
      title: 'Discord Content',
      description: 'Multiple videos from my OnlyFans that have partial and full nudity',
      price: '5.00'
    }
  ]

  return (
    <Box className={classes.likeSection}>
      <Typography variant='h4' color='#000' fontWeight={600}>
        More Similar Content
      </Typography>

      <Box className={classes.scrollBox}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onWheel={onWheel}
          itemClassName='scroll-item'
          wrapperClassName='scroll-wrapper'
        >
          {
            items.map((cell: any) => (
              <CardItem key={cell.title} data={cell} />
            ))
          }
        </ScrollMenu>
      </Box>

      <Grid container rowSpacing={2} columnSpacing={2} className='card-list'>
        {
          items.map((cell) => (
            <Grid item xs={12} sm={6} key={cell.title}>
              <CardItem data={cell} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default SimilarContents;
