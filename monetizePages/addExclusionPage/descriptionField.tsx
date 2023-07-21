import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';

import editIcon from 'assets/img/edit.svg';

interface Props {
  description: string;
  onChangeDescription: (val: string) => void;
}

const DescriptionField: FC<Props> = (props) => {

  const { description, onChangeDescription } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState('');

  const handleSaveDesc = () => {
    onChangeDescription(value);
    setIsEdit(false);
  }

  useEffect(() => {
    setValue(description);
  }, [description])

  return (
    <Box className='description-box' display='flex' alignItems='center'>
      {
        isEdit ? (
          <Box display='flex' alignItems='center' sx={{maxWidth: '100% !important'}} flex={1}>
            <TextField
              variant="standard"
              placeholder='Please enter description'
              onChange={(e) => setValue(e.target.value)}
              fullWidth
              value={value}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setIsEdit(false);
                }
              }}
            />
            <IconButton className='check-btn' onClick={handleSaveDesc}>
              <CheckIcon />
            </IconButton>
          </Box>
        ) : (
          <Box display='flex' alignItems='center' flex={1} sx={{cursor: 'pointer'}} onClick={() => setIsEdit(true)} width='100%'>
            <Typography variant='h6' fontWeight={300} color='#000'>
              { value === '' ? 'Description' : value }
            </Typography>
            <IconButton className='edit-btn' onClick={() => setIsEdit(true)}>
              <Image src={editIcon.src} alt="" width={14.37} height={14.37} />
            </IconButton>
          </Box>
        )
      }
    </Box>
  )
}

export default DescriptionField;
