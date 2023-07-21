import React, { FC, useState, useCallback } from 'react';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';

import MobileMenuItem from './mobileMenuItem';
import PreferredLink from './preferredLink';
import TabContentsBox from './tabContentsBox';

import { settingsMenuList } from 'assets/mockdata/settingsData';

import photoImg from 'assets/img/settings/photo-black.svg';

import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  currentTab: boolean;
  handleSetTab: () => void;
}

const UrlManagement: FC<Props> = (props) => {

  const { currentTab, handleSetTab } = props;
  const classes = useStyles();

  const [value, setValue] = useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [counts, setCounts] = useState(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setCounts(acceptedFiles.length);
  }, [setCounts]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box className={clsx(classes.tabContent, { [classes.deactiveTab]: !currentTab })} id='url-management'>
      <Typography variant='h3' fontWeight={700} className='tab-title'>
        Url Management
      </Typography>
      <MobileMenuItem
        active={currentTab}
        data={settingsMenuList.find((cell) => cell.title === 'Url Management')}
        handleClick={handleSetTab}
      />
      <TabContentsBox expanded={currentTab}>
        <Box className={classes.urlManagementContents}>
          <Box className={classes.preferredLinkBox}>
            <Typography variant='h6' fontWeight={700}>
              Preferred Link
            </Typography>
            <Typography variant='body1'>
              This is an aesthetic choice, both links are usable
            </Typography>
            <Box className={classes.preferredLinks}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="henry"
                name="radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <PreferredLink value='1' />
                <PreferredLink value='2' isPreAttach />
              </RadioGroup>
            </Box>
          </Box>
          <Box className={classes.faviconBox}>
            <Typography variant='h6' fontWeight={700}>
              Favicon
            </Typography>
            <Typography variant='body1'>
              Upload the favicon that will be used on browsers
            </Typography>
            <Box {...getRootProps()} className='file-dropzone' textAlign='center'>
              <input {...getInputProps()} />
              <Image src={photoImg} alt='' width={32.38} height={25.7} />
              <Typography variant='h6' fontWeight={700}>
                Drag and drop or browse files
              </Typography>
              <Typography variant='body1' fontWeight={300}>
                {
                  counts === 0 ? 'JPEG, PNG, and GIF files accepted' : `${counts} files accepted`
                }
              </Typography>
              <Typography variant='body1' fontWeight={300}>
                16x16 px or 32x32 px
              </Typography>
            </Box>
          </Box>
        </Box>
      </TabContentsBox>
    </Box>
  )
}

export default UrlManagement;
