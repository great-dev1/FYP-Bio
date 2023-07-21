import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const VimeoIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg
      width={width ?? 31.11}
      height={height ?? 26.83}
      viewBox="0 0 31.113 26.834"
      className={clsx('vimeo-icon', {[className ?? '']: className})}
    >
      <path
        id="XMLID_3_"
        d="M30.981,25.627a4.468,4.468,0,0,0-.578-3.655c-1.123-1.42-3.512-1.473-5.149-1.222A10.8,10.8,0,0,0,17.886,27.7c2.715-.206,4.139.2,3.877,3.185a10.978,10.978,0,0,1-1.446,3.935c-.815,1.515-2.342,4.488-4.345,2.345-1.8-1.929-1.669-5.619-2.081-8.076a33.816,33.816,0,0,0-.924-4.515c-.389-1.219-1.282-2.689-2.373-3.008a4.848,4.848,0,0,0-3.473.695C4.41,23.852,2.344,26.118,0,27.988H0c.382.818.59,1.347,1.274,1.447,1.614.238,3.152-1.5,4.225.308a18.644,18.644,0,0,1,1.274,3.515c.559,1.59.99,3.321,1.446,5.149.773,3.1,1.724,7.724,4.4,8.857,1.365.58,3.418-.2,4.457-.812a24.872,24.872,0,0,0,6.886-6.538A44.483,44.483,0,0,0,30.981,25.627Z"
        transform="translate(0 -20.634)"
        fill={color ?? "#fff"}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default VimeoIcon;
