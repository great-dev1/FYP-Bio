import React, { FC } from 'react';

const SidebarLogo: FC = () => {

  return (
    <svg width="80" height="66" viewBox="0 0 80 66">
      <g transform="translate(0 -2)">
        <text transform="translate(25 33)" fill="#fff" fontSize="29" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="28">BIO</tspan></text>
        <rect width="7" height="52" rx="3" transform="translate(0 11)" fill="#fff" />
      </g>
    </svg>
  )
}

export default SidebarLogo;
