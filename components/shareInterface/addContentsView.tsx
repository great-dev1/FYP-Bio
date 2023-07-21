import React, { FC, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';

import CustomImage from 'components/customImage';
import TitleBox from './titleBox';
import CopyLink from './copyLink';

import checkedCheckbox from 'assets/img/share-ui/checkbox-checked.svg';
import checkboxIcon from 'assets/img/share-ui/checkbox.svg';
import contentImg from 'assets/img/share-ui/content-img.webp';
import chevronIcon from 'assets/img/share-ui/chevron-right.svg';

import styles from 'assets/jss/components/shareInterfaceDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
  handleClickPrev: () => void;
  socialName: string;
  socialLinkIcon: React.ReactNode;
  onClickCopy: () => void;
}


const AddContentsView: FC<Props> = (props) => {

  const { handleClose, handleClickPrev, socialLinkIcon, onClickCopy, socialName } = props;
  const classes = useStyles();

  const [isCopy, setIsCopy] = useState(false);
  const [clickProfile, setClickProfile] = useState(false);
  const [paste, setPaste] = useState(false);

  return (
    <Box className={classes.addContentsView}>
      <TitleBox
        title={`Add to ${socialName}`}
        handleClose={handleClose}
        showPrev
        handleClickPrev={handleClickPrev}
        className='title-box'
      />
      <Box>
        <Box display='flex' alignItems='center' className='checkbox-line'>
          <Checkbox
            checkedIcon={<Box display='flex' className='checkbox-icon'><Image src={checkedCheckbox} alt='' width={26} height={26} /></Box>}
            icon={<Box display='flex' className='checkbox-icon'><Image src={checkboxIcon} alt='' width={26} height={26} /></Box>}
            onChange={(e) => setIsCopy(e.target.checked)}
            checked={isCopy}
          />
          <Typography variant='body1' fontSize={15} fontWeight={300} lineHeight='21px' color='#000'
            onClick={() => setIsCopy(!isCopy)} sx={{ cursor: 'pointer' }}
          >
            Copy your FYP.bio url below
          </Typography>
        </Box>

        <Box display='flex' alignItems='center' className='checkbox-line'>
          <Checkbox
            checkedIcon={<Box display='flex' className='checkbox-icon'><Image src={checkedCheckbox} alt='' width={26} height={26} /></Box>}
            icon={<Box display='flex' className='checkbox-icon'><Image src={checkboxIcon} alt='' width={26} height={26} /></Box>}
            onChange={(e) => setClickProfile(e.target.checked)} checked={clickProfile}
          />
          <Typography variant='body1' fontSize={15} fontWeight={300} lineHeight='21px' color='#000'
            onClick={() => setClickProfile(!clickProfile)} sx={{ cursor: 'pointer' }}
          >
            {`On your ${socialName} profile page, click Edit Profile`}
          </Typography>
        </Box>

        <Box display='flex' alignItems='center' className='checkbox-line'>
          <Checkbox
            checkedIcon={<Box display='flex' className='checkbox-icon'><Image src={checkedCheckbox} alt='' width={26} height={26} /></Box>}
            icon={<Box display='flex' className='checkbox-icon'><Image src={checkboxIcon} alt='' width={26} height={26} /></Box>}
            onChange={(e) => setPaste(e.target.checked)}
            checked={paste}
          />
          <Typography variant='body1' fontSize={15} fontWeight={300} lineHeight='21px' color='#000'
            onClick={() => setPaste(!paste)} sx={{ cursor: 'pointer' }}
          >
            Paste your FYP.bio link in the website field
          </Typography>
        </Box>

        <Box className='img-content' display='flex'>
          <Image src={contentImg} alt='' width={356} height={181} />
        </Box>
        <CopyLink onClickCopy={onClickCopy} />
        <Box position='relative' className={clsx(classes.socialLink, 'social-line')}>
          <Box display='flex' position='absolute' className='social-icon' justifyContent='center'>
            {socialLinkIcon}
          </Box>
          <Typography variant='body1' fontSize={17} fontWeight={300} color='#000' lineHeight='24px'>
            {`Go to my ${socialName}`}
          </Typography>
          <IconButton className='next-btn'>
            <CustomImage src={chevronIcon} alt='' width={9.18} height={16.22} mdWidth={7.37} mdHeight={13.02} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default AddContentsView;
