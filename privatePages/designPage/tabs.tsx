import React, { FC } from 'react';
import { Link } from "react-scroll";
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);

const Tabs: FC = () => {

  const classes = useStyles();

  return (
    <Box className={classes.topTab}>
      <Box className={clsx(classes.sectionTabs, 'tabs')} display="flex">
        <Link
          activeClass="active"
          to="general-info"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          href='/general-info'
        >
          General Info
        </Link>
        <Link
          activeClass="active"
          to="general-templates"
          spy={true}
          smooth={true}
          offset={-82}
          duration={500}
          href='/general-templates'
        >
          Templates
        </Link>
        <Link
          activeClass="active"
          to="general-custom"
          spy={true}
          smooth={true}
          offset={-82}
          duration={500}
          href='/general-custom'
        >
          Custom
        </Link>
      </Box>
    </Box>
  )
}

export default Tabs;
