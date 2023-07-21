import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const AddUserIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ? width : 26.6} height={height ? height : 28.65} viewBox="0 0 26.596 28.655" className={clsx('add-user-icon', {[className ?? '']: className})}>
      <path
        id="add-user_5_"
        data-name="add-user (5)"
        d="M30.674,28.655A1.148,1.148,0,0,1,29.5,27.536,10.456,10.456,0,0,1,40.185,17.35h1.761a11.136,11.136,0,0,1,3.519.566,1.107,1.107,0,0,1,.722,1.425,1.189,1.189,0,0,1-1.5.688,8.691,8.691,0,0,0-2.746-.441H40.185a8.158,8.158,0,0,0-8.337,7.947A1.148,1.148,0,0,1,30.674,28.655Zm18.2-21.1a7.935,7.935,0,0,0-15.851,0,7.935,7.935,0,0,0,15.851,0Zm-2.348,0a5.584,5.584,0,0,1-11.155,0,5.584,5.584,0,0,1,11.155,0Zm8.4,14.384H51.4V18.581a1.176,1.176,0,0,0-2.348,0v3.358H45.528a1.121,1.121,0,1,0,0,2.239H49.05v3.358a1.176,1.176,0,0,0,2.348,0V24.178h3.523a1.121,1.121,0,1,0,0-2.239Z"
        transform="translate(-29.5)"
        fill={color ? color : '#fff'}
      />
    </svg>
  );
};

export default AddUserIcon;
