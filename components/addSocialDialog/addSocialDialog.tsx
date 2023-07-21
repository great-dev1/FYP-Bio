import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

import CustomImage from 'components/customImage';
import ContentItem from './contentItem';

import closeIcon from 'assets/img/close-black.svg';

import { socialLinks } from 'assets/mockdata/exploreEmbedsData';

import styles from 'assets/jss/components/addSocialDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  open: boolean;
  handleClose: () => void;
}

const AddSocialDialog: FC<Props> = (props) => {

  const { open, handleClose } = props;

  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog}>
      <Box className={classes.contents} position='relative'>
        <IconButton className={classes.closeBtn} onClick={handleClose}>
          <CustomImage src={closeIcon} alt='Close' width={15.2} height={15.2} mdWidth={9.42} mdHeight={9.42} />
        </IconButton>
        <Typography className='modal-title' variant='h1' fontWeight={700} color='#000' fontSize={20} lineHeight='28px'>
        Add Pinned Social
        </Typography>

        <Box className={classes.scrollWrapper}>
          <Box className={clsx(classes.sectionBlock)}>           
            <Grid container columnSpacing='14px' rowSpacing={{ xs: '0', md: '15px' }} className='content-item-list'>
              {
                socialLinks.map((cell, index) => (
                  <Grid item xs={12} md={6} key={`${cell.title}-${index}`}>
                    <ContentItem data={cell} showAddBtn />
                  </Grid>
                ))
              }
            </Grid>
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}

export default AddSocialDialog;
