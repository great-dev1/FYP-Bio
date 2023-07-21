import React, { FC } from 'react';
import clsx from 'clsx';
import Carousel from "react-multi-carousel";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

import CardItem from './cardItem';

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

interface Props {
  showCarousel?: boolean;
}

const CardsSection: FC<Props> = (props) => {

  const { showCarousel } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Box className={clsx(classes.viewMoreCards, 'view-more-cards')} mb={{ xs: '43.3px', md: '67px' }} position='relative'>
      <Typography variant='body1' fontWeight={700} className='section-label'>
        View More
      </Typography>
      {
        showCarousel && (
          <Box>
            {
              isMobile ? (
                <Grid container rowSpacing='30px'>
                  <Grid item xs={12} sm={6}>
                    <CardItem />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CardItem />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CardItem />
                  </Grid>
                </Grid>
              ) : (
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={100000}
                  centerMode={false}
                >
                  <Box className={classes.carouselItem}><CardItem /></Box>
                  <Box className={classes.carouselItem}><CardItem /></Box>
                  <Box className={classes.carouselItem}><CardItem /></Box>
                  <Box className={classes.carouselItem}><CardItem /></Box>
                </Carousel>
              )
            }
          </Box>
        )
      }
      {
        !showCarousel && (
          <Grid container columnSpacing='27px' rowSpacing='20px'>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem />
            </Grid>
          </Grid>
        )
      }

    </Box>
  )
}

export default CardsSection;
