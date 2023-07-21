import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CustomButton from 'components/customButton';
import { PlusIcon } from 'components/svg';

import styles from 'assets/jss/components/addProductStyles';
const useStyles = makeStyles(styles);

interface Props {
  title: string;
  subTitle: string;
  onClickAddBtn: () => void;
}

const AddContentHeader: FC<Props> = (props) => {

  const { title, subTitle, onClickAddBtn } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.addingContentHeader, 'add-content-header')}
      display='flex' alignItems='center' justifyContent='space-between'
      position='relative'
    >
      <Box flex={1}>
        <Typography variant='h3' color='#474461' fontWeight={700}>
          {title}
        </Typography>
        <Typography variant='body1' color='#000' fontWeight={300}>
          {subTitle}
        </Typography>
      </Box>

      <CustomButton variant='contained' background='blueGradient' boxShadow='none' onClick={onClickAddBtn}>
        <PlusIcon color='#fff' width={17.63} height={17.63} />
        <span className='btn-text'>Add More</span>
      </CustomButton>
    </Box>
  )
}

export default AddContentHeader;
