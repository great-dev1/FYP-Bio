import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const SoundcloudIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 40.2} height={height ?? 20.09} viewBox="0 0 40.189 20.094"
      className={clsx('soundcloud-icon', { [className ?? '']: className })}
    >
      <path id="Path_39872" data-name="Path 39872"
        d="M10.047,92.927h2.512V77.11A6.458,6.458,0,0,0,10.047,78.5Zm-5.024-10.7V92.91l.162.018h2.35V82.211H5.186ZM0,87.567A5.381,5.381,0,0,0,2.512,92.14V83A5.376,5.376,0,0,0,0,87.567Zm15.071,5.36h2.512V77.807a6.271,6.271,0,0,0-2.512-.9ZM35,82.211H33.591a8.24,8.24,0,0,0,.117-1.339,7.911,7.911,0,0,0-7.779-8.038,7.634,7.634,0,0,0-5.834,2.753v17.34H35a5.361,5.361,0,0,0,0-10.717Z"
        transform="translate(0 -72.834)"
        fill={color ?? '#fff'}
      />
    </svg>
  )
}

export default SoundcloudIcon;
