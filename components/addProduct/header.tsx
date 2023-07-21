import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CustomButton from 'components/customButton';

import headerIcon from 'assets/img/product/page-title-icon.svg';

import styles from 'assets/jss/components/addProductStyles';
const useStyles = makeStyles(styles);

interface Props {
  title: string;
  onClickSaveAsDraft: () => void;
  onClickPublishAccess: () => void;
  publishBtnText: string;
  showMobilePublishBtn?: boolean;
}

const Header: FC<Props> = (props) => {

  const { title, onClickSaveAsDraft, onClickPublishAccess, publishBtnText, showMobilePublishBtn } = props;
  const classes = useStyles();

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' className={clsx('header', classes.header)}>
      <Box display='flex' alignItems='center' className='page-title'>
        <Image src={headerIcon} alt='' width={43} height={43} />
        <Typography variant='h1' color='#000' fontWeight={700}>
          {title}
        </Typography>
      </Box>
      {
        showMobilePublishBtn && (
          <CustomButton variant='contained' boxShadow='none' background='blueGradient'
            onClick={onClickPublishAccess}
            className='mobile-publish-btn'
          >
            Publish
          </CustomButton>
        )
      }
      <Box className='header-btns' display='flex'>
        <CustomButton variant='contained' boxShadow='none' onClick={onClickSaveAsDraft} className='save-as-draft'>
          Save as Draft
        </CustomButton>
        <CustomButton variant='contained' boxShadow='none' background='blueGradient' onClick={onClickPublishAccess}>
          {publishBtnText}
        </CustomButton>
      </Box>
    </Box>
  )
}

export default Header;
