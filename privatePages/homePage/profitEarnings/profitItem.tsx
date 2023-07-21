import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from 'assets/jss/pages/homePageStyles';
const useStyles = makeStyles(styles);

interface Props extends BoxProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconClassName?: string;
  isActive?: boolean;
}

const ProfitItem: FC<Props> = (props) => {

  const { title, description, icon, iconClassName, isActive, ...boxProps } = props;
  const classes = useStyles();

  return (
    <Box className={clsx('profit-item', {'active': isActive})} display='flex' alignItems='center' {...boxProps}>
      <Box display='flex' className={clsx('icon-box', {[iconClassName ?? '']: iconClassName})} alignItems='center' justifyContent='center'>
        {icon}
      </Box>
      <Box className='content' flex={1}>
        <Typography variant='h6' fontSize={18} lineHeight='25px' color='rgba(0 ,0, 0, 0.65)' fontWeight={500}>
          {title}
        </Typography>
        <Typography variant='body1' fontSize={18} lineHeight='25px' color='rgba(0, 0, 0, 0.38)' fontWeight={300}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default ProfitItem;
