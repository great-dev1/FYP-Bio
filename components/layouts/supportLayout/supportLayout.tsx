import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import Head from "next/head";

import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import Navbar from './navbar';

import styles from 'assets/jss/components/supportLayoutStyles';
const useStyles = makeStyles(styles);

interface Props {
  children?: ReactNode;
  title?: string; 
  className?: string;
}

const SupportLayout: FC<Props> = (props) => {

  const { children, title, className } = props;

  const classes = useStyles();

  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>
      <Box className={clsx(classes.root, {[className ?? '']: className})}>
        <Navbar />
        {children}
      </Box>
    </Box>
  )
}

export default SupportLayout;
