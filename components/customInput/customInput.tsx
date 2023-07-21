import React, { FC, useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from "@mui/styles";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputProps } from "@mui/material"

import styles from "assets/jss/components/inputStyles"

const useStyles = makeStyles(styles);

interface Props {
  labelText?: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => void;
  name?: string;
  helperText?: string;
  className?: string;
  fullWidth?: boolean;
  placeholder?: string;
  disabled?: boolean;
  inputProps?: InputProps;
  error?: boolean;
  value?: string | number;
  variant?: 'normal' | undefined;
  maxLength?: number | undefined;
}

const CustomInput: FC<Props> = (props) => {

  const classes = useStyles();

  const {
    labelText,
    error,
    id,
    onChange,
    name,
    helperText,
    className,
    fullWidth,
    placeholder,
    disabled,
    inputProps,
    value,
    variant,
    maxLength
  } = props;

  const [textLength, setTextLength] = useState(0);

  useEffect(() => {
    setTextLength((value ?? '').toString().length);
  }, [value]);

  return (
    <FormControl fullWidth={fullWidth}
      className={clsx(className, classes.textField, { [classes.normalTextField]: variant === 'normal' })}
      disabled={disabled}
    >
      {
        labelText &&
        <label className={clsx(classes.label, 'form-label')}>
          {labelText}
        </label>
      }
      <OutlinedInput
        onChange={(e) => {
          if (inputProps?.multiline) {
            if (e.target.value.length < (maxLength ?? 150) + 1) {
              setTextLength(e.target.value.length);
              onChange(e);
            }
          } else {
            onChange(e);
          }
        }}
        id={id}
        name={name}
        placeholder={placeholder}
        {...inputProps}
        error={error}
        value={value}
        autoComplete='off'
      />
      {
        !!helperText && (
          <FormHelperText id={id + "-text"} className={clsx({ [classes.error]: error })}>
            {helperText}
          </FormHelperText>
        )
      }
      {
        inputProps?.multiline && (
          <span className='text-length'>{`${textLength}/${maxLength ?? 150}`}</span>
        )
      }
    </FormControl>
  )
}

export default CustomInput;
