import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/customButton';

import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  icon: React.ReactNode,
  title: string;
  description: string;
  handleConnect: () => void;
}

const PaymentCard: FC<Props> = (props) => {

  const { icon, title, description, handleConnect } = props;
  const classes = useStyles();

  return (
    <Box display='flex' alignItems='center' className={clsx('payment-method-card', classes.paymentMethodCard)}>
      <Box className='payment-method-icon' display='flex' alignItems='center' justifyContent='center'>
        {icon}
      </Box>
      <Box flex={1}>
        <Typography variant='h6' fontWeight={700}>
          {title}
        </Typography>
        <Typography variant='body1'>
          {description}
        </Typography>
      </Box>
      <CustomButton variant='contained' boxShadow='none' background='black' onClick={handleConnect}>
        Connect
      </CustomButton>
    </Box>
  )
}

export default PaymentCard;
