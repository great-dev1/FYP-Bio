import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import styles from 'assets/jss/components/mobileStepperStyles';
const useStyles = makeStyles(styles);

interface Props {
  step: number;
}

const MobileStepper: FC<Props> = (props) => {

  const { step } = props;
  const classes = useStyles();

  return (
    <Box display='flex' className={classes.stepIndicator}>
      {
        [...Array(4)].map((_, i) => (
          <Box className={clsx(classes.stepper, { [classes.activeStep]: step > i })} key={i}></Box>
        ))
      }
    </Box>
  )
}

export default MobileStepper;
