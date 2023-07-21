import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import CustomImage from 'components/customImage';

import copyLinkIcon from 'assets/img/share-ui/copy-link.svg';

import styles from 'assets/jss/components/shareInterfaceDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  onClickCopy: () => void;
}

const CopyLink: FC<Props> = (props) => {

  const { onClickCopy } = props;
  const classes = useStyles();

  return (
    <Box className={classes.copyLink} display='flex' alignItems='center' position='relative'>
      <svg width="34" height="28" viewBox="0 0 34 28" className='logo'>
        <g transform="translate(0.2 1)">
          <text transform="translate(10.799 12)" fill="#621ae3" fontSize="12" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="12">BIO</tspan></text>
          <rect width="3" height="21" rx="1.5" transform="translate(-0.2 3)" fill="#621ae3" />
        </g>
      </svg>
      <Typography variant='body1' fontSize={15} lineHeight='21px' color='#000000'>
        FYP.bio/KhalidGFX
      </Typography>
      <Link variant='button' className='copy-icon' onClick={onClickCopy}>
        <CustomImage src={copyLinkIcon} alt='' width={20.67} height={20.67} mdWidth={16.59} mdHeight={16.59} />
      </Link>
    </Box>
  )
}

export default CopyLink;
