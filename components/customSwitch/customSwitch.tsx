import * as React from 'react';
import { styled } from '@mui/material/styles';

import Switch, { SwitchProps } from '@mui/material/Switch';

const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 53,
  height: 35,
  borderRadius: '18px',
  padding: 0,
  boxSizing: 'content-box',
  border: '1px solid #F4F4F4',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '7px 6px',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#A854F5',
      '& + .MuiSwitch-track': {
        backgroundColor: '#fff',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 21,
    height: 21,
  },
  '& .MuiSwitch-track': {
    borderRadius: 21 / 2,
    backgroundColor: '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
  [theme.breakpoints.down('md')]: {
    height: '26px',
    width: '36px',
    '& .MuiSwitch-thumb': {
      width: '18px',
      height: '18px',
    },
    '& .MuiSwitch-switchBase': {
      margin: '4px 3px',
      '&.Mui-checked': {
        transform: 'translateX(10.8px)',
      }
    }
  }
}));

export default CustomSwitch;
