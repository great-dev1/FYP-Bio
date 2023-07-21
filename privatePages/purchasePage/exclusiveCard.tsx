import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Link from '@mui/material/Link';

import CustomImage from 'components/customImage';
import CustomButton from 'components/customButton';
import { EyeIcon, DownloadIcon } from 'components/svg';

import userAvatar from 'assets/img/avatar-1.webp';

import styles from 'assets/jss/pages/purchasePageStyles';
const useStyles = makeStyles(styles);

interface Props {
  filepath: string;
  handleOpenImg: () => void;
}

const ExclusiveCard: FC<Props> = (props) => {

  const { filepath, handleOpenImg } = props;
  const classes = useStyles();

  return (
    <Box className={classes.imgCard}
    //  onClick={() => window.open('/', '_blank')}
    >
      <Box className='card-image' display='flex' position='relative'>
        <Image src={filepath} alt='' width={360} height={180} />
        <Box position='absolute' className='card-actions' display='flex'>
          <Link
            href='/'
            className='eye'
            onClick={(e) => {
              e.preventDefault();
              handleOpenImg();
            }}
          >
            <EyeIcon color='#000' />
          </Link>
          <Link href={filepath} className='download' download={true}>
            <DownloadIcon color='#000' />
          </Link>
        </Box>
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
        Exclusive Content
      </Link>
      <Box display='flex' alignItems='center' className='card-user'>
        <CustomImage src={userAvatar} alt='' width={28} height={28} mdWidth={26} mdHeight={26} />
        <Link href='/' underline='hover' target='_blank'>
          by Isabella Adams
        </Link>
      </Box>
    </Box>
  )
}

export default ExclusiveCard;
