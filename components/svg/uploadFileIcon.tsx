import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const UploadFileIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg
      width={width ?? 21.51}
      height={height ?? 21.51}
      viewBox="0 0 21.521 21.513"
      className={clsx('upload-file-icon', { [className ?? '']: className })}
    >
      <path fill={color ?? '#fff'} d="M119.888,18.036l3.6-3.869V25.818a.9.9,0,1,0,1.792,0V14.166l3.6,3.869a.9.9,0,1,0,1.318-1.221l-5.152-5.543a.9.9,0,0,0-1.313,0l-5.152,5.543a.9.9,0,1,0,1.313,1.221Z" transform="translate(-113.621 -10.986)" />
      <path fill={color ?? '#fff'} d="M31.625,341.2a.894.894,0,0,0-.9.9v4.322H12.792V342.1a.9.9,0,0,0-1.792,0v5.218a.894.894,0,0,0,.9.9H31.625a.894.894,0,0,0,.9-.9V342.1A.9.9,0,0,0,31.625,341.2Z" transform="translate(-11 -326.697)" />
    </svg>
  );
};

export default UploadFileIcon;
