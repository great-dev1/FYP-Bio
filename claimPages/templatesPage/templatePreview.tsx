import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import avatar from 'assets/img/template-avatar.png';

import styles from 'assets/jss/components/templatesStyles';
const useStyles = makeStyles(styles);

interface Props {
  templateType: string;
}

const TemplatePreview: FC<Props> = (props) => {

  const { templateType } = props;
  const classes = useStyles();

  const classNames = clsx(
    classes.templatePreview,
    {
      [classes.onlyFansType]: templateType === 'onlyfans',
      [classes.minimalType]: templateType === 'minimal',
      [classes.glassType]: templateType === 'glass',
      [classes.snowType]: templateType === 'snow',
      [classes.neonType]: templateType === 'neon',
      [classes.threeDType]: templateType === '3d',
      [classes.backgroundType]: templateType === 'background'
    }
  );

  return (
    <Box className={classNames}>
      <Box
        className={clsx('template-head', classes.templateHead)}
        position='relative'
      >
        <Box textAlign='center' className='template-preview-content'>
          <Image src={avatar} unoptimized={true} alt='' width={62.5} height={62.5} />
          <Typography
            variant='body1'
            fontSize={14}
            lineHeight='20px'
            color={templateType === '' || templateType === 'minimal' || templateType === 'snow' || templateType === '3d' ? '#000' : '#fff'}
            fontWeight={700}
            sx={{ marginTop: '8px', marginBottom: '12px' }}
          >
            Vankisha Eden
          </Typography>
        </Box>
        <Box className='template-head-lines'>
          <Box className='template-head-line' sx={{ height: '45px !important' }}></Box>
          <Box className='template-head-line' sx={{ height: '45px !important', marginBottom: '0 !important' }}></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TemplatePreview;
