import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';

import CustomInput from 'components/customInput';

import styles from 'assets/jss/pages/cameoPageStyles';
const useStyles = makeStyles(styles);

const InstructionsForm: FC = () => {

  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const [instruction, setInstruction] = useState('');

  return (
    <Box className={clsx(classes.formCard)}>
      <Typography variant='h3' fontWeight={700} color='#000' className='form-title'>
        Instructions for Sammi Sweetheart Giancola
      </Typography>
      <Box mt={{ xs: '15px', md: '22px' }} position='relative'>
        <CustomInput
          onChange={(e) => setInstruction(e.target.value)}
          placeholder='Enter instructions here…'
          fullWidth
          variant='normal'
          className='text-field'
          value={instruction}
          inputProps={{
            multiline: true,
            rows: 4
          }}
        />
      </Box>

      <Box className={classes.confirmCheckbox} display='flex' alignItems='center'>
        <Checkbox
          checkedIcon={
            <Box className='checkbox-icon' display='flex' alignItems='center' justifyContent='center'>
              <CheckIcon />
            </Box>
          }
          icon={<Box className='checkbox-icon' />}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Typography variant='body1' color='#000' onClick={() => setChecked(!checked)}>
          Hide this video from Sammi Sweetheart Giancola&apos;s profile
        </Typography>
      </Box>
    </Box>
  )
}

export default InstructionsForm;
