import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import CustomButton from 'components/customButton';

import cardImg from 'assets/img/fypbio/main-card-img.webp';

import styles from 'assets/jss/pages/bundlePageStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleOpen: () => void;
}

const CardItem: FC<Props> = (props) => {

  const { handleOpen } = props;

  const classes = useStyles();

  return (
    <Box className={classes.cardItem}>
      <Box className='card-image' display='flex' position='relative'>
        <Image src={cardImg} alt='' width={200} height={126} />
        <Box position='absolute' className='open-img' display='flex' alignItems='center' justifyContent='center'>
          <CustomButton variant='outlined' boxShadow='none' onClick={handleOpen}>
            View
          </CustomButton>
        </Box>
      </Box>
      <CustomButton variant='contained' fullWidth boxShadow='none' onClick={handleOpen}>
        Open
      </CustomButton>
    </Box>
  )
}

export default CardItem;
