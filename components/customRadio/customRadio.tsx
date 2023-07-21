import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Radio, {RadioProps} from '@mui/material/Radio';
import { RadioIcon } from 'components/svg';

import checkedIconImg from 'assets/img/settings/radio-checked.svg';

import styles from 'assets/jss/components/radioStyles';

const useStyles = makeStyles(styles);

const CustomRadio: FC<RadioProps> = (props) => {
  
  const { className, checkedIcon, ...otherProps } = props;
  const classes = useStyles();

  return (
    <Radio 
      {...otherProps} 
      className={clsx(classes.radio, {[className ?? '']: className})}
      icon={<RadioIcon width={22} height={22} />}
      checkedIcon={checkedIcon ? checkedIcon : <Image src={checkedIconImg} alt='' width={22} height={22} />}
    />
  )
}

export default CustomRadio;
