import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const ShareFileIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 13.53} height={height ?? 16.66} viewBox="0 0 13.529 16.662"
      className={clsx('share-file-icon', { [className ?? '']: className })}
    >
      <path d="M1,8.831V15.1a1.566,1.566,0,0,0,1.566,1.566h9.4A1.566,1.566,0,0,0,13.529,15.1V8.831M10.4,4.132,7.265,1,4.132,4.132M7.265,1V11.18" transform="translate(-0.5 -0.5)" fill="none" stroke={color ?? '#fff'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" fillRule="evenodd" />
    </svg>

  );
};

export default ShareFileIcon;
