import React, { FC, useState, SyntheticEvent, MouseEvent } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import CustomImage from 'components/customImage';

import { topLinksLinkList, topLinksIconList } from 'assets/mockdata/analyticsData';
import menuIcon from 'assets/img/analytics/menu-white.png';

import styles from 'assets/jss/pages/analyticsPageStyles';
const useStyles = makeStyles(styles);

const TopLinks: FC = () => {

  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Box className={classes.topLinksCard}>
      <Box className={classes.topLinksCardHeader} display='flex' alignItems='center'>
        <Typography variant='h1' fontWeight={500}>
          Top Links
        </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Links" />
          <Tab label="Icons" />
        </Tabs>
        <Button
          className='top-links-button'
          id="top-links-button"
          aria-controls={open ? 'top-links-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <CustomImage src={menuIcon} alt='' width={4} height={16} mdHeight={10} mdWidth={2.5} />
        </Button>
        <Menu
          id="day-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'day-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Export to CSV</MenuItem>
          <MenuItem onClick={handleClose}>Export to Spreadsheet</MenuItem>
        </Menu>
      </Box>
      <Box className={classes.topLinksCardContent}>
        {
          (value === 0 ? topLinksLinkList : topLinksIconList).map((cell) => (
            <Box className={classes.topLinkCell} key={cell.title}>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant='body1'>
                  {cell.title}
                </Typography>
                <Typography variant='body1'>
                  {`${cell.clicks.toLocaleString("en-US")} Clicks`}
                </Typography>
              </Box>
              <LinearProgress value={cell.progress} variant="determinate" />
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}

export default TopLinks;
