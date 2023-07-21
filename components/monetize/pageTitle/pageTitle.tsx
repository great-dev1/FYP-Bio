import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import { PlusIcon } from 'components/svg';
import CustomButton from 'components/customButton';

import styles from 'assets/jss/components/monetizeStyles';
const useStyles = makeStyles(styles);

interface Props {
  title: string;
  searchPlaceholder: string;
  addBtnText: string;
  onClickAdd: () => void;
  customIcon?: React.ReactNode;
}

const PageTitle: FC<Props> = (props) => {

  const { title, searchPlaceholder, addBtnText, onClickAdd, customIcon } = props;
  const classes = useStyles();  
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.pageTitle} display='flex' alignItems='center' flexWrap='wrap'>
      <Typography className='page-title' variant='h1' fontWeight={700} color='#000' fontSize={25} lineHeight='34px'>
        {title}
      </Typography>      
      <Box className={classes.searchField}>
        <InputBase
          placeholder={searchPlaceholder}
        />
        <CustomButton variant='contained' background='blueGradient' boxShadow='none'>
          <SearchIcon />
        </CustomButton>
      </Box>
      <Button variant='contained' className={clsx('add-btn', {'custom-icon-btn': customIcon})} onClick={onClickAdd}>
        { !isMobile && customIcon}
        <PlusIcon width={15} height={15} color='#fff' />
        <span className='btn-text'>{addBtnText}</span>
      </Button>
    </Box>
  )
}

export default PageTitle;
