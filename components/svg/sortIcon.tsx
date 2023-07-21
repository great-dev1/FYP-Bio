import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const SortIcon: FC<Props> = props => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 18.44} height={height ?? 18.48} viewBox="0 0 18.44 18.48"
      className={clsx('sort-icon', { [className ?? '']: className })}
    >
      <path d="M10.38,57.83a.8.8,0,0,0-1.1.079L6.373,61.187v-13.1a.785.785,0,1,0-1.571,0v13.1L1.894,57.909A.8.8,0,0,0,.8,57.83a.8.8,0,0,0-.079,1.1L5,63.721a.728.728,0,0,0,1.14,0l4.32-4.792A.793.793,0,0,0,10.38,57.83Z" transform="translate(-0.533 -45.516)"
        fill={color ?? '#fff'}
      />
      <path d="M231.059,5.087,226.814.295a.736.736,0,0,0-1.178,0l-4.32,4.792a.8.8,0,0,0,.079,1.1.757.757,0,0,0,1.1-.079L225.4,2.829V15.891a.79.79,0,0,0,.785.785.756.756,0,0,0,.785-.748V2.833l2.908,3.278a.78.78,0,1,0,1.178-1.023Z" transform="translate(-212.802 0)"
        fill={color ?? '#fff'}
      />
    </svg>
  );
};

export default SortIcon;
