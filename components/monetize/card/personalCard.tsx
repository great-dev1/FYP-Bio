import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import CommonFileDropzone from 'components/fileDropzone/commonFileDropzone';
import CustomImage from "components/customImage";
import { RefundIcon } from 'components/svg';

import userAvatar from 'assets/img/avatar-1.webp';
import videoImg from 'assets/img/monetize/video-logo.svg';
import uploadIcon from 'assets/img/monetize/upload-black.svg';

import styles from 'assets/jss/components/monetizeStyles';
const useStyles = makeStyles(styles);

interface Props {
  onClickRefund: () => void;
}

const PersonalCard: FC<Props> = (props) => {

  const { onClickRefund } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.textCard, classes.personalCard)}>
      <Box className='card-header' display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
        <Box>
          <Box display='flex' alignItems='center'>
            <Image src={videoImg} alt='' width={25.25} height={26.6} />
            <Typography variant='h3' fontWeight={700} color='#000' className='product-title' sx={{marginLeft: '13px'}}>
              Video Shoutout
            </Typography>
          </Box>

          <Box display='flex' alignItems='center' className='date-time'>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
              22th Aug, 2021
            </Typography>
            <span></span>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
              09:00 AM
            </Typography>
          </Box>
        </Box>

        <Box className='revenue-value'>
          <Typography variant='body1' color='rgba(0, 0, 0, 1)'>
            Revenue
          </Typography>
          <Typography variant='h4' fontWeight={500} color='#000'>
            $1,500
          </Typography>
        </Box>
      </Box>

      <Box className='customer' display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.65)' fontWeight={300}>
          Customer
        </Typography>
        <Box className='user-name' display='flex' alignItems='center'>
          <Image src={userAvatar} alt='' width={22} height={22} />
          <Link underline='hover' href='/' target='_blank'>
            Isabella Khan
          </Link>
        </Box>
      </Box>

      <Box display='flex' alignItems='center' justifyContent='space-between' className='customer-fee'>
        <Box>
          <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
            Email
          </Typography>
          <Typography variant='h5' fontWeight={500} color='rgba(0, 0, 0, 0.65)'>
            info@mail
          </Typography>
        </Box>

        <Box>
          <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
            Fee
          </Typography>
          <Typography variant='h5' fontWeight={500} color='rgba(0, 0, 0, 0.65)'>
            $20.00
          </Typography>
        </Box>

        <Button variant='contained' onClick={onClickRefund}>
          <RefundIcon />
        </Button>
      </Box>

      <Box className=''>
        <CommonFileDropzone 
          setFiles={(files) => {}}
          text='Upload File'
          dropzoneIcon={
            <CustomImage
              src={uploadIcon}
              alt=""
              width={21.5}
              height={21.5}
              mdWidth={16}
              mdHeight={16}
            />
          }
        />
      </Box>
    </Box>
  )
}

export default PersonalCard;
