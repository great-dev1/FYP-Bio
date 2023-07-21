import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const EmailIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 21.75} height={height ?? 17.4} viewBox="0 0 21.75 17.399"
      className={clsx('email-icon', { [className ?? '']: className })}
    >
      <path d="M21.574,4H4.175A2.172,2.172,0,0,0,2.011,6.175L2,19.224A2.181,2.181,0,0,0,4.175,21.4h17.4a2.181,2.181,0,0,0,2.175-2.175V6.175A2.181,2.181,0,0,0,21.574,4Zm-.435,4.622-7.688,4.807a1.1,1.1,0,0,1-1.153,0L4.61,8.622a.923.923,0,1,1,.979-1.566l7.286,4.556,7.286-4.556a.923.923,0,1,1,.979,1.566Z"
        transform="translate(-2 -4)" fill={color ?? '#fff'}
      />
    </svg>
  );
};

export default EmailIcon;
