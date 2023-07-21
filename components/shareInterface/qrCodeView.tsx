import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import CustomImage from 'components/customImage';
import TitleBox from './titleBox';
import CustomSwitch from 'components/customSwitch';
import { DownloadIcon } from 'components/svg';

import qrCodeImg from 'assets/img/share-ui/qr-code.svg';

import styles from 'assets/jss/components/shareInterfaceDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
  handleClickPrev: () => void;
}

const QrCodeView: FC<Props> = (props) => {

  const { handleClose, handleClickPrev } = props;
  const classes = useStyles();

  const [showProfile, setShowProfile] = useState(true);

  return (
    <Box className={classes.qrCodeView}>
      <TitleBox
        title='QR Code'
        subTitle='Direct people to your profile on fyp.bio by scanning this unique QR code below'
        handleClose={handleClose}
        showPrev
        handleClickPrev={handleClickPrev}
        className='header'
      />
      <Box>
        <Box className='qr-code' display='flex' justifyContent='center' alignItems='center'>
          <CustomImage src={qrCodeImg} alt='' width={255.85} height={255.85} mdWidth={304.46} mdHeight={304.46} />
        </Box>
        <Link href='/' underline='none' className='link-btn'>
          <svg width="34" height="28" viewBox="0 0 34 28" className='logo'>
            <g transform="translate(0.2 1)">
              <text transform="translate(10.799 12)" fill="#621ae3" fontSize="12" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="12">BIO</tspan></text>
              <rect width="3" height="21" rx="1.5" transform="translate(-0.2 3)" fill="#621ae3" />
            </g>
          </svg>
          https://FYP.bio/KhalidGFX
        </Link>
        <Box>
          <Box mb='19px' display='flex' alignItems='center' justifyContent='space-between' className='option-item'>
            <Box>
              <Typography variant='h6' color='#000' fontSize={15} lineHeight='21px'>
                Show Profile Picture
              </Typography>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.48)' fontSize={14} lineHeight='20px'>
                Use toggle to select the status
              </Typography>
            </Box>
            <CustomSwitch checked={showProfile} onChange={(e) => setShowProfile(e.target.checked)} />
          </Box>

          <Box mb='19px' display='flex' alignItems='center' justifyContent='space-between' className='option-item'>
            <Box>
              <Typography variant='h6' color='#000' fontSize={15} lineHeight='21px'>
                Download PNG
              </Typography>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.48)' fontSize={14} lineHeight='20px'>
                High quality image
              </Typography>
            </Box>
            <Link href='/' underline='none' sx={{ display: 'flex' }}>
              <DownloadIcon color='#000' />
            </Link>
          </Box>

          <Box display='flex' alignItems='center' justifyContent='space-between' className='option-item'>
            <Box>
              <Typography variant='h6' color='#000' fontSize={15} lineHeight='21px'>
                Download SVG
              </Typography>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.48)' fontSize={14} lineHeight='20px'>
                Scalable vector graphic
              </Typography>
            </Box>
            <Link href='/' underline='none' sx={{ display: 'flex' }}>
              <DownloadIcon color='#000' />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default QrCodeView;
