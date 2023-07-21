import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import CustomImage from 'components/customImage';
import CustomInput from 'components/customInput';
import CustomSelect from 'components/customSelect';

import birthdayIcon from 'assets/img/product/birthday.svg';
import empowermentIcon from 'assets/img/product/empowerment.svg';
import ideaIcon from 'assets/img/product/idea.svg';
import restIcon from 'assets/img/product/rest.svg';
import otherIcon from 'assets/img/product/other.svg';

import styles from 'assets/jss/pages/cameoPageStyles';
const useStyles = makeStyles(styles);

const CameoForForm: FC = () => {

  const classes = useStyles();

  const [toTitle, setToTitle] = useState('He / Him');
  const [category, setCategory] = useState('Birthday');

  const titleOptions = [
    {
      data: 'He / Him',
      label: 'He / Him'
    },
    {
      data: 'She / Her',
      label: 'She / Her'
    },
    {
      data: 'They / Them',
      label: 'They / Them'
    }
  ];

  return (
    <Box className={clsx(classes.formCard, classes.forForm)} id='cameo-for-form'>
      <Typography variant='h3' fontWeight={700} color='#000' className='form-title'>
        Who is this Cameo for?
      </Typography>
      <Box>
        <Grid container rowSpacing='18px' columnSpacing={{ xs: '19px', lg: '20px' }}>
          <Grid item xs={6} sm={6} md={6} lg={4} xl={2.4}>
            <Button
              fullWidth
              className={clsx(classes.cameoCategoryBtn, { [classes.selectedCategory]: category === 'Birthday' })}
              onClick={() => setCategory('Birthday')}
            >
              <span className='icon-box'>
                <CustomImage src={birthdayIcon} alt='' width={30.4} height={30.4} mdWidth={24} mdHeight={24} />
              </span>
              Birthday
            </Button>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={4} xl={2.4}>
            <Button
              fullWidth
              className={clsx(classes.cameoCategoryBtn, { [classes.selectedCategory]: category === 'Pep Talk' })}
              onClick={() => setCategory('Pep Talk')}
            >
              <span className='icon-box'>
                <CustomImage src={empowermentIcon} alt='' width={29} height={29} mdWidth={22} mdHeight={22} />
              </span>
              Pep Talk
            </Button>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={4} xl={2.4}>
            <Button
              fullWidth
              className={clsx(classes.cameoCategoryBtn, { [classes.selectedCategory]: category === 'Advice' })}
              onClick={() => setCategory('Advice')}
            >
              <span className='icon-box'>
                <CustomImage src={ideaIcon} alt='' width={26} height={26} mdWidth={20} mdHeight={20} />
              </span>
              Advice
            </Button>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={4} xl={2.4}>
            <Button
              fullWidth
              className={clsx(classes.cameoCategoryBtn, { [classes.selectedCategory]: category === 'Rest' })}
              onClick={() => setCategory('Rest')}
            >
              <span className='icon-box'>
                <CustomImage src={restIcon} alt='' width={23.4} height={23.4} mdWidth={18.42} mdHeight={18.43} />
              </span>
              Rest
            </Button>
          </Grid>

          <Grid item xs={12} md={12} lg={4} xl={2.4}>
            <Button
              fullWidth
              className={clsx(classes.cameoCategoryBtn, { [classes.selectedCategory]: category === 'Other' })}
              onClick={() => setCategory('Other')}
            >
              <span className='icon-box'>
                <CustomImage src={otherIcon} alt='' width={21} height={20} mdWidth={16.54} mdHeight={15.75} />
              </span>
              Other
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box mt={{ xs: '15.5px', md: '27px' }}>
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12} lg={8}>
            <CustomInput
              fullWidth
              labelText='To'
              onChange={() => { }}
              variant='normal'
              placeholder='Enter First Name'
              className='text-field'
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CustomSelect
              fullWidth
              options={titleOptions}
              value={toTitle}
              variant='outlined'
              onChange={(e) => setToTitle(e.target.value as string)}
              labelText='Title'
              className='select-field'
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default CameoForForm;
