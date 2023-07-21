import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Link, { LinkProps } from '@mui/material/Link'

import { PlusIcon } from 'components/svg';

import styles from 'assets/jss/components/addProductStyles';
const useStyles = makeStyles(styles);

const AddMoreBtn: FC<LinkProps> = (props) => {

  const { className, ...others } = props;
  const classes = useStyles();

  return (
    <Link
      variant='button'
      underline='none'
      className={clsx(classes.addMoreBtn, 'add-more-btn', { [className ?? '']: className })}
      {...others}
    >
      <PlusIcon color='#6454F5' width={17.63} height={17.63} />
      Add More
    </Link>
  )
}

export default AddMoreBtn;
