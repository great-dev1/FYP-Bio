import React, { FC, useState } from 'react';
import Image from 'next/image';
import Head from "next/head";
import clsx from 'clsx';
import Carousel from "react-multi-carousel";
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import MobileStepper from 'components/mobileStepper';
import CustomButton from 'components/customButton';
import TemplateItem from 'components/templateItem';
import TemplatePreview from './templatePreview';
import { ChevronRightIcon, LogoIcon } from 'components/svg';
import RightSection from './rightSection';

import { templatesData, mobileTemplatesData, carouselConfig } from 'assets/mockdata/templatesData';
import paintPalette from 'assets/img/paint-palette.webp';
import checkIcon from 'assets/img/check-icon-white.svg';

import styles from 'assets/jss/pages/templatesPageStyles';
const useStyles = makeStyles(styles);

const TemplatesPage: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [mobileSelected, setMobileSelected] = useState('minimal');

  const handleContinue = () => {
    router.push('/');
  }

  const classNames = clsx(
    classes.layout,
    {
      ['only-fans-preview']: selectedTemplate === 'onlyfans',
      ['minimal-preview']: selectedTemplate === 'minimal',
      ['glass-preview']: selectedTemplate === 'glass',
      ['snow-preview']: selectedTemplate === 'snow',
      ['neon-preview']: selectedTemplate === 'neon',
      ['three-dimension-buttons-preview']: selectedTemplate === '3d',
      ['bg-img-preview']: selectedTemplate === 'background'
    }
  );

  return (
    <Box>
      <Head>
        <title>Select Theme</title>
      </Head>
      <Box display='flex' position='relative' className={classNames}>
        <Box className={classes.leftSection}>
          <Box className={classes.navbar} position='relative'>
            <Link href='/' underline='none' className='nav-logo'>
              <svg width="99" height="83" viewBox="0 0 99 83">
                <g transform="translate(-135 -36)">
                  <text transform="translate(166 75)" fontSize="36" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="35">BIO</tspan></text>
                  <rect width="9" height="60" rx="3" transform="translate(135 50)" fill="#a854f5" />
                </g>
              </svg>
            </Link>
            <Link href='/' underline='none' className={classes.skipBtn}>
              Skip
              <ChevronRightIcon color='#9F83EB' width={16} height={16} />
            </Link>
            <Box display='flex'>
              {
                [...Array(4)].map((_, i) => (
                  <Box className={clsx(classes.stepper, { [classes.activeStep]: 4 > i })} key={i}></Box>
                ))
              }
            </Box>
          </Box>
          <Box className={classes.contents}>
            <Box className={classes.contentsInner}>
              <Box className={classes.title}>
                <Typography variant='h3' fontWeight={700}>
                  Select a Template
                </Typography>
                <Typography variant='body1'>
                  Use a theme to jumpstart your bio page
                </Typography>
              </Box>
              <MobileStepper step={4} />

              <Box className={classes.templates}>
                <Grid container columnSpacing='18px' rowSpacing='25px'>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box className={clsx(classes.createItem)} textAlign='center' onClick={handleContinue}>
                      <Image src={paintPalette} alt='' width={47.5} height={47.5} />
                      <Typography variant='body1' align='center'>
                        Create your Theme
                      </Typography>
                    </Box>
                  </Grid>
                  {
                    templatesData.map((template: any) => (
                      <Grid item xs={12} md={4} lg={4} key={template.title}>
                        <Box position='relative'>
                          <TemplateItem
                            template={template}
                            onSelect={() => setSelectedTemplate(template.type)}
                            active={selectedTemplate === template.type}
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

              <Box>
                <Box className={classes.templatePreview}>
                  {
                    mobileSelected !== '' && (
                      <TemplatePreview templateType={mobileSelected} />
                    )
                  }
                </Box>

                <Box className={classes.templateCarousel}>
                  <Carousel
                    responsive={carouselConfig}
                    infinite={true}
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                    containerClass="carousel-container"
                  >
                    {
                      mobileTemplatesData.map((template: any) => (
                        <Box position='relative' key={template.title} className={classes.tempCarouselItem}>
                          <TemplateItem
                            template={template}
                            onSelect={() => setMobileSelected(template.type)}
                            active={mobileSelected === template.type}
                          />
                          {
                            mobileSelected === template.type && (
                              <Box className={classes.checkMark} display='flex' alignItems='center' justifyContent='center' position='absolute'>
                                <Image src={checkIcon} alt='' width={13.15} height={11.5} />
                              </Box>
                            )
                          }
                        </Box>
                      ))
                    }
                  </Carousel>
                </Box>
              </Box>

              <Box className={classes.continueBtn}>
                <CustomButton background='blueGradient' fullWidth onClick={handleContinue}>
                  <span className='hide-mobile'>Select Template and </span>Continue
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </Box>

        <RightSection hideHeroImg={selectedTemplate === 'background'} />
      </Box>
    </Box>
  )
}

export default TemplatesPage;
