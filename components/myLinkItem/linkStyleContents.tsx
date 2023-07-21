import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import TabContentsHeader from './tabContentsHeader';

import linkStylesData from 'assets/mockdata/linkStylesData';
import pencliIcon from 'assets/img/pencil-white.svg';
import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
}

const LinkStyleContents: FC<Props> = (props) => {

  const { handleClose } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('');

  useEffect(() => {
    setExpanded(true);
  }, [])

  return (
    <Box>
      <Collapse 
        in={expanded}
        timeout="auto" 
        unmountOnExit
      >
        <TabContentsHeader
          icon={<Image src={pencliIcon} width={18.15} height={18.16} alt='' />}
          title='Link Style'
          handleRemove={() => {
            setExpanded(false);
            setTimeout(() => {
              handleClose();
            }, 265);
          }}
        />
        <Box className={classes.animationsList}>
          <Box display='flex' className={classes.linkStylesList}>
            {
              linkStylesData.map((linkStyle) => (
                <Box
                  className={clsx(classes.linkStyleItem, { [classes.activeLinkStyle]: selectedStyle === linkStyle.title })}
                  key={linkStyle.title}
                  onClick={() => setSelectedStyle(linkStyle.title)}
                >
                  <Box
                    className={classes.linkStyleImg}
                    width='100%'
                    display='flex'
                    sx={{ backgroundImage: `url(${selectedStyle === linkStyle.title ? linkStyle.activeImg.src : linkStyle.img.src})` }}
                  >
                  </Box>
                  <Typography variant='body1' fontWeight={500} align='center'>
                    {linkStyle.title}
                  </Typography>
                </Box>
              ))
            }
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}

export default LinkStyleContents
