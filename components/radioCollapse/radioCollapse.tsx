import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

import checkedIcon from 'assets/img/radio-checked.svg';

import styles from 'assets/jss/components/radioCollapseStyles';

const useStyles = makeStyles(styles);

interface Props {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  expanded: boolean;
  setExpanded: () => void;
  headerChildren?: React.ReactNode
}

const RadioCollapse: FC<Props> = (props) => {

  const { children, title, subTitle, expanded, setExpanded, headerChildren } = props;

  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.header} display='flex' onClick={setExpanded}>
        <IconButton className={classes.radio}>
          {
            expanded && (<Image src={checkedIcon} width={14} height={14} alt='Check' />)
          }
        </IconButton>
        <Box className={classes.title}>
          <Typography variant='h6' fontWeight={700}>
            {title}
          </Typography>
          <Typography variant='body1'>
            {subTitle}
          </Typography>
        </Box>
        {headerChildren}
      </Box>
      {
        children && (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box className={clsx(classes.collapseContent, 'collapse-content')}>
              {children}
            </Box>
          </Collapse>
        )
      }
    </Box>
  )
}

export default RadioCollapse;
