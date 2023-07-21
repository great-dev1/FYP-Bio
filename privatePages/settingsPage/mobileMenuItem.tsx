import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ChevronRightIcon } from 'components/svg';

import arrowRightIcon from 'assets/img/settings/arrow-right-white.svg';
import arrowDownIcon from 'assets/img/settings/arrow-down-white.svg';

import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  data: any;
  active: boolean;
  handleClick: () => void;
}

const MobileMenuItem: FC<Props> = (props) => {

  const { data, active, handleClick } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.mobileMenuItem, { [classes.activeMobileMenu]: active })}
      position='relative'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      onClick={handleClick}
    >
      <Image src={active ? data.icon : data.whiteIcon} alt='' width={data.mdWidth} height={data.mdHeight} />
      <Typography variant='body1'>
        {data.title}
      </Typography>
      <IconButton onClick={handleClick}>
        {
          active ? (
            <Image src={arrowDownIcon} alt='' width={14} height={7} />
          ) : (
            <Image src={arrowRightIcon} alt='' width={7} height={14} />
          )
        }

      </IconButton>
    </Box>
  )
}

export default MobileMenuItem;
