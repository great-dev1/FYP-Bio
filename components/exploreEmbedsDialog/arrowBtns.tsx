import React from "react";
import clsx from 'clsx';
import Image from 'next/image';
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { makeStyles } from "@mui/styles";

import IconButton from '@mui/material/IconButton';

import anchorRightIcon from 'assets/img/embeds/anchor-right.svg';
import anchorLeftIcon from 'assets/img/embeds/anchor-left.svg';

import styles from 'assets/jss/components/exploreEmbedsStyles';
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
    <Arrow disabled={disabled} onClick={() => scrollPrev()} className={classes.scrollArrowBtn}>
      <Image src={anchorLeftIcon} alt='' height={13} width={7} />
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
    <Arrow disabled={disabled} onClick={() => scrollNext()} className={classes.scrollArrowBtn}>
      <Image src={anchorRightIcon} alt='' height={13} width={7} />
    </Arrow>
  );
}
