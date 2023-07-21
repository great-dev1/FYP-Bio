import React from "react";
import clsx from 'clsx';
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { makeStyles } from "@mui/styles";

import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import styles from 'assets/jss/pages/editPageStyles';
const useStyles = makeStyles(styles);

function Arrow({
  children,
  disabled,
  onClick,
  className
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  className?: string;
}) {
  return (
    <IconButton
      disabled={disabled}
      onClick={onClick}
      style={{
        opacity: disabled ? "0" : "1"
      }}
      className={clsx({[className ?? '']: className})}
    >
      {children}
    </IconButton>
  );
}

export function LeftArrow() {

  const classes = useStyles();

  const {
    isFirstItemVisible,
    scrollPrev,
    visibleElements,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()} className={classes.recommendedControl}>
      <NavigateBeforeIcon />
    </Arrow>
  );
}

export function RightArrow() {
  
  const classes = useStyles();

  const { isLastItemVisible, scrollNext, visibleElements } = React.useContext(
    VisibilityContext
  );

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()} className={classes.recommendedControl}>
      <NavigateNextIcon />
    </Arrow>
  );
}
