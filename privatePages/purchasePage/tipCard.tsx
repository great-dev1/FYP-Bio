import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';
import { ClockIcon, CalendarIcon } from 'components/svg';

import userAvatar from 'assets/img/avatar-1.webp';

import styles from 'assets/jss/pages/purchasePageStyles';
const useStyles = makeStyles(styles);

interface Props {
  price: number;
  receiver: string;
  date: string;
  time: string;
}

const TipCard: FC<Props> = (props) => {

  const { price, receiver, date, time } = props;
  const classes = useStyles();

  return (
    <Box className={classes.tipCard}>
      <Box className='tip-price'>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.65)' fontWeight={300}>
          Tip
        </Typography>
        <Typography variant='h3' fontWeight={700} color='#000'>
          {`USD ${price}`}
        </Typography>
      </Box>
      <Box className='tip-receiver'>
        <Typography variant='body1' fontWeight={300}>
          Sent to
        </Typography>
        <Box display='flex' alignItems='center' className='card-user'>
          <CustomImage src={userAvatar} alt='' width={28} height={28} mdWidth={26} mdHeight={26} />
          <Link href='/' underline='hover' target='_blank'>
            {`by ${receiver}`}
          </Link>
        </Box>
      </Box>

      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Box>
          <Typography variant='body1' className='tip-field-label' color='rgba(0, 0, 0, 0.65)' fontWeight={300}>
            Date
          </Typography>
          <Box display='flex' alignItems='center'>
            <CalendarIcon color='#200E32' />
            <Typography variant='body1' className='tip-field-value' color='rgba(0, 0, 0, 0.65)'> 
              {date}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant='body1' className='tip-field-label' color='rgba(0, 0, 0, 0.65)' fontWeight={300}>
            Time
          </Typography>
          <Box display='flex' alignItems='center'>
            <ClockIcon color='#000' />
            <Typography variant='body1' color='rgba(0, 0, 0, 0.65)' className='tip-field-value'>
              {time}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TipCard;
