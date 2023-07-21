import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';

import { DNDTrigger, DNDItem } from 'components/dndWidget';
import CustomImage from 'components/customImage';

import triggerIcon from 'assets/img/dndTrigger.svg';
import carouselImg from 'assets/img/design/carousel-img.png';
import removeIcon from 'assets/img/design/remove-red.svg';
import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  data: any;
  index: number;
}

export const CarouselImageItem: FC<Props> = (props) => {

  const { data, index } = props;
  const classes = useStyles();

  return (
    <DNDItem key={`item-${data.id}`} index={index} className={classes.carouselImgItem}>
      <DNDTrigger className='trigger-icon'>
        <Typography variant='body1' align='center'>
          {data.id}
        </Typography>
        <CustomImage src={triggerIcon.src} alt="" width={10} height={17} mdWidth={10} mdHeight={16} />
      </DNDTrigger>
      <Box className={classes.carouselImgItemInner} flex={1} display='flex' alignItems='center'>
        <Box className='carousel-img-item-img' display='flex'>
          <Image src={carouselImg} width={87} height={94} alt='' unoptimized />
        </Box>
        <Box flex={1} position='relative' display='flex' alignItems='center' className={classes.carouselImgItemInfo}>
          <Box>
            <Typography variant='body1' fontWeight={700}>
              {data.fileName}
            </Typography>
            <Typography variant='body1'>
              13 mb
            </Typography>
            <LinearProgress value={60} variant="determinate" />
          </Box>
          <IconButton >
            <CustomImage src={removeIcon} alt='' width={20} height={20} mdHeight={15} mdWidth={15} />
          </IconButton>
        </Box>
      </Box>
    </DNDItem>
  )
}
