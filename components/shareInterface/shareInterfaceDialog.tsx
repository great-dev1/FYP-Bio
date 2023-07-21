import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Dialog from '@mui/material/Dialog';

import ShareInterfaceContents from './shareInterfaceContents';

import styles from 'assets/jss/components/shareInterfaceDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
  open: boolean;
}

const ShareInterfaceDialog: FC<Props> = (props) => {

  const { handleClose, open } = props;
  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialogWrapper}>
      <ShareInterfaceContents handleClose={handleClose} />
    </Dialog>
  )
}

export default ShareInterfaceDialog;
