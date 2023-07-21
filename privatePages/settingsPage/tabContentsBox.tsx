import React, { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Collapse from '@mui/material/Collapse';

interface Props {
  children: React.ReactNode;
  expanded: boolean;
}

const TabContentsBox: FC<Props> = (props) => {

  const { expanded, children } = props;

  const theme = useTheme();  
  const isMobileMode = useMediaQuery(theme.breakpoints.down("lg"));
  
  return (
    <Collapse in={isMobileMode ? expanded : true } timeout="auto" unmountOnExit>
      {children}
    </Collapse>
  )
}

export default TabContentsBox;
