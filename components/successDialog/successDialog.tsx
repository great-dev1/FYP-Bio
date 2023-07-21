import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import CustomImage from 'components/customImage';
import CustomButton from 'components/customButton';

import successImg from 'assets/img/support/success.svg';

import styles from 'assets/jss/components/successDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  open: boolean;
  handleClose: () => void;
}

const SuccessDialog: FC<Props> = (props) => {

  const { open, handleClose } = props;

  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog}>
      <Box position='relative' className={classes.contents}>
        <IconButton className='close-btn' onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Box display='flex' justifyContent='center'>
          <CustomImage src={successImg} alt='' width={256} height={256} mdWidth={193} mdHeight={193} />
        </Box>
        <Typography variant='h3' fontWeight={700} align='center' color='#000'>
          Thank you for the purchase
        </Typography>
        <Typography variant='body1' align='center' color='rgba(0, 0, 0, 0.25)'>
          We have sent a payment confirmation email to henrylipsy@gmail.com
        </Typography>
        <Box display='flex' justifyContent='center'>
          <CustomButton variant='contained' boxShadow='none'
            fullWidth background='blueGradient' className='view-btn'>
            View the Bundle
          </CustomButton>
        </Box>
      </Box>
    </Dialog>
  )
}

export default SuccessDialog;
