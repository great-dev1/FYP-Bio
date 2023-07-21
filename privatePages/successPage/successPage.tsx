import React, { FC, useState } from 'react';

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

import SuccessDialog from 'components/successDialog';

const SuccessPage: FC = () => {

  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button variant='contained' onClick={() => setOpen(true)}>
        Open
      </Button>
      <SuccessDialog 
        open={open}
        handleClose={() => setOpen(false)}
      />
    </Box>
  )
}

export default SuccessPage;
