import React, { FC } from 'react';
import Image from 'next/image';
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

const ImageDialog: FC<Props> = (props) => {

  const { handleClose, open, filePath } = props;
  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog}>
      <Box display='flex' position='relative'>
        <Box className={classes.actions} position='absolute' display='flex'>
          <Link href={filePath} download={true}>
            <DownloadIcon />
          </Link>
          <Link variant='button' onClick={handleClose}>
            <CloseIcon />
          </Link>
        </Box>
        <Image src={filePath} alt='' unoptimized width={600} height={400} />
      </Box>
    </Dialog>
  )
}

export default ImageDialog;
