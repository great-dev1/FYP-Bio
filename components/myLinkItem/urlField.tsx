import React, { FC, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';

import { DNDTrigger } from 'components/dndWidget';

import editIcon from 'assets/img/edit.svg';

import styles from 'assets/jss/components/myLinkItemStyles';
const useStyles = makeStyles(styles);

const UrlField: FC = () => {

  const classes = useStyles();

  const [isEdit, setIsEdit] = useState(false);
  const [url, setUrl] = useState('')

  const handleSaveUrl = () => {
    setIsEdit(false);
  }

  return (
    <Box className={classes.urlField} display='flex' alignItems='center'>
      <DNDTrigger className={classes.dndTriggerIcon}>
      </DNDTrigger>
      {
        isEdit ? (
          <Box display='flex' alignItems='center' className={classes.titleForm} sx={{maxWidth: '100% !important'}}>
            <TextField
              variant="standard"
              placeholder='Please enter url'
              onChange={(e) => setUrl(e.target.value)}
              fullWidth
              value={url}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setIsEdit(false);
                }
              }}
            />
            <IconButton className={clsx(classes.editBtn, 'check-btn')} onClick={handleSaveUrl}>
              <CheckIcon />
            </IconButton>
          </Box>
        ) : (
          <Box display='flex' alignItems='center' flex={1} sx={{cursor: 'pointer'}} onClick={() => setIsEdit(true)}>
            <Typography variant='h6' fontWeight={400}>
              { url === '' ? 'Url' : url }
            </Typography>
            <IconButton className={classes.editBtn} onClick={() => setIsEdit(true)}>
              <Image src={editIcon.src} alt="" width={14.37} height={14.37} />
            </IconButton>
          </Box>
        )
      }
    </Box>
  )
}

export default UrlField;
