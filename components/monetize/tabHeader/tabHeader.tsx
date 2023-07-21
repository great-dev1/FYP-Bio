import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { SortIcon } from 'components/svg';

import styles from 'assets/jss/components/monetizeStyles';
const useStyles = makeStyles(styles);

interface Props {
  tabs: string[];
  tabVal: string;
  handleChangeTab: (val: string) => void;
  sortKey: string;
  handleChangeSortKey: (val: string) => void;
}

const TabHeader: FC<Props> = (props) => {

  const { tabs, tabVal, handleChangeTab, sortKey, handleChangeSortKey } = props;
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    handleChangeTab(newValue);
  };

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleClickSort = (val: string) => {
    handleChangeSortKey(val);
    setAnchorEl(null);
  }

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.tabHeader} flexWrap='wrap'>
      <Box className={classes.tabs}>
        <Tabs value={tabVal} onChange={handleChange}>
          {
            tabs.map((cell) => (
              <Tab label={cell} value={cell} key={cell} />
            ))
          }
        </Tabs>
      </Box>

      <Box display='flex' alignItems='center' className={classes.sortBtn} onClick={handleClick}>
        <SortIcon color='#000' />
        <Typography variant='body1' color='#000' fontWeight={300}>
          Sort by
        </Typography>
        <Typography variant='body1' color='#000' fontWeight={700}>
          {sortKey}
        </Typography>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={classes.sortPopup}
      >
        <Button variant='text' fullWidth onClick={() => handleClickSort('Latest')}>
          Latest
        </Button>
        <Button variant='text' fullWidth onClick={() => handleClickSort('Most Expensive')}>
          Most Expensive
        </Button>
        <Button variant='text' fullWidth onClick={() => handleClickSort('Least Expensive')}>
          Least Expensive
        </Button>
        <Button variant='text' fullWidth onClick={() => handleClickSort('Oldest')}>
          Oldest
        </Button>
      </Popover>
    </Box>
  )
}

export default TabHeader;
