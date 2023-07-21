import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

import { DNDTrigger } from 'components/dndWidget';
import CustomInput from 'components/customInput';
import CustomSelect from 'components/customSelect';
import CustomSwitch from 'components/customSwitch';

import { TrashIcon } from 'components/svg';
import { IPersonalContent } from 'types';
import { answerTypeOptions } from 'assets/mockdata/addProductsData';

import triggerIcon from 'assets/img/dndTrigger.svg';
import mobileTriggerIcon from 'assets/img/dndTriggerMobile.svg';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  data: IPersonalContent;
  onChangeQuestionType: (id: number, val: string) => void;
  onChangeAnswerType: (id: number, val: string) => void;
}

const ContentItem: FC<Props> = (props) => {

  const { data, onChangeQuestionType, onChangeAnswerType } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.personalContentItem} position='relative'>
      <DNDTrigger className='trigger-btn'>
        <IconButton>
          {
            isMobile ? (
              <Image src={mobileTriggerIcon} alt='' width={6} height={10.21} />
            ) : (
              <Image src={triggerIcon} alt='' width={10} height={17} />
            )
          }
        </IconButton>
      </DNDTrigger>
      <Grid container rowSpacing={{ xs: '12px', md: '18.5px' }}>
        <Grid item xs={12}>
          <Box position='relative' className='question-type'>
            <CustomInput
              onChange={(e) => onChangeQuestionType(data.id, e.target.value)}
              variant='normal'
              placeholder='Type Question'
              fullWidth
              className={classes.formField}
              value={data.questionType}
            />
            <Box position='absolute' display='flex' alignItems='center' className='actions'>
              <Typography variant='body1' color='#000' fontWeight={300}>
                Required <span>Answer</span>
              </Typography>
              <CustomSwitch defaultChecked />
              <IconButton>
                <TrashIcon color='#E62828' />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className='answer-type' position='relative'>
            <CustomSelect
              fullWidth
              options={answerTypeOptions}
              value={data.answerType}
              variant='outlined'
              onChange={(e) => onChangeAnswerType(data.id, e.target.value as string)}
              className={classes.formField}
              placeholder='Answer Type'
            />
            <span className='required'>*</span>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContentItem;
