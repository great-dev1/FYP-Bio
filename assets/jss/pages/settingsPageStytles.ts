import { Theme } from "@mui/system";

const settingsPageStytles = ((theme: Theme) => ({
  settingsPage: {
    [theme.breakpoints.down('lg')]: {
      '& .contents-inner': {
        position: 'sticky',
        top: '0',
        paddingTop: '8px'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .contents-inner': {
        backgroundColor: theme.palette.white.light,
        paddingTop: '5px !important'
      }
    }
  },
  wrapper: {
    [theme.breakpoints.down('lg')]: {
      flexWrap: 'wrap' as const,
      position: 'sticky',
      top: '0'
    }   
  },
  mobileDivice: {
    width: '27.7%',
    '& .mobile-device-footer': {
      marginTop: '205px'
    },
    [theme.breakpoints.down('xl')]: {
      display: 'none'
    }
  },
  mobileBtns: {
    marginTop: '35px',
    '& .MuiButtonBase-root': {
      fontSize: '16px',
      lineHeight: '24px',
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '16.5px',
      paddingBottom: '16.5px'
    },
    '& .undo-btn': {
      width: '27%',
      backgroundColor: theme.palette.common.black,
      '& .btn-label': {
        marginLeft: '15px'
      }
    },
    '& .save-as-draft-btn': {
      width: '37.8%'
    },
    '& .redo-btn': {
      width: '27%',
      backgroundColor: theme.palette.common.black,
      '& .btn-label': {
        marginRight: '15px'
      }
    }
  },
  menuWrapper: {
    width: '21.27%',
    background: theme.palette.white.light,
    borderRadius: '16px',
    paddingTop: '30px',
    '& > h6': {
      fontSize: '20px',
      lineHeight: '28px',
      color: theme.palette.common.black,
      marginLeft: '32px',
      marginBottom: '33.5px'
    },
    [theme.breakpoints.down('xl')]: {
      width: '300px'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none' as const
    }
  },
  menuItem: {
    position: 'relative' as const,
    width: '100%',
    display: 'flex' as const,
    alignItems: 'center',
    textTransform: 'none' as const,
    color: theme.palette.common.black,
    cursor: 'pointer',
    fontSize: '17px',
    lineHeight: '24px',
    paddingLeft: '90.2px',
    boxSizing: 'border-box' as const,
    height: '62px',
    paddingRight: '16px',
    '& > span': {
      position: 'absolute !important',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '32px'
    },
    '&:hover': {
      background: 'linear-gradient(to right, rgba(245, 236, 248, 0.32), rgba(219, 219, 255, 0.32))'
    }
  },
  activeMenu: {
    background: 'linear-gradient(to right, rgba(245, 236, 248, 0.32), rgba(219, 219, 255, 0.32))'
  },
  contents: {
    background: theme.palette.white.light,
    borderRadius: '16px',
    width: '47.4%',
    [theme.breakpoints.down('xl')]: {
      width: 'calc(100% - 300px - 24px)'
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    }
  },
  tabContent: {
    padding: '30px 40px',
    '& .tab-title': {
      fontSize: '20px',
      lineHeight: '28px',
      color: theme.palette.common.black
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0',
      marginBottom: '25px',
      '& .tab-title': {
        display: 'none'
      }
    }
  },
  deactiveTab: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  accountInfoForm: {
    marginTop: '34px',
    '& .form-label': {
      fontSize: '16px',
      fontWeight: '700',
      color: '#474461',
      lineHeight: '24px',
      marginBottom: '11px'
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.white.light,
      borderRadius: '5px',
      color: theme.palette.common.black
    },
    '& .MuiInputBase-input': {
      padding: '18.5px 30px',
      color: theme.palette.common.black
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E3E3E3'
    },
    '& .password-field': {
      '& .change-password-btn': {
        textTransform: 'none',
        fontSize: '15px',
        fontWeight: '700',
        color: '#9F83EB',
        lineHeight: '20px',
        padding: '0',
        marginRight: '22px'
      }
    },
    '& .phone-number-field': {
      '& .MuiInputAdornment-root': {
        position: 'absolute',
        width: '110px',
        marginRight: '0',
        left: '30px',
        '& .MuiButtonBase-root': {
          padding: '0',
          paddingRight: '17px',
          fontSize: '16px',
          lineHeight: '24px',
          color: theme.palette.common.black,
          justifyContent: 'unset',
          borderRight: '1px solid #F6F6F6',
          '& > .MuiBox-root': {
            marginRight: '12.8px',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          },
          '& > span:nth-child(2)': {
            marginLeft: 'auto !important'
          }
        }
      },
      '& .MuiInputBase-input': {
        paddingLeft: '160px'
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '24px',
      '& .form-label': {
        fontWeight: '700',
        fontSize: '15px',
        lineHeight: '20px'
      },
      '& .password-field': {
        '& .change-password-btn': {
          fontSize: '15px !important',
          lineHeight: '17px !important',
          marginRight: '20px !important'
        }
      },
      '& .phone-number-field': {
        '& .MuiInputAdornment-root': {
          width: '105px !important',
          left: '20px !important',
          '& .MuiButtonBase-root': {
            paddingRight: '15px !important',
            fontSize: '15px !important',
            lineHeight: '20px !important',
            '& > .MuiBox-root': {
              marginRight: '14px !important',
              width: '25px !important',
              height: '25px !important'
            }
          }
        },
        '& .MuiInputBase-input': {
          paddingLeft: '150px !important'
        }
      },
    }
  },
  adminsBox: {
    backgroundColor: theme.palette.grey[50],
    borderRadius: '11px',
    padding: '20px 27px 24px 33px',
    [theme.breakpoints.down('md')]: {
      padding: '11px 16px 13px',
      marginTop: '9px',
      '& .admin-users .admin-user-item:last-child .admin-user': {
        marginBottom: '0 !important'
      }
    }
  },
  adminHeader: {
    paddingBottom: '23px',
    borderBottom: '1px solid rgba(234, 234, 234, 0.57)',
    marginBottom: '20px',
    '& h6': {
      fontSize: '22px',
      lineHeight: '30px',
      color: '#474461',
      marginBottom: '7.5px'
    },
    '& p': {
      fontSize: '18px',
      lineHeight: '25px',
      color: 'rgba(0, 0, 0, 0.73)'
    },
    '& .MuiButtonBase-root': {
      fontSize: '15px',
      lineHeight: '21px',
      height: '50px',
      padding: '0',
      width: '156px',
      boxShadow: 'none',
      borderRadius: '46px',
      textTransform: 'none',
      background: 'linear-gradient(to right, #BB14E2, #161FE4)',
      '&:hover': {
        opacity: '0.7',
        transition: 'opacity .3s'
      },
      '& path': {
        strokeWidth: '2px'
      },
      '& .plus-icon': {
        marginRight: '16px'
      }
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '16px',
      marginBottom: '12px',
      '& h6': {
        fontSize: '15px',
        lineHeight: '20px',
        marginBottom: '0px'
      },
      '& p': {
        display: 'none'
      },
      '& .MuiButtonBase-root': {
        width: '30px',
        height: '30px',
        minWidth: 'unset',
        '& .plus-icon': {
          marginRight: '0 !important',
          width: '9.25px',
          height: '9.25px'
        },
        '& .btn-text': {
          display: 'none'
        }
      }
    }
  },
  adminUser: {
    marginBottom: '14px',
    '& .admin-user-info': {
      '& > span': {
        marginRight: '24px !important'
      },
      '& h6': {
        fontSize: '20px',
        lineHeight: '28px',
        color: theme.palette.common.black
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '23px',
        color: 'rgba(0, 0, 0, 0.41)'
      }
    },
    '& .admin-actions': {
      '& > span:first-child': {
        marginRight: '30px !important',
      },
      '& > span': {
        cursor: 'pointer'
      }
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '10px',
      '& .admin-user-info': {
        '& > span': {
          marginRight: '13px !important'
        },
        '& h6': {
          fontSize: '15px !important',
          lineHeight: '20px !important'
        },
        '& p': {
          fontSize: '15px !important',
          lineHeight: '19px !important'
        }
      },
      '& div.admin-actions': {
        '& > span:first-child': {
          marginRight: '20px !important',
        }
      },
    }
  },
  exploreHeader: {
    marginBottom: '17px',
    '& h6': {
      fontSize: '22px',
      lineHeight: '30px',
      color: '#474461',
      marginBottom: '3.5px'
    },
    '& p': {
      fontSize: '18px',
      lineHeight: '25px',
      color: 'rgba(0, 0, 0, 0.73)'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
      '& h6': {
        fontSize: '15px',
        lineHeight: '20px',
        marginBottom: '0px'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '20px',
      }
    }
  },
  customSwitch: {
    '&.MuiSwitch-root': {
      padding: '0',
      height: '46px',
      boxSizing: 'border-box',
      borderRadius: '27px',
      width: '73px'
    },
    '& .MuiSwitch-thumb': {
      width: '32px',
      height: '28.6px',
      background: theme.palette.common.black,
      borderRadius: '46px'
    },
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: '8.7px 9.9px',
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(21.2px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: 'rgba(206, 206, 206, 0.13)',
          opacity: 1,
          border: 0,
        },
        '& .MuiSwitch-thumb': {
          background: 'linear-gradient(right, #161FE4, #BB14E2)',
        },
      }
    },
    '& .MuiSwitch-track': {
      backgroundColor: 'rgba(206, 206, 206, 0.13)',
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiSwitch-root': {
        height: '32px',
        width: '52px'
      },
      '& .MuiSwitch-thumb': {
        width: '22.5px',
        height: '20px',
      },
      '& .MuiSwitch-switchBase': {
        margin: '6px 7px',
        '&.Mui-checked': {
          transform: 'translateX(15.5px) !important'
        }
      }
    }
  },
  verifyBox: {
    marginBottom: '24px',
    padding: '14px 19px 14px 26px',
    borderRadius: '10px',
    backgroundColor: 'rgba(84, 170, 245, 0.02)',
    '& .verify-text': {
      width: 'calc(100% - 195px - 58px)'
    },
    '& h6': {
      fontSize: '16px',
      color: theme.palette.blue.main,
      lineHeight: '24px',
      marginBottom: '3px'
    },
    '& p': {
      fontSize: '15px',
      lineHeight: '21px',
      color: theme.palette.blue.main
    },
    '& .verify-btn.MuiButtonBase-root': {
      fontSize: '15px',
      lineHeight: '18px',
      width: '195px',
      padding: '0',
      fontWeight: '700',
      backgroundColor: theme.palette.blue.main
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
      padding: '14px 19px 14px 18px',
      '& .verify-btn': {
        height: '47px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& > .MuiBox-root': {
        flexWrap: 'wrap'
      },
      '& .verify-text': {
        width: '100%'
      },
      '& .verify-btn': {
        width: '100% !important',
        marginTop: '18px'
      }
    }
  },
  deleteAccountBtn: {
    '&.MuiButtonBase-root': {
      backgroundColor: '#DB9898',
      fontSize: '16px',
      lineHeight: '23px',
      fontWeight: '700',
      padding: '17.5px 27.6px 19.5px'
    },
    [theme.breakpoints.down('xl')]: {
      '&.MuiButtonBase-root': {
        width: '100%'
      }
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiButtonBase-root': {
        fontSize: '15px',
        lineHeight: '20px',
        padding: '0',
        height: '46px'
      }
    }
  },
  menuDropdown: {
    '& .menu-select': {
      height: '0px',
      padding: '0 !important',
      minHeight: 'unset',
      '& .MuiSvgIcon-root': {
        display: 'none'
      },
      '& .MuiSelect-select': {
        padding: '0',
        minHeight: '0',
        height: '0'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        display: 'none'
      }
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none'      
    },
    [theme.breakpoints.down('lg')]: {
      position: 'sticky',
      top: '0',
      background: '#fff',
      zIndex: "9",
      paddingTop: '20px'
    }
  },
  menuDropdownBtn: {
    cursor: 'pointer' as const,
    padding: '9px 20px 9px 10px',
    border: '1px solid #E3E3E3',
    borderRadius: '5px',
    '& .menu-icon': {
      width: '30px',
      height: '30px',
      borderRadius: '3px',
      backgroundColor: '#9F83EB',
      marginRight: '18px'
    },
    '& .MuiTypography-root': {
      fontSize: '15px',
      lineHeiht: '20px',
      color: theme.palette.common.black,
      marginRight: 'auto'
    }
  },
  mobileMenuItem: {
    backgroundColor: '#565F72',
    height: '53px',
    borderRadius: '9px',
    color: theme.palette.white.light,
    fontSize: '15px',
    lineHeight: '21px',
    paddingLeft: '66.5px',
    paddingRight: '16px',
    // cursor: 'pointer' as const,
    transition: 'all .2s',
    '& .MuiIconButton-root': {
      width: '30px',
      height: '30px',
      backgroundColor: '#838EA3',
      padding: '0'
    },
    '& > span': {
      position: 'absolute !important',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '27px'
    },
    // '&:hover': {
    //   boxShadow: 'rgb(22 31 228 / 40%) 0px 0px 15px 0px',
    //   transition: 'all .2s'
    // },
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }   
  },
  activeMobileMenu: {
    color: theme.palette.common.black,
    background: 'linear-gradient(to right, rgba(245, 236, 248, 0.32), rgba(219, 219, 255, 0.32))',
    '& .MuiIconButton-root': {
      backgroundColor: '#9F83EB'
    },
  },
  urlManagementContents: {
    marginTop: '38.5px',
    [theme.breakpoints.down('md')]: {
      marginTop: '24px'
    }
  },
  preferredLinkBox: {
    padding: '20px 33px',
    borderRadius: '11px',
    backgroundColor: '#FCFCFC',
    '& h6': {
      fontSize: '22px',
      fontWeight: '700',
      color: '#474461',
      lineHeight: '33px',
      marginBottom: '7.5px'
    },
    '& > p': {
      fontSize: '18px',
      lineHeight: '25px',
      color: 'rgba(0, 0, 0, 0.73)',
      marginBottom: '23px'
    },
    '& .preferred-link-cell:last-child': {
      marginBottom: '0'
    },
    [theme.breakpoints.down('md')]: {
      padding: '13px 18px',
      '& h6': {
        fontSize: '15px',
        lineHeight: '20px',
        marginBottom: '14px'
      },
      '& > p': {
        display: 'none'
      },
    }
  },
  preferredLinks: {
    paddingTop: '20px',
    borderTop: '1px solid rgba(234, 234, 234, 0.57)',
    [theme.breakpoints.down('md')]: {
      paddingTop: '16px'
    }
  },
  faviconBox: {
    marginTop: '30px',
    '& > h6': {
      fontSize: '22px',
      fontWeight: '700',
      color: '#474461',
      lineHeight: '33px',
      marginBottom: '7.5px'
    },
    '& > p': {
      fontSize: '18px',
      lineHeight: '25px',
      color: 'rgba(0, 0, 0, 0.73)',
      marginBottom: '30px'
    },
    '& .file-dropzone': {
      maxWidth: '300px',
      padding: '28px 10px',
      border: '1px dashed #EFEFEF',
      borderRadius: '18px',
      backgroundColor: '#FBFBFB',
      '& h6': {
        fontSize: '16px',
        color: theme.palette.common.black,
        lineHeight: '24px',
        marginBottom: '5px',
        marginTop: '15px'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '19px',
        color: 'rgba(0, 0, 0, 0.8)',
        marginBottom: '5px'
      },
      '& p:last-child': {
        marginBottom: '0',
        color: '#161FE4'
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '20px',
      '& > h6': {
        fontSize: '15px',
        lineHeight: '20px',
        marginBottom: '0px'
      },
      '& > p': {
        fontSize: '15px',
        lineHeight: '19px',
        marginBottom: '20px'
      },
      '& .file-dropzone': {
        maxWidth: 'unset',
        width: '100%',
        padding: '28px 10px 24px',
        borderRadius: '14px',
        '& p': {
          fontSize: '15px',
          lineHeight: '20px',
          marginBottom: '4px'
        }
      }
    }
  },
  preferredLinkCell: {
    marginBottom: '20px',
    '& .radio-label': {
      color: theme.palette.common.black,
      marginLeft: '24px',
      '& p': {
        fontSize: '20px',
        lineHeight: '28px',
      },
      '& > span': {
        marginLeft: '15px !important',
        cursor: 'pointer'
      },
      '& .save-icon': {
        width: '20px',
        color: '#9F83EB',
        marginLeft: '15px',
        cursor: 'pointer'
      },

    },
    '& .MuiInputBase-input': {
      padding: '0',
      fontSize: '20px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '14px',
      '& .radio-label': {
        marginLeft: '14px',
        flex: '1',
        '& p': {
          fontSize: '15px !important',
          lineHeight: '20px !important',
        },
        '& p + span': {
          marginLeft: 'auto !important',
        },
        '& .save-icon': {
          marginTop: 'auto',
          width: '16px !important',
          marginLeft: 'auto !important',
          height: '16px !important'
        }
      },
      '& .MuiInputBase-input': {
        fontSize: '15px !important',
        lineHeight: '20px !important',
        height: '20px'
      },
    }
  },
  paymentMethodCard: {
    padding: '18px 22px 18px 18px',
    border: '1px solid #EAEAEA',
    borderRadius: '12px',
    '& .payment-method-icon': {
      width: '81px',
      height: '81px',
      borderRadius: '11px',
      marginRight: '27px',
      backgroundColor: '#FCFCFC'
    },
    '& h6': {
      fontSize: '18px',
      lineHeight: '25px',
      marginBottom: '5px',
      color: '#474461'
    },
    '& p': {
      fontSize: '15px',
      lineHeight: '20px',
      color: theme.palette.common.black
    },
    '& .MuiButtonBase-root': {
      fontSize: '16px',
      lineHeight: '23px',
      width: '117px',
      height: '58px',
      marginLeft: '32px',
      paddingTop: '0',
      paddingBottom: '0'
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap' as const,
      padding: '13px',
      alignItems: 'flex-start' as const,
      '& .payment-method-icon': {
        width: '54px',
        height: '54px',
        marginRight: '21px'
      },
      '& h6': {
        fontSize: '17px',
        lineHeight: '25px',
        marginBottom: '0px',
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '22px',
      },
      '& .MuiButtonBase-root': {
        fontSize: '15px',
        lineHeight: '20px',
        width: '100%',
        height: '40px',
        marginLeft: '0',
        marginTop: '10px'
      },
    }
  },
  paymentMethods: {
    marginTop: '30px',
    '& > p': {
      fontSize: '17px',
      lineHeight: '25px',
      marginBottom: '40px'
    },
    '& .currency-select': {
      '& .form-label': {
        fontWeight: 'bold'
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '24px',
      '& > p': {
        fontSize: '15px',
        marginBottom: '25px'
      }
    }
  },
  integrations: {
    marginTop: '9px',
    '& > p': {
      fontSize: '18px',
      lineHeight: '25px',
      color: 'rgba(0, 0, 0, 0.73)',
      marginBottom: '55.6px'
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '24px',
      '& > p': {
        display: 'none'
      }
    }
  },
  nsfwWarning: {
    marginTop: '26.5px',
    [theme.breakpoints.down('md')]: {
      marginTop: '23px'
    }
  },
  nsfwSensitiveContent: {
    padding: '18px 25px 18px 28px',
    border: '1px solid #EAEAEA',
    borderRadius: '12px',
    marginBottom: '26px',
    '& h6': {
      marginBottom: '4px',
      fontSize: '19px',
      lineHeight: '27px',
      color: '#474461'
    },
    '& p': {
      fontSize: '16px',
      lineHeight: '25px',
      color: 'rgba(0, 0, 0, 0.73)'
    },
    '& > .MuiBox-root': {
      width: 'calc((100% - 74px) * 0.88)'
    },
    [theme.breakpoints.down('md')]: {
      padding: '13.5px 12px 14.5px 21px',
      marginBottom: '22px',
      '& h6': {
        marginBottom: '0px',
        fontSize: '15px',
        lineHeight: '21px',
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '20px',
      },
      '& > .MuiBox-root': {
        width: 'calc(100% - 20px - 58px)'
      },
    }
  },
  nsfwOptions: {
    '& > .MuiTypography-root': {
      fontSize: '17px',
      lineHeight: '24px',
      color: '#474461',
      marginBottom: '32px'
    },
    '& .MuiFormControlLabel-root': {
      marginLeft: '0',
      marginBottom: '22.5px',
      '& .MuiFormControlLabel-label': {
        marginLeft: '23.5px',
        fontSize: '18px',
        lineHeight: '25px',
        color: theme.palette.common.black
      }
    },
    '& .MuiFormControlLabel-root:last-child': {
      marginBottom: '0'
    },
    [theme.breakpoints.down('md')]: {
      '& > .MuiTypography-root': {
        fontSize: '16px',
        lineHeight: '23px',
        marginBottom: '12px'
      },
      '& .MuiFormControlLabel-root': {
        marginBottom: '20px',
        '& .MuiFormControlLabel-label': {
          marginLeft: '20px !important',
          fontSize: '15px !important',
          lineHeight: '21px !important'
        }
      }
    }
  },
  seoBox: {
    marginTop: '9px',
    '& > p': {
      fontSize: '18px',
      lineHeight: '30px',
      color: 'rgba(0, 0, 0, 0.73)',
      marginBottom: '20px'
    },
    [theme.breakpoints.up('lg')]: {
      '& > h6': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('lg')]: {
      '& > h6': {
        fontSize: '20px',
        lineHeight: '28px',
        color: '#474461',
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '22px',
      '& > h6': {
        fontSize: '15px',
        lineHeight: '20px',
        marginBottom: '2px'
      },
      '& > p': {
        fontSize: '15px',
        lineHeight: '25px',
        marginBottom: '15px'
      }
    }
  },
  seoForm: {
    paddingTop: '20px',
    borderTop: '1px solid #F1F1F1',
    '& .seo-field': {
      marginBottom: '24px',
      '& h6': {
        fontSize: '16px',
        lineHeight: '24px',
        color: '#474461',
        marginBottom: '8px'
      },
      '& p': {
        fontSize: '16px',
        color: 'rgba(0, 0, 0, 0.4)',
        lineHeight: '24px',
        marginBottom: '24px'
      },
      '& .MuiInputBase-root': {
        borderRadius: '5px'
      },
      '& .MuiInputBase-input': {
        paddingLeft: '30px',
        paddingRight: '30px'
      }
    },
    // '& .site-title': {
    //   maxWidth: '440px'
    // },
    '& .site-description textarea': {
      height: '165px'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '15px',
      '& .seo-field': {
        marginBottom: '15px',
        '& h6': {
          fontSize: '15px !important',
          lineHeight: '20px !important',
          marginBottom: '2px !important'
        },
        '& p': {
          fontSize: '15px !important',
          lineHeight: '20px !important',
          marginBottom: '16px !important'
        },
        '& .MuiInputBase-input': {
          paddingLeft: '20px',
          paddingRight: '20px'
        }
      },
      '& .site-title': {
        maxWidth: 'unset'
      },
      '& .site-description textarea': {
        height: '130px !important'
      }
    }
  },
  hideSearchForm: {
    padding: '18px 37.5px 18px 28px',
    backgroundColor: '#FEFEFE',
    borderRadius: '15px',
    '& p': {
      fontSize: '18px',
      lineHeight: '27px',
      color: '#474461'
    },
    '& .MuiSwitch-root': {
      height: '43px',
      width: '68px'
    },
    '& .MuiSwitch-thumb': {
      width: '26px',
      height: '26px',
      borderRadius: '26px'
    },
    '& .MuiSwitch-switchBase': {
      margin: '8.5px 9px',
      '&.Mui-checked': {
        transform: 'translateX(24px)'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      backgroundColor: 'transparent',
      borderRadius: '15px',
      '& p': {
        fontSize: '15px',
        lineHeight: '20px',
      },
      '& .MuiSwitch-root': {
        height: '36px',
        width: '58px'
      },
      '& .MuiSwitch-thumb': {
        width: '25px !important',
        height: '22px !important',
      },
      '& .MuiSwitch-switchBase': {
        margin: '7px 8px !important',
        '&.Mui-checked': {
          transform: 'translateX(10px)'
        }
      }
    }
  },
  analyticsSection: {
    marginTop: '17px',
    borderTop: '1px solid #F1F1F1',
    paddingTop: '28px',
    [theme.breakpoints.down('lg')]: {
      borderTop: '0',
      marginTop: '24px',
      paddingTop: '0'
    }
  },
  analyticsField: {
    '& h6': {
      fontSize: '18px',
      lineHeight: '25px',
      color: '#474461',
      marginBottom: '8px'
    },
    '& p': {
      fontSize: '16px',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.4)',
      marginBottom: '25px'
    },
    '& .MuiInputBase-root': {
      borderRadius: '5px'
    },
    '& .MuiInputBase-input': {
      paddingLeft: '30px',
      paddingRight: '30px'
    },
    '&.google-analytics': {
      '& .MuiInputBase-root': {
        backgroundColor: '#FBFBFB'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        display: 'none'
      },
      '& .MuiInputAdornment-root': {
        position: 'absolute',
        top: '50%',
        transform: '-50%',
        left: '30px',
        '& p': {
          marginBottom: '0 !important',
          color: theme.palette.common.black
        }
      },
      '& .MuiInputBase-input': {
        paddingLeft: '58px'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& h6': {
        fontSize: '15px',
        lineHeight: '20px',
        marginBottom: '4px'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '20px',
        marginBottom: '16px'
      },
      '&.google-analytics': {
        '& .MuiInputAdornment-root': {
          left: '20px !important'
        },
        '& .MuiInputBase-input': {
          paddingLeft: '44px !important'
        }
      },
    }
  },
  utmParameterLabels: {
    '& > .MuiBox-root': {
      flex: '1' as const,
      marginRight: '60px',
      '& p': {
        marginBottom: '0'
      }
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start' as const,
      '& > .MuiBox-root': {
        marginRight: '10px !important',
      },
    }
  },
  utmFields: {
    '& .form-label': {
      color: '#474461',
      marginBottom: '12px'
    },
    '& .MuiInputBase-input': {
      paddingLeft: '30px',
      paddingRight: '30px'
    },
    '& .MuiInputBase-root': {
      borderRadius: '5px'
    }
  },
  upgradeAccountSection: {
    marginTop: '17px',
    borderTop: '1px solid #F1F1F1',
    paddingTop: '38.5px'
  },
  upgradeCard: {
    padding: '25px 20px 28px',
    borderRadius: '16px',
    backgroundColor: 'rgba(251, 251, 251, 0.5)',
    height: '100%',
    '& .upgrade-card-title': {
      color: theme.palette.common.black,
      marginBottom: '20px',
      '& h6': {
        fontSize: '22px',
        lineHeight: '30px'
      },
      '& p': {
        fontSize: '20px',
        lineHeight: '28px'
      }
    },
    '& .upgrade-card-top-note': {
      fontSize: '15px',
      color: 'rgba(0, 0, 0, 0.4)',
      lineHeight: '25px',
      marginBottom: '20px'
    },
    '& .upgrade-card-detail-box': {
      borderTop: '1px solid rgba(112, 112, 112, 0.07)',
      paddingTop: '20px',
      marginBottom: '28px',
      '& h6': {
        fontSize: '15px',
        lineHeight: '25px',
        color: theme.palette.common.black,
        marginBottom: '20px'
      },
      '& .upgrade-detail': {
        marginBottom: '13px',
        '& .upgrade-detail-icon': {
          width: '23px',
          height: '23px',
          borderRadius: '50%',
          backgroundColor: 'rgba(22, 31, 228, 0.02)'
        },
        '& > p': {
          fontSize: '15px',
          lineHeight: '20px',
          color: '#707070',
          marginLeft: '18px',
          marginRight: '10px'
        },
        '& .MuiIconButton-root': {
          padding: '0',
          marginLeft: "auto"
        }
      },
      '& .upgrade-detail:last-child': {
        marginBottom: '0'
      }
    },
    '& .upgrade-option-btn': {
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '700',
      height: '60px',
      marginTop: 'auto'
    },
    [theme.breakpoints.down('md')]: {
      padding: '25px 20px 26.5px',
      '& .upgrade-card-title': {
        '& h6': {
          fontSize: '20px',
          lineHeight: '28px'
        },
        '& p': {
          fontSize: '18px',
          lineHeight: '25px'
        }
      },
      '& .upgrade-card-detail-box': {
        marginBottom: '30px',
        '& h6': {
          fontSize: '15px',
          lineHeight: '22px',
        },
        '& .upgrade-detail': {
          '& .upgrade-detail-icon': {
            width: '22px',
            height: '22px',
          },
          '& p': {
            fontSize: '15px',
          }
        }
      },
      '& .upgrade-option-btn': {
        fontSize: '15px',
        height: '58px',
      }
    }
  },
  activeUpgrade: {
    backgroundColor: 'rgba(248, 248, 253, 0.5)',
    '& .upgrade-option-btn': {
      backgroundColor: 'rgba(243, 243, 243, 0.48)',
      color: '#161FE4',
      border: '1px solid #D0D2FC'
    }
  },
  upgradeActiveMark: {
    '&.MuiTypography-root': {
      marginLeft: '19.5px',
      marginRight: 'auto',
      fontSize: '15px',
      lineHeight: '21px',
      padding: '5.5px 18px',
      borderRadius: '21px',
      backgroundColor: 'rgba(240, 240, 252, 0.5)',
      textTransform: 'none'
    }
  },
  timezoneSelect: {
    [theme.breakpoints.down('md')]: {
      '& .select-anchor': {
        width: '12.6px !important',
        marginRight: '20px'
      }
    }
  },
  pcContents: {
    left: '23.01%',
    height: '100%',
    overflowY: 'auto' as const
  }
}));

export default settingsPageStytles;
