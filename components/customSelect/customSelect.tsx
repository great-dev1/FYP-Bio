import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Select, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import { SelectOptionProps } from 'types';
import anchorDownIcon from 'assets/img/anchor-down.svg';
import styles from 'assets/jss/components/selectStyles';

const useStyles = makeStyles(styles);

interface Props extends SelectProps {
  options: SelectOptionProps[];
  placeholder?: string;
  labelText?: string;
  variant?: 'outlined' | undefined;
  rounded?: 'none' | undefined;
  className?: string;
}

const CustomSelect: FC<Props> = (props) => {

  const { options, placeholder, labelText, variant, rounded, className, ...selectProps } = props;
  const classes = useStyles();

  const classNames = clsx({
    [classes.outlinedSelect]: variant === 'outlined',
    [classes.roundedNone]: rounded === 'none',
    [className ?? '']: className
  });

  return (
    <Box className={classNames}>
      {
        labelText && (
          <label className={clsx('form-label', classes.label)}>
            {labelText}
          </label>
        )
      }
      <FormControl fullWidth>
        <Select
          IconComponent={() => <Box className={clsx(classes.arrowIcon, 'select-anchor')} position='absolute'>
            <Image src={anchorDownIcon} alt='' width={12.6} height={7} />
          </Box>
          }
          className={classes.select}
          displayEmpty
          {...selectProps}
        >
          {
            placeholder && (
              <MenuItem value="" disabled>
                {placeholder}
              </MenuItem>
            )
          }
          {
            options.map((option, index) => (
              <MenuItem value={option.data} key={`${index}-${option.data}`}>{option.label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  )
}

export default CustomSelect;
