import React, { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomImage from 'components/customImage';

import uploadIcon from 'assets/img/design/upload-purple.svg';
import styles from 'assets/jss/components/fileDropzoneStyles';
const useStyles = makeStyles(styles);

interface Props {
  setFiles: (acceptedFiles: File[]) => void;
  text?: string;
  dropzoneIcon?: React.ReactNode
}

const CommonFileDropzone: FC<Props> = (props) => {

  const { setFiles, text, dropzoneIcon } = props;
  const classes = useStyles();

  const [counts, setCounts] = useState(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setCounts(acceptedFiles.length);
  }, [setFiles, setCounts]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box {...getRootProps()}
      className={clsx(classes.commonFileDropzone, 'file-dropzone')} display='flex'
      justifyContent='center' position='relative' alignItems='center'>
      <input {...getInputProps()} />
      <Box className='dropzone-icon' position='absolute' display='flex'>
        {
          dropzoneIcon ? dropzoneIcon : (
            <CustomImage src={uploadIcon} alt='' width={24} height={22} mdWidth={18.34} mdHeight={17} />
          )
        }
      </Box>
      <Typography variant='body1' fontWeight={700}>
        {
          counts === 0 ? text : `${counts} files accepted`
        }
      </Typography>
    </Box>
  )
}

export default CommonFileDropzone;
