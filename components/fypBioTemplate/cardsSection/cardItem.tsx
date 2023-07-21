import React, { FC } from 'react';
import clsx from 'clsx';
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CustomImage from 'components/customImage';

import cardImg from 'assets/img/fypbio/main-card-img.webp';
import dollarImg from 'assets/img/fypbio/dollar.webp';
import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const CardItem: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={clsx(classes.mainCardItem, 'main-card-item')} 
      onClick={() => {
        router.push('/');
      }}
    >
      <Box className='card-img'
        sx={{ backgroundImage: `url(${cardImg.src})` }}
      >
      </Box>
      <Typography variant='h4' fontWeight={700} className='card-title'>
        Nude Images
      </Typography>
      <Typography variant='body1' className='card-description' fontWeight={300}>
        Samples of the content I am posting on OnlyFans
      </Typography>
      <Box display='flex' alignItems='center'>
        <CustomImage src={dollarImg} width={32} height={32} mdWidth={28.1} mdHeight={28.1} alt='' unoptimized={true} loading='lazy' />
        <Typography variant='body1' className='card-price' fontWeight={300}>
          USD <b>2.00</b>
        </Typography>
      </Box>
    </Box>
  )
}

export default CardItem;
