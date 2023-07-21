import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

import TabContentsBox from './tabContentsBox';
import MobileMenuItem from './mobileMenuItem';
import CustomInput from 'components/customInput';

import { settingsMenuList } from 'assets/mockdata/settingsData';
import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  currentTab: boolean;
  handleSetTab: () => void;
}

const SeoSection: FC<Props> = (props) => {

  const { currentTab, handleSetTab } = props;
  const classes = useStyles();

  const [hide, setHide] = useState(false);
  const [description, setDescription] = useState('');

  return (
    <Box className={clsx(classes.tabContent, { [classes.deactiveTab]: !currentTab })} id='seo'>
      <Typography variant='h3' fontWeight={700} className='tab-title'>
        Site Title & Description
      </Typography>
      <MobileMenuItem
        active={currentTab}
        data={settingsMenuList.find((cell) => cell.title === 'SEO')}
        handleClick={handleSetTab}
      />
      <TabContentsBox expanded={currentTab}>
        <Box className={classes.seoBox}>
          <Typography variant='h6' fontWeight={700}>
            Site Title
          </Typography>
          <Typography variant='body1' fontWeight={300}>
            At fyp.bio we want to make your page get as much traffic as possible. Setting up
            meta SEO will let users find you through search engines. Try to keep your title
            under 60 characters and your description under 155 characters
          </Typography>

          <Box className={classes.seoForm}>
            <Box className={clsx('seo-field', 'site-title')}>
              <Typography variant='h6' fontWeight={700}>
                Site Title
              </Typography>
              <Typography variant='body1'>
                Try to keep your title under 60 characters
              </Typography>
              <CustomInput
                onChange={() => { }}
                placeholder='Enter meta title'
                fullWidth
                variant='normal'
                inputProps={{
                  disabled: hide
                }}
              />
            </Box>
            <Box className='seo-field site-description'>
              <Typography variant='h6' fontWeight={700}>
                Site Description
              </Typography>
              <Typography variant='body1'>
                Try to keep your description under 155 characters
              </Typography>
              <CustomInput
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Enter the meta description here ..'
                fullWidth
                variant='normal'
                inputProps={{
                  multiline: true,
                  rows: 4,
                  disabled: hide
                }}
              />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.hideSearchForm}>
              <Typography variant='body1' fontWeight={700}>
                Hide From Search Results
              </Typography>
              <Switch checked={hide} onChange={(e) => setHide(e.target.checked)} className={classes.customSwitch} />
            </Box>
          </Box>
        </Box>
      </TabContentsBox>
    </Box>
  )
}

export default SeoSection;
