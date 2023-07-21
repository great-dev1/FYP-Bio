import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';

import styles from 'assets/jss/components/imageDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
  open: boolean;
  filePath: string;
}

const VideoDialog: FC<Props> = (props) => {

  const { handleClose, open, filePath } = props;
  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} open={open} className={clsx(classes.dialog, classes.videoDialog)}>
      <Box display='flex' className={classes.videoBox} position='relative'>
        <Box className={classes.actions} position='absolute' display='flex'>
          <Link href={filePath} download={true}>
            <DownloadIcon />
          </Link>
          <Link variant='button' onClick={handleClose}>
            <CloseIcon />
          </Link>
        </Box>
        <video autoPlay={false} muted controls>
          <source src={filePath} type='video/mp4' />
        </video>
      </Box>
    </Dialog>
  )
}

export default VideoDialog;
