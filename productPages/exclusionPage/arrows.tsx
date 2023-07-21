import React from "react";
import clsx from 'clsx';
import Image from 'next/image';
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { makeStyles } from "@mui/styles";

import Button from '@mui/material/Button';

import nextIcon from 'assets/img/product/purple-next.svg';
import prevIcon from 'assets/img/product/purple-prev.svg';

import styles from 'assets/jss/pages/exclustionPageStyles';
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
    <Button
      disabled={disabled}
      onClick={onClick}
      style={{
        opacity: disabled ? "0" : "1"
      }}
      className={clsx({[className ?? '']: className})}
    >
      {children}
    </Button>
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
    <Arrow disabled={disabled} onClick={() => scrollPrev()} className={classes.scrollBtn}>
      <Image src={prevIcon} alt='' width={47.78} height={47.78} />
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
    <Arrow disabled={disabled} onClick={() => scrollNext()} className={classes.scrollBtn}>
      <Image src={nextIcon} alt='' width={47.78} height={47.78} />
    </Arrow>
  );
}
