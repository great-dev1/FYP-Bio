import React, { FC } from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CustomImage from 'components/customImage';
import { BankCashIcon, ClockIcon, LocationIcon } from 'components/svg';

import photoImg from 'assets/img/monetize/photo.svg';
import styles from 'assets/jss/components/addProductStyles';
const useStyles = makeStyles(styles);

interface Props {
  bankCash: string;
  date?: string;
  showCallZoom?: boolean;
}

const DetailCard: FC<Props> = (props) => {

  const { bankCash, date, showCallZoom } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={clsx(classes.detailCard, 'detail-box')}>
      <Box className='image-box' display='flex' alignItems='center' justifyContent='center'>
        <CustomImage src={photoImg} alt='' width={82} height={82} mdWidth={72} mdHeight={72} />
      </Box>
      <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap' rowGap='14px'>
        {
          bankCash && (
            <Box display='flex' alignItems='center' className='detail-cell'>
              <BankCashIcon color='#000' />
              <Typography variant='body1' color='#474461'>
                {`$ ${bankCash}`}
              </Typography>
            </Box>
          )
        }
        {
          date && (
            <Box display='flex' alignItems='center' className='detail-cell'>
              <ClockIcon color='#000' />
              <Typography variant='body1' color='#474461'>
                {date}
              </Typography>
            </Box>
          )
        }
        {
          showCallZoom && (
            <Box display='flex' alignItems='center' className='detail-cell'>
              <LocationIcon color='#000' />
              <Typography variant='body1' color='#474461'>
                {isMobile ? 'Zoom' : 'Call on Zoom'}
              </Typography>
            </Box>
          )
        }
      </Box>
    </Box>
  )
}

export default DetailCard;
