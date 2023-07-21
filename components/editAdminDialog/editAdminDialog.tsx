import React, { FC } from 'react';
import Image from 'next/image';
import { Formik } from 'formik';
import * as yup from "yup";
import { makeStyles } from "@mui/styles";

import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import CustomInput from 'components/customInput';
import CustomButton from 'components/customButton';
import CustomSelect from 'components/customSelect';

import closeIcon from 'assets/img/close-black.svg';
import { userLevels } from 'assets/mockdata/settingsData';

import styles from 'assets/jss/components/adminDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  open: boolean;
  handleClose: () => void;
}

export interface FormType {
  name: string;
  level: string;
}

export const FormSchema = yup.object().shape(
  {
    name: yup.string().required(),
    level: yup.string().required()
  }
);

export const defaultValues = {
  name: 'Isabella Adams',
  level: 'admin'
}
const EditAdminDialog: FC<Props> = (props) => {

  const { handleClose, open } = props;

  const classes = useStyles(); 

  const onHandleSubmit = (data: FormType) => {
    handleClose();
  }

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog}>
      <Box className={classes.dialogContents} p={3} pt={5} position='relative'>
        <IconButton className={classes.closeBtn} onClick={handleClose}>
          <Image src={closeIcon} alt='Close' width={15.2} height={15.2} />
        </IconButton>
        <Formik
          initialValues={{ ...defaultValues }}
          validationSchema={FormSchema}
          onSubmit={onHandleSubmit}
        >
          {
            ({ errors, handleChange, handleSubmit, touched, values }) => (
              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Box>
                  <CustomInput
                    fullWidth
                    labelText='Name'
                    onChange={handleChange}
                    variant='normal'
                    placeholder='Enter Name'
                    name='name'
                    value={values.name}
                    error={Boolean(touched.name && errors.name)}
                  />
                </Box>
                <Box mt={2}>
                  <CustomSelect
                    fullWidth
                    options={userLevels}
                    value={values.level}
                    variant='outlined'
                    onChange={handleChange}
                    labelText='Permission level'
                    name='level'
                    error={Boolean(touched.level && errors.level)}
                  />
                </Box>
                <Box mt={4}>
                  <CustomButton background='blueGradient' fullWidth onClick={() => handleSubmit()}>
                    Save
                  </CustomButton>
                </Box>
              </form>
            )
          }
        </Formik>
      </Box>
    </Dialog>
  )
}

export default EditAdminDialog;
