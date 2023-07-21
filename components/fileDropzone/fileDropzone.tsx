import React, { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import photoImg from 'assets/img/photo-purple.svg';
import styles from 'assets/jss/components/fileDropzoneStyles';
const useStyles = makeStyles(styles);

interface Props {
  setFiles: (acceptedFiles: File[]) => void;
  icon?: React.ReactNode
}

const FileDropzone: FC<Props> = (props) => {

  const { setFiles, icon } = props;
  const classes = useStyles();

  const [counts, setCounts] = useState(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setCounts(acceptedFiles.length);
  }, [setFiles, setCounts]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box {...getRootProps()} className={clsx(classes.dropzone, 'file-dropzone')} textAlign='center'>
      <input {...getInputProps()} />
      {
        icon ? icon : <Image src={photoImg} alt='' width={32.38} height={25.7} />
      }
      <Typography variant='h6' fontWeight={700}>
        Drag and drop or browse files
      </Typography>
      <Typography variant='body1' fontWeight={300}>
        {
          counts === 0 ? 'JPEG, PNG, and GIF files accepted' : `${counts} files accepted`
        }
      </Typography>
    </Box>
  )
}

export default FileDropzone;
