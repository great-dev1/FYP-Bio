import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import TextField from '@mui/material/TextField';

import CustomImage from 'components/customImage';
import CustomRadio from 'components/customRadio';

import editIcon from 'assets/img/settings/edit-purple.svg';

import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  value: string;
  isPreAttach?: boolean;
}

const PreferredLink: FC<Props> = (props) => {

  const classes = useStyles();

  const { value, isPreAttach } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('henry');

  return (
    <Box display='flex' alignItems='center' className={clsx(classes.preferredLinkCell, 'preferred-link-cell')}>
      <CustomRadio value={value} />
      <Box className='radio-label' display='flex' alignItems='center'>
        {
          !isPreAttach && (
            <Typography variant='body1'>
              FYP.bio/
            </Typography>
          )
        }
        {
          isEdit ? (
            <TextField variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
          ) : (
            <Typography variant='body1'>
              {name}
            </Typography>
          )
        }
        {
          isPreAttach && (
            <Typography variant='body1'>
              .FYP.bio
            </Typography>
          )
        }
        {
          isEdit ? (
            <DoneIcon className='save-icon' onClick={() => setIsEdit(false)} />
          ) : (
            <CustomImage
              src={editIcon} alt=''
              width={15}
              height={15}
              mdWidth={13.7}
              mdHeight={13.7}
              onClick={() => setIsEdit(true)}
            />
          )
        }
      </Box>
    </Box>
  )
}

export default PreferredLink;
