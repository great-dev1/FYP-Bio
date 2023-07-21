import React, { FC } from 'react';
import Carousel from "react-multi-carousel";
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CustomImage from 'components/customImage';

import videoPlayBtn from 'assets/img/product/video-play-btn.svg';
import previousIcon from 'assets/img/product/previous.svg';
import nextIcon from 'assets/img/product/next.svg';

import styles from 'assets/jss/pages/cameoPageStyles';
const useStyles = makeStyles(styles);

const ButtonGroup = ({ next, previous, ...rest }: any) => {
  
  return (
    <div className="carousel-button-group">      
      <Button onClick={() => previous()} className='carousel-prev-btn carousel-arrow-btn'>
        <CustomImage src={previousIcon} alt='' width={40} height={40} mdWidth={37} mdHeight={37} />
      </Button>
      <Button onClick={() => next()} className='carousel-next-btn carousel-arrow-btn'>
        <CustomImage src={nextIcon} alt='' width={40} height={40} mdWidth={37} mdHeight={37} />
      </Button>
    </div>
  );
};

interface Props {
  onClickVideo: () => void;
}

const RecentOrders: FC<Props> = (props) => {

  const { onClickVideo } = props;
  const classes = useStyles();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1300, min: 600 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  return (
    <Box className={classes.recentOrders} position='relative'>
      <Typography variant='h3' fontWeight={600} color='#000'>
        Recent Orders
      </Typography>
      <Box className='carousel-wrapper' display='flex' flexDirection='column-reverse'>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={100000}
          centerMode={false}
          itemClass='carousel-item'
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          arrows={false}
        >
          {
            [...Array(7)].map((el, index) => (
              <Box className={classes.recentOrderItem} position='relative' key={index}>
                <video autoPlay={false} muted controls>
                  <source src='/video/video.mp4' type='video/mp4' />
                </video>
                <Button onClick={onClickVideo}>
                  <Image src={videoPlayBtn} alt='' width={48.1} height={48.1} />
                </Button>
              </Box>
            ))
          }
        </Carousel>
      </Box>
    </Box>
  )
}

export default RecentOrders;
