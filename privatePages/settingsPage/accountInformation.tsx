import React, { FC, useState, useMemo } from 'react';
import clsx from 'clsx';
import { getList } from 'country-list-with-dial-code-and-flag';
import timezones from 'timezones.json';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';

import CustomInput from 'components/customInput';
import CustomImage from 'components/customImage';
import CustomSelect from 'components/customSelect';
import CustomButton from 'components/customButton';
import MobileMenuItem from './mobileMenuItem';
import TabContentsBox from './tabContentsBox';
import AddAdminDialog from 'components/addAdminDialog';
import EditAdminDialog from 'components/editAdminDialog';
import { PlusIcon } from 'components/svg';

import anchorDownIcon from 'assets/img/anchor-down.svg';
import adminUser from 'assets/img/settings/admin-user.png';
import editIcon from 'assets/img/settings/edit-black.svg';
import trashIcon from 'assets/img/settings/trash-red.svg';

import { settingsMenuList } from 'assets/mockdata/settingsData';

import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  currentTab: boolean;
  handleSetTab: () => void;
}

const AccountInformation: FC<Props> = (props) => {

  const { currentTab, handleSetTab } = props;
  const classes = useStyles();

  const countryList = useMemo(() => getList(), []);
  const [selectedCountry, setSelectedCountry] = useState<any>({
    code: "us",
    dial_code: "+1",
    flag: "🇺🇸",
    name: "United States",
  });
  const [timezone, setTimeZone] = useState('');
  const [phoneEl, setPhoneEl] = useState<null | HTMLElement>(null);
  const [isExplore, setIsExplore] = useState(true);
  const [expandVerifyForm, setExpandVerifyForm] = useState(false);

  const [openAddAdmin, setOpenAddAdmin] = useState(false);
  const [openEditAdmin, setOpenEditAdmin] = useState(false);

  return (
    <Box className={clsx(classes.tabContent, { [classes.deactiveTab]: !currentTab })} id='account-information'>
      <Typography variant='h3' fontWeight={700} className='tab-title'>
        Account Information
      </Typography>

      <MobileMenuItem
        active={currentTab}
        data={settingsMenuList.find((cell) => cell.title === 'Account Information')}
        handleClick={handleSetTab}
      />

      <TabContentsBox expanded={currentTab}>
        <Box className={classes.accountInfoForm}>
          <Grid container columnSpacing={3} rowSpacing={{ xs: '12px', sm: '12px', md: '12px', lg: '24px' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
              <CustomInput
                fullWidth
                labelText='Username'
                onChange={() => { }}
                variant='normal'
                placeholder='Enter Username'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
              <CustomInput
                fullWidth
                labelText='Email'
                onChange={() => { }}
                variant='normal'
                placeholder='Enter Email'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
              <CustomInput
                fullWidth
                labelText='Phone Number'
                onChange={() => { }}
                variant='normal'
                placeholder=''
                className='phone-number-field'
                inputProps={{
                  startAdornment: <InputAdornment position='start'>
                    <Button
                      aria-expanded={Boolean(phoneEl) ? 'true' : undefined}
                      onClick={(e) => setPhoneEl(e.currentTarget)}
                      fullWidth
                    >
                      <Box sx={{ backgroundImage: `url('/flags/${selectedCountry.code}.svg')` }}></Box>
                      {selectedCountry.dial_code}
                      <CustomImage src={anchorDownIcon} alt='' width={10.2} height={5.6} mdWidth={9} mdHeight={5} />
                    </Button>
                    <Menu
                      anchorEl={phoneEl}
                      open={Boolean(phoneEl)}
                      onClose={() => setPhoneEl(null)}
                    >
                      {
                        countryList.map((country) => (
                          <MenuItem key={country.code} onClick={() => {
                            setSelectedCountry({
                              ...country,
                              code: country.code.toLowerCase()
                            });
                            setPhoneEl(null);
                          }}>
                            {country.name}
                          </MenuItem>
                        ))
                      }
                    </Menu>
                  </InputAdornment>,
                  type: 'number'
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
              <CustomInput
                fullWidth
                labelText='Password'
                onChange={() => { }}
                variant='normal'
                placeholder='Enter Password'
                className='password-field'
                inputProps={{
                  endAdornment: <InputAdornment position='end'>
                    <Button className='change-password-btn' variant='text'>Change</Button>
                  </InputAdornment>
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomSelect
                fullWidth
                options={timezones.map((timezone) => ({
                  data: timezone.value,
                  label: timezone.text
                }))}
                placeholder='GMT'
                value={timezone}
                variant='outlined'
                onChange={(e) => setTimeZone(e.target.value as string)}
                labelText='Set timezone for your availability'
                className={classes.timezoneSelect}
              />
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.adminsBox}>
                <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.adminHeader}>
                  <Box>
                    <Typography variant='h6' fontWeight={700}>
                      Admins
                    </Typography>
                    <Typography variant='body1'>
                      Add, edit or remove admins from your profile
                    </Typography>
                  </Box>
                  <Button variant='contained' onClick={() => setOpenAddAdmin(true)}>
                    <PlusIcon color='#fff' width={13} height={13} />
                    <span className='btn-text'>Add Admin</span>
                  </Button>
                </Box>
                <Box>
                  <Grid container rowSpacing={{ xl: '14px' }} className='admin-users'>
                    <Grid item xs={12} className='admin-user-item'>
                      <Box className={clsx(classes.adminUser, 'admin-user')} display='flex' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' alignItems='center' className='admin-user-info'>
                          <CustomImage src={adminUser} alt='' width={42} height={42} mdWidth={26} mdHeight={26} unoptimized />
                          <Box>
                            <Typography variant='h6' fontWeight={400}>
                              Isabella Adams
                            </Typography>
                            <Typography variant='body1'>
                              Admin
                            </Typography>
                          </Box>
                        </Box>
                        <Box className='admin-actions' display='flex'>
                          <CustomImage src={editIcon} alt='' width={21.3} height={21.3} mdWidth={13.75} mdHeight={13.75} onClick={() => setOpenEditAdmin(true)} />
                          <CustomImage src={trashIcon} alt='' width={18} height={21.6} mdWidth={11.6} mdHeight={14} />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} className='admin-user-item'>
                      <Box className={clsx(classes.adminUser, 'admin-user')} display='flex' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' alignItems='center' className='admin-user-info'>
                          <CustomImage src={adminUser} alt='' width={42} height={42} mdWidth={26} mdHeight={26} unoptimized />
                          <Box>
                            <Typography variant='h6' fontWeight={400}>
                              Isabella Adams
                            </Typography>
                            <Typography variant='body1'>
                              Admin
                            </Typography>
                          </Box>
                        </Box>
                        <Box className='admin-actions' display='flex'>
                          <CustomImage src={editIcon} alt='' width={21.3} height={21.3} mdWidth={13.75} mdHeight={13.75} onClick={() => setOpenEditAdmin(true)} />
                          <CustomImage src={trashIcon} alt='' width={18} height={21.6} mdWidth={11.6} mdHeight={14} />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.exploreHeader} display='flex' alignItems='center' justifyContent='space-between'>
                <Box>
                  <Typography variant='h6' fontWeight={700}>
                    Explore
                  </Typography>
                  <Typography variant='body1'>
                    Enable or disable explore feature from your profile
                  </Typography>
                </Box>
                <Switch checked={isExplore} onChange={(e) => setIsExplore(e.target.checked)} className={classes.customSwitch} />
              </Box>

              <Box className={classes.verifyBox}>
                <Box display='flex' justifyContent='space-between'>
                  <Box className='verify-text'>
                    <Typography variant='h6' fontWeight={700}>
                      Not Verified
                    </Typography>
                    <Typography variant='body1'>
                      Large influencers can apply for verification and receive a blue checkmark on your profile.
                    </Typography>
                  </Box>
                  <CustomButton variant='contained' boxShadow='none' 
                    onClick={() => setExpandVerifyForm(true)}
                    className='verify-btn'
                  >
                    Apply for Verification
                  </CustomButton>
                </Box>
                <Collapse in={expandVerifyForm} timeout="auto" unmountOnExit>
                  <Box>
                    <Box mt={2}>
                      <CustomInput
                        fullWidth
                        labelText='Largest Social Media'
                        onChange={() => { }}
                        variant='normal'
                        placeholder='Enter Largest Social Media'
                      />
                    </Box>
                    <Box mt={2}>
                      <CustomInput
                        fullWidth
                        labelText='Reason for Verification'
                        onChange={() => { }}
                        variant='normal'
                        placeholder='Enter Reason for Verification'
                        inputProps={{
                          multiline: true,
                          rows: 3
                        }}
                      />
                    </Box>
                    <Box mt={2}>
                      <CustomButton background='blueGradient' fullWidth onClick={() => setExpandVerifyForm(false)}>
                        Sent Request
                      </CustomButton>
                    </Box>
                  </Box>
                </Collapse>
              </Box>
              <CustomButton variant='contained' boxShadow='none' className={classes.deleteAccountBtn}>
                Delete your Account
              </CustomButton>
            </Grid>
          </Grid>
        </Box>
      </TabContentsBox>

      <AddAdminDialog
        handleClose={() => setOpenAddAdmin(false)}
        open={openAddAdmin}
      />
      <EditAdminDialog
        handleClose={() => setOpenEditAdmin(false)}
        open={openEditAdmin}
      />
    </Box>
  )
}

export default AccountInformation;
