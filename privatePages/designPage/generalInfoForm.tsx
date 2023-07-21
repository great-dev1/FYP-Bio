import React, { FC, useState, useRef } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CustomButton from 'components/customButton';
import CustomImage from 'components/customImage';
import CustomInput from 'components/customInput';
import { CloseIcon } from 'components/svg';

import userAvatar from 'assets/img/design/user-avatar.png';
import uploadImg from 'assets/img/design/upload.svg';

import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);

const GeneralInfoForm: FC = () => {

  const classes = useStyles();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('');
  const [bioDesc, setBioDesc] = useState('');

  return (
    <Box display='flex' justifyContent='space-between' className={classes.generalInfoForm}>
      <Box className={classes.userAvatarBox}>
        <Box position='relative' display='flex' className={classes.userAvatar}>
          <CustomImage src={userAvatar} width={161} height={161} mdWidth={105} mdHeight={105} alt='' unoptimized />
          <Button className='close-btn'>
            <CloseIcon />
          </Button>
        </Box>
        <input type="file" ref={fileInputRef} id='file-upload' hidden accept='image/png, image/jpg, image/jpeg' />
        <CustomButton
          variant='contained'
          background='blueGradient'
          fullWidth
          boxShadow='none'
          className='user-avatar-upload'
          startIcon={<CustomImage src={uploadImg} width={20} height={18} mdWidth={16} mdHeight={14} alt='' unoptimized />}
          onClick={() => fileInputRef.current?.click()}
        >
          Upload
        </CustomButton>
      </Box>
      <Box className={classes.userInfoForm} flex={1}>
        <Box mb='14px'>
          <CustomInput
            fullWidth
            labelText='Your Name'
            onChange={(e) => setName(e.target.value)}
            variant='normal'
          />
        </Box>
        <Box className='bio-desc-field' position='relative'>
          <CustomInput
            fullWidth
            labelText='Bio Description'
            variant='normal'
            onChange={(e) => setBioDesc(e.target.value)}
            inputProps={{
              multiline: true,
              rows: 2
            }}
            maxLength={90}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default GeneralInfoForm;
