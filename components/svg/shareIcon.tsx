import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const ShareIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg
      width={width ?? 22.78}
      height={height ?? 28.65}
      viewBox="0 0 22.783 28.655"
      className={clsx('share-icon', {[className ?? '']: className})}
    >
      <path
        d="M65.271,19.652a4.479,4.479,0,0,0-2.413.7l-7.04-4.915a4.5,4.5,0,0,0,0-2.483l6.85-4.783a4.5,4.5,0,1,0-1.8-2.715l-7.024,4.9a4.5,4.5,0,1,0,0,7.67l7.079,4.942a4.5,4.5,0,1,0,4.344-3.322Z"
        transform="translate(-46.988)"
        fill={color ?? "#fff"}
      />
    </svg>
  );
};

export default ShareIcon;
