import React, { FC, useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { DNDList } from 'components/dndWidget';
import PinnedSocialItem from './pinnedSocialItem';

import instagramIcon from 'assets/img/instagram-color.svg';
import snapChatIcon from 'assets/img/snapchat-color.svg';
import fanslyIcon from 'assets/img/fansly-color.svg';
import youtubeIcon from 'assets/img/red-youtube.svg';
import twitterIcon from 'assets/img/twitter-blue.svg';
import plusIcon from 'assets/img/plus-white.svg';

import styles from 'assets/jss/pages/editPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleAddSocial: () => void;
}

const PinnedSocials: FC<Props> = (props) => {

  const { handleAddSocial } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const socialsIcons = [
    {
      name: 'Instagram',
      icon: instagramIcon,
      width: 23.18,
      height: 23.18     
    },
    {
      name: 'Snapchat',
      icon: snapChatIcon,     
      width: 21.86,
      height: 20.35
    },
    {
      name: 'Fansly',
      icon: fanslyIcon,  
      width: 24.75,
      height: 20.35
    },
    {
      name: 'Youtube',
      icon: youtubeIcon,     
      width: 25.48,
      height: 17.17
    },
    {
      name: 'Twitter',
      icon: twitterIcon,     
      width: 24.86,
      height: 20.35
    },
  ];

  const [state, setState] = useState<any[]>(socialsIcons);

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }): void => {
    setState(arrayMoveImmutable(state, oldIndex, newIndex))
  }

  return (
    <Box className={classes.pinnedSocials}>
      <Typography variant='body1' className='section-title'>
        Pinned Socials
      </Typography>
      <DNDList
        axis={isMobile ? 'y' : 'x'}
        lockAxis={isMobile ? 'y' : 'x'}
        lockToContainerEdges={true}
        useDragHandle
        onSortEnd={onSortEnd}
        className={classes.dndList}
      >
        {state.map((cell: any, index: number) => (
          <PinnedSocialItem key={cell.name} index={index} data={cell} />
        ))}
      </DNDList>

      <Button fullWidth 
        className='add-btn'
        variant='contained' 
        startIcon={<Image src={plusIcon} alt='' width={17} height={17} />}
        onClick={handleAddSocial}
      >
        Add Socials
      </Button>
    </Box>
  )
}

export default PinnedSocials;
