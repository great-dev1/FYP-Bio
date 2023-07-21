import React, { FC } from 'react';
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import styles from 'assets/jss/components/svgStyles';
const useStyles = makeStyles(styles);

const LogoIcon: FC = () => {

  const classes = useStyles();

  return (
    <Box className={clsx(classes.logoIcon, 'logo-icon')} display='flex'>
      <Box className='line-bar'></Box>
      <Typography variant='body1' fontWeight={700} lineHeight={1} fontFamily='Gilroy'>
        FYP.<br />BIO
      </Typography>
    </Box>
  )
}

export default LogoIcon;
