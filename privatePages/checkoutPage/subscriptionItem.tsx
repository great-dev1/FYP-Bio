import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';

import radioIcon from 'assets/img/checkout/radio-icon.svg';
import radioCheckedIcon from 'assets/img/checkout/radio-checked-icon.svg';

import styles from 'assets/jss/pages/checkoutPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  value: string;
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  checked: boolean;
  onClick: (val: string) => void;
}

const SubscriptionItem: FC<Props> = (props) => {

  const { value, title, subTitle, icon, checked, onClick } = props;
  const classes = useStyles();

  return (
    <Box 
      className={clsx(classes.subscriptionItem, {'active': checked})} display='flex' alignItems='center'
      onClick={() => onClick(value)}
    >
      <Radio
        value={value}
        name="subscription"
        icon={<Image src={radioIcon} alt='' width={24} height={24} />}
        checkedIcon={<Image src={radioCheckedIcon} alt='' width={24} height={24} />}
      />
      <Box className={clsx('img-box', {'credit-card-img': value=== 'credit-card'})} display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        {icon}
      </Box>
      <Box>
        <Typography variant='h3' fontWeight={500} color='#000' fontSize={15} lineHeight='21px'>
          {title}
        </Typography>
        <Typography variant='body1' color='#000' fontSize={14} lineHeight='20px' fontWeight={300}>
          {subTitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default SubscriptionItem;
