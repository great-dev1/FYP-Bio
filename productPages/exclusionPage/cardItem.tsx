import React, { FC } from 'react';
import clsx from 'clsx';
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import CustomImage from 'components/customImage';

import cardImg from 'assets/img/fypbio/main-card-img.webp';
import dollarImg from 'assets/img/fypbio/dollar.webp';

import styles from 'assets/jss/pages/exclustionPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  data: any;
}

const CardItem: FC<Props> = (props) => {

  const { data } = props;
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={clsx(classes.cardItem)}
      onClick={() => {
        router.push('/');
      }}
    >
      <Box className='card-img'
        sx={{ backgroundImage: `url(${cardImg.src})` }}
      >
      </Box>
      <Link href='/' underline='hover' className='card-title'>
        {data.title}
      </Link>
      <Typography variant='body1' className='card-description' fontWeight={300}>
        {data.description}
      </Typography>
      <Box display='flex' alignItems='center'>
        <CustomImage src={dollarImg} width={27.5} height={27.5} mdWidth={28.1} mdHeight={28.1} alt='' unoptimized={true} loading='lazy' />
        <Typography variant='body1' className='card-price' fontWeight={300}>
          USD <b>{data.price}</b>
        </Typography>
      </Box>
    </Box>
  )
}

export default CardItem;
