import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const EyeIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 24.27} height={height ?? 15.45} viewBox="0 0 24.277 15.449"
      className={clsx('eye-icon', { [className ?? '']: className })}
    >
      <g transform="translate(-1 -5)">
        <path d="M13.139,5C7.692,5,3.547,8.375,1,12.725c2.547,4.35,6.692,7.725,12.139,7.725s9.593-3.375,12.139-7.725C22.732,8.375,18.585,5,13.139,5Zm0,13.242c-4.756,0-7.735-2.994-9.517-5.518C5.4,10.2,8.383,7.207,13.139,7.207s7.736,2.994,9.517,5.518c-1.781,2.524-4.759,5.518-9.517,5.518Z" 
          fill={color ?? '#fff'}
        />
        <circle cx="3" cy="3" r="3" transform="translate(10.139 9.725)" fill={color ?? '#fff'} />
      </g>
    </svg>
  );
};

export default EyeIcon;
