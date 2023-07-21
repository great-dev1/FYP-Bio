import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import MobileDevice from 'components/mobileDevice/mobileDevice';
import DesignMobile from 'components/mobileDevice/designMobile';

import closeIcon from 'assets/img/close-black.svg';
import styles from 'assets/jss/components/previewDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  open: boolean;
  handleClose: () => void;
  showDesignModal?: boolean;
}

const PreviewDialog: FC<Props> = (props) => {

  const { open, handleClose, showDesignModal } = props;
  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} open={open} className={classes.preview}>
      <Box className={classes.mobileDevice}>
        {
          showDesignModal ? <DesignMobile /> : <MobileDevice />
        }
      </Box>
      <IconButton size='large' className={classes.closeBtn} onClick={handleClose}>
        <Image src={closeIcon} alt='' width={16} height={16} />
      </IconButton>
    </Dialog>
  )
}

export default PreviewDialog;
