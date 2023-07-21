import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

import CustomImage from 'components/customImage';
import CopyLink from './copyLink';
import TitleBox from './titleBox';

import shareMediaIcon from 'assets/img/share-ui/share-media.svg';
import chevronIcon from 'assets/img/share-ui/chevron-right.svg';
import addToBioIcon from 'assets/img/share-ui/add-to-bio.svg';
import qrCodeIcon from 'assets/img/share-ui/get-qr-code.svg';
import globalIcon from 'assets/img/share-ui/global.svg';

import styles from 'assets/jss/components/shareInterfaceDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleClickNext: (val: 'start' | 'shareMedia' | 'addBio' | 'qrCode' | 'openPage') => void;
  handleClose: () => void;
  onClickCopy: () => void;
}

const StartView: FC<Props> = (props) => {

  const { handleClickNext, handleClose, onClickCopy } = props;
  const classes = useStyles();

  return (
    <>
      <TitleBox
        title='Share Your FYP.bio'
        subTitle='Increase your traffic by sharing your profile across the internet'
        handleClose={handleClose}
      />
      <Box className={classes.startView}>
        <Grid container rowSpacing={{ xs: '20.7px', md: 4 }}>
          <Grid item xs={12}>
            <Box position='relative' className='start-line' onClick={() => handleClickNext('shareMedia')}>
              <Box display='flex' position='absolute' className='pre-icon'>
                <Image src={shareMediaIcon} alt='' width={24.83} height={20.69} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={500} color='#000' lineHeight='24px'>
                Share on Social Media
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className='start-line' onClick={() => handleClickNext('addBio')}>
              <Box display='flex' position='absolute' className='pre-icon'>
                <CustomImage src={addToBioIcon} alt='' width={19.31} height={19.31} mdWidth={23} mdHeight={23} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={500} color='#000' lineHeight='24px'>
                Add to your Bio
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className='start-line' onClick={() => handleClickNext('qrCode')}>
              <Box display='flex' position='absolute' className='pre-icon'>
                <Image src={qrCodeIcon} alt='' width={21} height={21} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={500} color='#000' lineHeight='24px'>
                Get my QR code
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box position='relative' className='start-line' onClick={() => handleClickNext('openPage')}>
              <Box display='flex' position='absolute' className='pre-icon'>
                <Image src={globalIcon} alt='' width={23.61} height={23.61} />
              </Box>
              <Typography variant='body1' fontSize={17} fontWeight={500} color='#000' lineHeight='24px'>
                Open my Page
              </Typography>
              <IconButton className='next-btn'>
                <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box className='copy-link-box'>
          <CopyLink onClickCopy={onClickCopy} />
        </Box>
      </Box>
    </>
  )
}

export default StartView;
