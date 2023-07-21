import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';

import RadioCollapse from 'components/radioCollapse';
import TabContentsHeader from './tabContentsHeader';

import prioritizeLinkIcon from 'assets/img/prioritize-link.svg';

import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
}

const PrioritizeContents: FC<Props> = (props) => {

  const { handleClose } = props;
  const classes = useStyles();

  const [linkType, setLinkType] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [selectedAnimation, setSelectedAnimation] = useState('');
  const animations = [
    'Bounce', 'Fade', 'Jump', 'Slide', 'Ta-Da', 'Wobble', 'Pulse', 'Flash'
  ];

  useEffect(() => {
    setExpanded(true);
  }, [])

  return (
    <Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TabContentsHeader
          icon={<Image src={prioritizeLinkIcon} width={15.24} height={15.24} alt='' />}
          title='Prioritize Link'
          handleRemove={() => {
            setExpanded(false);
            setTimeout(() => {
              handleClose();
            }, 265);
          }}
        />
        <Box className={classes.collapseItem}>
          <RadioCollapse
            title='Animations'
            subTitle='Display your most important links with engaging effects'
            expanded={linkType === 'animations'}
            setExpanded={() => setLinkType(linkType === 'animations' ? '' : 'animations')}
          >
            <Box className={classes.animationsList}>
              <Box display='flex' justifyContent='space-between'>
                {
                  animations.map((animation) => (
                    <Box
                      className={clsx(classes.animationItem, { [classes.selectedAnimation]: selectedAnimation === animation })}
                      key={animation}
                      onClick={() => setSelectedAnimation(animation)}
                    >
                      <Box className={classes.animationContent}>
                        <Box></Box>
                      </Box>
                      <Typography variant='body1' fontWeight={500} align='center'>
                        {animation}
                      </Typography>
                    </Box>
                  ))
                }
              </Box>
            </Box>
          </RadioCollapse>
        </Box>
        <Box className={classes.collapseItem}>
          <RadioCollapse
            title='Spotlight'
            subTitle='Link automatically expands when a visitor arrives on your FYP.bio'
            expanded={linkType === 'spotlight'}
            setExpanded={() => setLinkType(linkType === 'spotlight' ? '' : 'spotlight')}
          >
          </RadioCollapse>
        </Box>
        <Box>
          <RadioCollapse
            title={`Don't prioritize this link`}
            subTitle='Display link normally without any animations'
            expanded={linkType === 'normally'}
            setExpanded={() => {
              setLinkType(linkType === 'normally' ? '' : 'normally');
              setExpanded(false);
              setTimeout(() => {
                handleClose();
              }, 265);
            }}
          >
          </RadioCollapse>
        </Box>
      </Collapse>
    </Box>
  )
}

export default PrioritizeContents;
