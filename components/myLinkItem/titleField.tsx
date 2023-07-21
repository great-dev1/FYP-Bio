import React, { FC, useState } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';

import CustomSwitch from 'components/customSwitch';

import editIcon from 'assets/img/edit.svg';
import notificationIcon from 'assets/img/notification.svg';
import removeIcon from 'assets/img/remove.svg';
import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

const TitleField: FC = () => {

  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const handleSaveTitle = () => {
    setIsEdit(false);
  }

  return (
    <Box className={classes.titleBox}>
      <Box className={classes.titleLabel} display='flex' alignItems='center'>
        {
          isEdit ? (
            <Box display='flex' alignItems='center' className={classes.titleForm}>
              <TextField
                variant="standard"
                placeholder='Please enter title'
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setIsEdit(false);
                  }
                }}
                fullWidth
                value={title}
              />
              <IconButton onClick={handleSaveTitle} className='check-btn'>
                <CheckIcon />
              </IconButton>
            </Box>
          ) : (
            <Box display='flex' alignItems='center' flex={1} sx={{ cursor: 'pointer' }} onClick={() => setIsEdit(true)}>
              <Typography variant='h6' fontWeight={500}>
                {title === '' ? 'Title' : title}
              </Typography>
              <IconButton className={classes.editBtn} onClick={() => setIsEdit(true)}>
                <Image src={editIcon.src} alt="" width={14.37} height={14.37} />
              </IconButton>
            </Box>
          )
        }
        <Box ml='auto' display='flex' alignItems='center' className={classes.notificationBox}>
          <Image src={removeIcon} width={15} height={15} alt="" />
          <Image src={notificationIcon} width={15.58} height={18} alt="" />
          <CustomSwitch defaultChecked />
        </Box>
      </Box>
    </Box>
  )
}

export default TitleField;
