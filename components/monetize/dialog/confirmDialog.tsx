import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

import CustomButton from 'components/customButton';

import styles from 'assets/jss/components/monetizeStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
  open: boolean;
  handleSubmit: () => void;
  text: string;
  btnText: string;
}

const ConfirmDialog: FC<Props> = (props) => {

  const { handleClose, open, handleSubmit, text, btnText } = props;
  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} open={open} className={classes.confirmDialog}>
      <Box position='relative' className='contents'>
        <IconButton className='close-btn' onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant='body1' align='center' className='confirm-text' color='#000'>
          {text}
        </Typography>

        <Box display='flex' justifyContent='center'>
          <CustomButton variant='contained' 
            fullWidth background='blueGradient' boxShadow='none' className='confirm-btn'
            onClick={handleSubmit}
          >
            {btnText}
          </CustomButton>
        </Box>
      </Box>
    </Dialog>
  )
}

export default ConfirmDialog;
