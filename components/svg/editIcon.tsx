import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const EditIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 17.45} height={height ?? 17.45} viewBox="0 0 17.451 17.451" className={clsx('edit-icon', { [className ?? '']: className })}>
      <path d="M11.857.16a.546.546,0,0,0-.773,0L0,11.245v4.6a.546.546,0,0,0,.546.546h4.6L16.227,5.3a.546.546,0,0,0,0-.772Z" transform="translate(0.5 0.563)" fill={color ?? '#fff'} stroke="#fbfbfb" strokeWidth="1" />
    </svg>
  );
};

export default EditIcon;
