import React, { FC, useState } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import anchorDownIcon from 'assets/img/anchor-down.svg';

import { settingsMenuList } from 'assets/mockdata/settingsData';

import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  tab: string;
  handleChange: (val: string) => void;
  data: any
}

const MenuDropdown: FC<Props> = (props) => {

  const { tab, handleChange, data } = props;
  const classes = useStyles();
   
  const [selectOpen, setSelectOpen] = useState(false); 

  return (
    <Box width='100%' className={classes.menuDropdown}>
      <Box
        onClick={() => setSelectOpen(true)}
        className={classes.menuDropdownBtn}
        display='flex'
        alignItems='center'
        width='100%'
      >
        <Box className='menu-icon' display='flex' alignItems='center' justifyContent='center'>
          <Image src={data.whiteIcon} alt='' width={data.dWidth} height={data.dHeight} />
        </Box>
        <Typography variant='body1'>
          {tab}
        </Typography>
        <Image src={anchorDownIcon} alt='' width={12.6} height={7} />
      </Box>
      <Select
        open={selectOpen}
        onClose={() => setSelectOpen(false)}
        onOpen={() => setSelectOpen(true)}
        value={tab}
        onChange={(e) => handleChange(e.target.value)}
        fullWidth
        className='menu-select'
      >
        {
          settingsMenuList.map((cell) => (
            <MenuItem value={cell.title} key={cell.title}>{cell.title}</MenuItem>
          ))
        }
      </Select>
    </Box>
  )
}

export default MenuDropdown;
