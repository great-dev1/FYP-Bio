import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Link from '@mui/material/Link';

import CustomImage from 'components/customImage';
import CustomButton from 'components/customButton';

import userAvatar from 'assets/img/avatar-1.webp';

import styles from 'assets/jss/pages/purchasePageStyles';
const useStyles = makeStyles(styles);

interface Props {
  title: string;
  filepath: string;
  handleOpenImg: () => void;
}

const SocialCard: FC<Props> = (props) => {

  const { title, filepath, handleOpenImg } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.imgCard, classes.socialCard)}>
      <Box className='card-image' display='flex' position='relative'>
        <Image src={filepath} alt='' width={360} height={165} />
        <Box position='absolute' className='open-img' display='flex' alignItems='center' justifyContent='center'>
          <CustomButton variant='outlined' boxShadow='none' onClick={(e) => {
            e.preventDefault();
            handleOpenImg();
          }}>
            View
          </CustomButton>
        </Box>
      </Box>
      <Link href='/' fontWeight={700} className='card-title' underline='hover' target='_blank'>
        {title}
      </Link>
      <Box display='flex' alignItems='center' className='card-user'>
        <CustomImage src={userAvatar} alt='' width={28} height={28} mdWidth={26} mdHeight={26} />
        <Link href='/' underline='hover' target='_blank'>
          by Isabella Adams
        </Link>
      </Box>
      <CustomButton fullWidth variant='contained' background='blueGradient' boxShadow='none' className='join-btn'>
        Join Community
      </CustomButton>
    </Box>
  )
}

export default SocialCard;
