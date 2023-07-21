import React, { FC } from 'react';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface Props {
  open: boolean;
  handleClose: () => void;
}

const CustomSnackbar: FC<Props> = (props) => {

  const { open, handleClose} = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message="Note archived"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant='filled'>
        This is a success message!
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar;
