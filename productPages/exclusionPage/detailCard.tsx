import React, { FC } from 'react';

import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

import CustomImage from 'components/customImage';
import CustomButton from 'components/customButton';

import userAvatar from 'assets/img/avatar-1.webp';
import pictureImg from 'assets/img/monetize/picture.svg';
import dollarImg from 'assets/img/product/dollar-white.svg';

import styles from 'assets/jss/pages/exclustionPageStyles';
const useStyles = makeStyles(styles);

const DetailCard: FC = () => {

  const classes = useStyles();

  return (
    <Box className={classes.detailCard}>
      <Typography variant='body1' color='#000' className='sub-title'>
        Topless Sample
      </Typography>
      <Typography variant='h2' fontWeight={700} color='#000'>
        $ 10.00
      </Typography>

      <Box display='flex' alignItems='center' className='user-box'>
        <CustomImage src={userAvatar} alt='' width={28} height={28} mdWidth={24} mdHeight={24} />
        <Typography variant='body1' color='#AAAAAA'>
          Isabella Adams
        </Typography>
      </Box>

      <CustomButton variant='contained' fullWidth
        background='blueGradient'
        boxShadow='none'
        className='submit-btn'
        startIcon={<CustomImage src={dollarImg} alt='' width={13.6} height={26.4} mdWidth={11.43} mdHeight={22.24} />}
      >
        Get Now For $10.00 USD
      </CustomButton>

      <Box mt='22px' className='description'>
        <Typography variant='h4' fontWeight={600} color='#000'>
          Description
        </Typography>
        <Typography variant='body1' fontWeight={300} color='rgba(0, 0, 0, 0.35)'>
          This is a sample of what type of content I&apos;m posting on Onlyfans, remember it&apos;s only Samples hihi, 
          if you want to have full nude package check my products below and subscribe to get your full satisfaction
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className='exclusive-content'>
        <Box className='card-image' display='flex' alignItems='center'>
          <CustomImage src={pictureImg} alt='' width={27} height={26} mdWidth={22} mdHeight={22} />
        </Box>
        <Box>
          <Typography variant='h3' fontWeight={700} color='#000'>
            Exclusive Content
          </Typography>
          <Typography variant='body1' color='#000' fontWeight={300}>
            6 Images + &nbsp;
            <Link href='/' color='#9F83EB' underline='hover'>
              1 Free Image
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailCard;
