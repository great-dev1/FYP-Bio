import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

import CustomInput from 'components/customInput';
import CustomButton from 'components/customButton';
import CommonFileDropzone from "components/fileDropzone/commonFileDropzone";
import CustomImage from "components/customImage";

import attachmentIcon from 'assets/img/support/attachment.svg';

import styles from 'assets/jss/pages/supportPageStyles';
const useStyles = makeStyles(styles);

const EmailForm: FC = () => {

  const classes = useStyles();

  return (
    <Box className={classes.emailForm}>
      <Grid container columnSpacing='27px' rowSpacing={{ xs: '14px', lg: '27px' }}>
        <Grid item xs={12} lg={6}>
          <CustomInput fullWidth placeholder='Name' onChange={(e) => { }} variant='normal' />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomInput fullWidth placeholder='Email Address' onChange={(e) => { }} variant='normal' />
        </Grid>
        <Grid item xs={12}>
          <CustomInput fullWidth placeholder='Subject' onChange={(e) => { }} variant='normal' />
        </Grid>
        <Grid item xs={12}>
          <CustomInput fullWidth placeholder='Explain what you need help with…' onChange={(e) => { }}
            variant='normal'
            inputProps={{
              multiline: true,
              rows: 6
            }}
            className={classes.descField}
          />
        </Grid>

        <Grid item xs={12} className={classes.fileDropzone}>
          <CommonFileDropzone
            text="Attach Documents"
            setFiles={files => {
              console.log(files);
            }}
            dropzoneIcon={
              <CustomImage
                src={attachmentIcon}
                alt=""
                width={16.3}
                height={25.6}
                mdWidth={11.4}
                mdHeight={18}
              />
            }
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton variant='contained' background='blueGradient' boxShadow='none' fullWidth>
            Submit
          </CustomButton>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EmailForm;
