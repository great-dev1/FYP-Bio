import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

interface Props {
  images: any[];
}

const BannerCarousel: FC<Props> = props => {
  const { images } = props;
  const classes = useStyles();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Box className={classes.bannerCarousel}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000 * 60 * 5}
      >
        {images.map((cell, index) => (
          <Box key={index} className='carousel-img' sx={{backgroundImage: `url(${cell.src})`}}>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default BannerCarousel;
