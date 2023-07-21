import React, { FC, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TemplateItem from 'components/templateItem';
import CustomImage from 'components/customImage';

import { templatesData } from 'assets/mockdata/designData';
import checkIcon from 'assets/img/check-icon-white.svg';
import userImg from 'assets/img/user-avatar.png';

import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);

const TemplatesSection: FC = () => {

  const classes = useStyles();

  const [selectedTemplate, setSelectedTemplate] = useState('');

  return (
    <Box className={clsx(classes.templateBlock, classes.templateSection)} id='general-templates'>
      <Typography variant='h3' fontWeight={700}>
        Templates
      </Typography>
      <Typography variant='h6' fontWeight={400}>
        Featured
      </Typography>
      <Grid container columnSpacing={{xs: '20px', sm: '20px', md: '32px'}} rowSpacing={{xs: '14px', sm: '14px', md: '24px'}}>
        {
          templatesData.map((template) => (
            <Grid item xs={6} sm={6} md={6} lg={4} key={template.title}>
              <Box position='relative'>
                <TemplateItem
                  template={template}
                  onSelect={() => setSelectedTemplate(template.type)}
                  active={selectedTemplate === template.type}
                  avatar={
                    <Box display='flex' justifyContent='center' className='template-avatar'>
                      <CustomImage src={userImg} alt='' width={45} height={45} mdWidth={36} mdHeight={36} unoptimized />
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
      </Grid>
    </Box>
  )
}

export default TemplatesSection;
