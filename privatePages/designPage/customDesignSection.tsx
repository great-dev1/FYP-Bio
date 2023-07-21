import React, { FC, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TemplateItem from 'components/templateItem';
import ColorPannel from './colorPannel';
import ButtonStylesPannel from './buttonStylesPannel';
import FontsPannel from './fontsPannel';
import ButtonTransparencyPannel from './buttonTransparencyPannel';
import CommonFileDropzone from 'components/fileDropzone/commonFileDropzone';
import CustomImage from 'components/customImage';
import ColorTextField from './colorTextField';

import { backgroundStyles } from 'assets/mockdata/designData';
import checkIcon from 'assets/img/check-icon-white.svg';
import uploadIcon from 'assets/img/design/upload-purple.svg';

import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);

const CustomDesignSection: FC = () => {

  const classes = useStyles();

  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [gradientColor1, setGradientColor1] = useState('#000');
  const [gradientColor2, setGradientColor2] = useState('#000');

  return (
    <Box className={clsx(classes.templateBlock)} id='general-custom'>
      <Typography variant='h3' fontWeight={700}>
        Custom Design
      </Typography>

      <Box className={classes.backgroundStyles}>
        <Typography variant='h6' fontWeight={400}>
          Background Style
        </Typography>

        <Grid container columnSpacing={{ xs: '20px', sm: '20px', md: '32px' }} rowSpacing={{ xs: '14px', sm: '14px', md: '24px' }}>
          {
            backgroundStyles.map((template) => (
              <Grid item xs={6} sm={6} md={6} lg={4} key={template.title}>
                <Box position='relative'>
                  <TemplateItem
                    template={template}
                    onSelect={() => setSelectedTemplate(template.type)}
                    active={selectedTemplate === template.type}
                    avatar={
                      <Box display='flex' justifyContent='center' className='template-avatar'>
                        <Box className={classes.customTempAvatar}></Box>
                      </Box>
                    }
                  />
                  {
                    selectedTemplate === template.type && (
                      <Box className={classes.checkMark} display='flex' alignItems='center' justifyContent='center' position='absolute'>
                        <Image src={checkIcon} alt='' width={13.15} height={11.5} />
                      </Box>
                    )
                  }
                </Box>
              </Grid>
            ))
          }
          <Grid item xs={6} sm={6} md={6} lg={4}></Grid>
          {
            (selectedTemplate === 'backgroundPhoto' || selectedTemplate === 'backgroundVideo' || selectedTemplate === 'coverPhoto') && (
              <Grid item xs={12}>
                <Typography variant='h6' fontWeight={400}>
                  {
                    selectedTemplate === 'backgroundPhoto' ? 'Upload Background Photo' : 'Upload Background Video'
                  }
                </Typography>
                <CommonFileDropzone
                  text='Drag and drop or browse files'
                  setFiles={(files) => {
                    console.log(files);
                  }}
                  dropzoneIcon={
                    <CustomImage src={uploadIcon} alt='' width={24} height={22} mdWidth={18.34} mdHeight={17} />
                  }
                />
              </Grid>
            )
          }
          {
            selectedTemplate === 'gradient' && (
              <>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
                  <Box className={classes.colorPickerItem}>
                    <Typography variant='body1'>
                      Gradient Color 1
                    </Typography>
                    <ColorTextField color={gradientColor1} onChange={(val) => setGradientColor1(val)} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
                  <Box className={classes.colorPickerItem}>
                    <Typography variant='body1'>
                      Gradient Color 2
                    </Typography>
                    <ColorTextField color={gradientColor2} onChange={(val) => setGradientColor2(val)} />
                  </Box>
                </Grid>
              </>
            )
          }
        </Grid>
      </Box>

      <ColorPannel />
      <ButtonStylesPannel />
      <FontsPannel />
      <ButtonTransparencyPannel />
    </Box>
  )
}

export default CustomDesignSection;
