import React from "react";
import clsx from 'clsx';
import Image from 'next/image';
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import IconButton from '@mui/material/IconButton';

import arrowRightIcon from 'assets/img/checkout/arrow-right.svg';
import arrowLeftIcon from 'assets/img/checkout/arrow-left.svg';

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
        display: disabled ? "none" : "flex"
      }}
      className={clsx({[className ?? '']: className})}
    >
      {children}
    </IconButton>
  );
}

export function LeftArrow() {  

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
    <Arrow disabled={disabled} onClick={() => scrollPrev()} className="arrow-btn arrow-left">
      <Image src={arrowLeftIcon} alt="" width={38} height={38} />
    </Arrow>
  );
}

export function RightArrow() {  

  const { isLastItemVisible, scrollNext, visibleElements } = React.useContext(
    VisibilityContext
  );
 
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()} className="arrow-btn arrow-right">
      <Image src={arrowRightIcon} alt="" width={38} height={38} />
    </Arrow>
  );
}
