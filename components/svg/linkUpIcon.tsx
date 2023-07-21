import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const LinkUpIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg
      width={width ?? 29.95}
      height={height ?? 25.63}
      viewBox="0 0 29.951 25.636"
      className={clsx('links-up-icon', {[className ?? '']: className})}
    >
      <g
        id="Group_47805"
        data-name="Group 47805"
        transform="translate(-1132.889 -29.475)"
      >
        <path
          id="external-svgrepo-com"
          d="M13.218,8.644H3V27.222H21.578V17M16.933,4h9.289v9.289m0-9.289-13,13"
          transform="translate(1130.889 26.889)"
          fill="none"
          stroke={color ?? "#fff"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_37089"
          data-name="Path 37089"
          d="M1504.378,633.889v18.383h23.461l-9.446-8.775-9.08,6.094-3.352-1.463V643.5l6.155-3.534v-2.986Z"
          transform="translate(-365 -603)"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default LinkUpIcon;
