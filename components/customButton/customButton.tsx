import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Button, { ButtonProps } from '@mui/material/Button';

import styles from 'assets/jss/components/buttonsStyles';

const useStyles = makeStyles(styles);

interface Props extends ButtonProps {
  children: ReactNode;
  className?: string;
  background?: 'orangeGradient' | 'blueGradient' | 'outlined' | 'greyFill' | 'yellow' | 'black' | '',
  boxShadow?: 'none' | 'soft' | 'hard',
  rounded?: 'none'
}

const CustomButton: FC<Props> = (props) => {

  const { children, className, background, boxShadow, rounded, ...others } = props;

  const classes = useStyles();

  const classnames = clsx(
    classes.btn,
    {
      [className ?? '']: className,
      [classes.orangeGradient]: background === 'orangeGradient',
      [classes.blueGradient]: background === 'blueGradient',
      [classes.outlined]: others.variant === 'outlined',
      [classes.greyFill]: background === 'greyFill',
      [classes.blackBackground]: background === 'black',
      [classes.yellowFill]: background === 'yellow',
      [classes.noneShadow]: boxShadow === 'none',
      [classes.softShadow]: boxShadow === 'soft',
      [classes.hardShadow]: boxShadow === 'hard',
      [classes.roundNone]: rounded === 'none'
    }
  )

  return (
    <Button {...others} className={classnames}>
      <span>{children}</span>
    </Button>
  )
}

export default CustomButton;
