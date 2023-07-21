import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from 'assets/jss/pages/analyticsPageStyles';
const useStyles = makeStyles(styles);

interface Props extends BoxProps {
  color: string;
  title: string;
  value?: string;
  className?: string;
}

const LegendLabel: FC<Props> = (props) => {

  const { color, title, value, className, ...otherProps } = props;
  const classes = useStyles();

  return (
    <Box
      display='flex'
      alignItems='center'
      className={clsx(classes.legendLabel, { className: className })}
      justifyContent='space-between'
      {...otherProps}
    >
      <Box display='flex' alignItems='center'>
        <Box className={clsx(classes.legendColor, 'legend-color-mark')} sx={{ backgroundColor: color }}>
        </Box>
        <Typography variant='body1'>
          {title}
        </Typography>
      </Box>
      {
        value && (
          <Typography variant='body1' fontWeight={700}>
            {value}
          </Typography>
        )
      }
    </Box>
  )
}

export default LegendLabel;
