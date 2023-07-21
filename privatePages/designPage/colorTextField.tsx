import React, { FC, useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  color: string;
  onChange: (val: string) => void;
}

const ColorTextField: FC<Props> = (props) => {

  const { color, onChange } = props;
  const classes = useStyles();

  const [colorField, setColorField] = useState('');

  useEffect(() => {
    setColorField(color.replace('#', ''));
  }, [color])

  return (
    <Box className={clsx('color-picker', classes.colorPicker)} display='flex' alignItems='center'>
      <TextField
        variant="outlined"
        type='color'
        value={color}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className='color-picker-buttn'
        sx={{ backgroundColor: color }}
      />
      <Box flex={1} position='relative'>
        <Typography variant='body1' className='color-mark'>
          #
        </Typography>
        <TextField
          variant="outlined"
          className='color-input-field'
          value={colorField}
          fullWidth
          error
          onChange={(e) => {
            const value = e.target.value;
            if (/^[a-fA-F0-9]*$/.test(value)) {
              if (value.length < 7) {
                setColorField(e.target.value);
                if (/^#[0-9A-F]{6}$/i.test(`#${e.target.value}`)) {
                  onChange(`#${value}`);
                }
              }
            }
          }}
        />
      </Box>

    </Box>
  )
}

export default ColorTextField;
