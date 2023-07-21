import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import CustomInput from 'components/customInput';
import CustomButton from 'components/customButton';

import closeIcon from 'assets/img/close-black.svg';

import styles from 'assets/jss/components/adminDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  open: boolean;
  handleClose: () => void;
}

const AddAdminDialog: FC<Props> = (props) => {

  const { handleClose, open } = props;

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError(false);
      handleClose();
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    setEmail('');
    setError(false);
  }, [open])

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog}>
      <Box className={classes.dialogContents} p={3} pt={5} position='relative'>
        <IconButton className={classes.closeBtn} onClick={handleClose}>
          <Image src={closeIcon} alt='Close' width={15.2} height={15.2} />
        </IconButton>
        <Box>
          <CustomInput
            fullWidth
            labelText='Email'
            onChange={(e) => setEmail(e.target.value)}
            variant='normal'
            placeholder='Enter Email'
            value={email}
            error={error}
          />
        </Box>
        <Box mt={4}>
          <CustomButton background='blueGradient' fullWidth onClick={handleSubmit}>
            Sent Request
          </CustomButton>
        </Box>
      </Box>
    </Dialog>
  )
}

export default AddAdminDialog;
