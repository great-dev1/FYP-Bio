import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import styles from 'assets/jss/pages/purchasePageStyles';
const useStyles = makeStyles(styles);

interface Props {
  tabs: string[];
  value: string;
  setValue: (val: string) => void;
}

const TabHeader: FC<Props> = (props) => {

  const { tabs, value, setValue } = props;
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}
      scrollButtons
      allowScrollButtonsMobile
      className={classes.tabHeader}
      variant="scrollable"
    >
      {
        tabs.map((cell) => (
          <Tab label={cell} key={cell} value={cell} />
        ))
      }
    </Tabs>
  )
}

export default TabHeader;
