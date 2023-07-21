import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';

import CustomSwitch from 'components/customSwitch';

import editIcon from 'assets/img/edit.svg';
import notificationIcon from 'assets/img/notification.svg';

interface Props {
  title: string;
  onChangeTitle: (val: string) => void;
}

const TitleField: FC<Props> = (props) => {

  const { title, onChangeTitle } = props;
  const [value, setValue] = useState<string>('');
  const [isEdit, setIsEdit] = useState(false);
  const [isFree, setIsFree] = useState(false);

  const handleSaveTitle = () => {
    onChangeTitle(value);
    setIsEdit(false);
  }

  useEffect(() => {
    setValue(title);
  }, [title])

  return (
    <Box className='title-box'>
      <Box className='title-label' display='flex' alignItems='center'>
        {
          isEdit ? (
            <Box display='flex' alignItems='center' className='title-form' flex={1} mr={2}>
              <TextField
                variant="standard"
                placeholder='Please enter title'
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setIsEdit(false);
                  }
                }}
                fullWidth
                value={value}
              />
              <IconButton onClick={handleSaveTitle} className='check-btn'>
                <CheckIcon />
              </IconButton>
            </Box>
          ) : (
            <Box display='flex' alignItems='center' flex={1} sx={{ cursor: 'pointer' }} onClick={() => setIsEdit(true)}>
              <Typography variant='h6' fontWeight={500} color='#000'>
                {value === '' ? 'Title' : value}
              </Typography>
              <IconButton className='edit-btn' onClick={() => setIsEdit(true)}>
                <Image src={editIcon.src} alt="" width={14.37} height={14.37} />
              </IconButton>
            </Box>
          )
        }
        <Box ml='auto' display='flex' alignItems='center' className='notification-box'>
          <Typography variant='body1'>
            Mark as Free
          </Typography>
          <Image src={notificationIcon} width={15.58} height={18.03} alt="" />
          <CustomSwitch checked={isFree} onChange={(e) => setIsFree(e.target.checked)} />
        </Box>
      </Box>
    </Box>
  )
}

export default TitleField;
