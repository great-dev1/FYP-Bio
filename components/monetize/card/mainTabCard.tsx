import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import CustomImage from 'components/customImage';
import { BankCashIcon, ClockIcon, LocationIcon, EditIcon, TrashIcon } from 'components/svg';

import photoImg from 'assets/img/monetize/photo.svg';
import copyIcon from 'assets/img/monetize/tip-copy.svg';

import styles from 'assets/jss/components/monetizeStyles';
const useStyles = makeStyles(styles);

interface Props {
  onClickEdit: () => void;
  onClickTrash: () => void;
  title: string;
  text: string;
  bankCash: string;
  date?: string;
  showCallZoom?: boolean;
}

const MainTabCard: FC<Props> = (props) => {

  const { onClickEdit, onClickTrash, title, text, bankCash, date, showCallZoom } = props;
  const classes = useStyles();  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={classes.mainTabCard} display='flex' alignItems='center'>
      <Box className='card-image' display='flex' alignItems='center' justifyContent='center'>
        <CustomImage src={photoImg} alt='' width={70} height={70} mdWidth={49} mdHeight={49} />
      </Box>
      <Box className='card-contents'>
        <Box display='flex' alignItems='center' justifyContent='space-between' className='card-title' flexWrap='wrap'>
          <Typography variant='h4' fontWeight={600} color='#474461'>
            {title}
            <CustomImage src={copyIcon} alt='' width={16.8} height={16.8} mdWidth={13.2} mdHeight={13.2} />
          </Typography>
          <Box>
            <IconButton onClick={onClickEdit}>
              <EditIcon color='#9F83EB' />
            </IconButton>
            <IconButton onClick={onClickTrash}>
              <TrashIcon color='#EA3F1D' />
            </IconButton>
          </Box>
        </Box>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.8)' className='card-content' fontWeight={300} fontSize={15} lineHeight='20px'>
          {text}
        </Typography>

        <Box className='properties' display='flex'>
          {
            bankCash && (
              <Box className='property-field' display='flex' alignItems='center'>
                <BankCashIcon color='#000' />
                <Typography variant='body1' color='#474461'>
                  {bankCash}
                </Typography>
              </Box>
            )
          }
          {
            date && (
              <Box className='property-field' display='flex' alignItems='center'>
                <ClockIcon color='#000' />
                <Typography variant='body1' color='#474461'>
                  {date}
                </Typography>
              </Box>
            )
          }
          {
            showCallZoom && (
              <Box className='property-field' display='flex' alignItems='center'>
                <LocationIcon color='#000' />
                <Typography variant='body1' color='#474461'>
                  {isMobile ? 'Zoom' : 'Call on Zoom'}
                </Typography>
              </Box>
            )
          }
        </Box>
      </Box>
    </Box>
  )
}

export default MainTabCard;
