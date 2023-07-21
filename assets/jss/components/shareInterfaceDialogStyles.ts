import { Theme } from "@mui/system";
import polygonImg from 'assets/img/share-ui/polygon.svg';

const shareInterfaceDialogStyles = ((theme: Theme) => ({
  popoverWrapper: {
    '& .MuiPopover-paper': {
      width: '415px',
      boxShadow: 'none',
      paddingTop: '33px',
      background: 'transparent',
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: '22px',
        height: '15px',
        backgroundImage: `url(${polygonImg.src})`,
        backgroundSize: '100% 100%',
        right: '55px',
        top: '20px'
      },
      '& .popoverContents': {
        background: '#fff',
        borderRadius: '30px',
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  dialogWrapper: {
    '& .MuiDialog-container': {
      alignItems: 'end'
    },
    '& .MuiDialog-paper': {
      margin: '32px 0 0',
      width: '100%',
      boxShadow: 'none',
      borderRadius: '13px 13px 0 0',
      maxWidth: 'unset'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  shareContents: {
    padding: '23px 30px 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '21px 25px 24px'
    }
  },
  titleBox: {
    borderBottom: '1px solid #EAEAEA',
    paddingBottom: '22.5px',
    '& .close-btn': {
      background: '#FAFAFA',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '-11px',
      width: '30px',
      height: '30px'
    },
    '& .prev-btn': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '28.6px',
      left: '-10.9px'
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '18.5px',
      '& h1': {
        fontSize: '18px',
        lineHeight: '25px'
      }
    }
  },
  startView: {
    paddingTop: '30.8px',
    '& .start-line': {
      cursor: 'pointer',
      paddingLeft: '56.5px',
      '& .pre-icon': {
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)'
      },
      '& .next-btn': {
        position: 'absolute',
        padding: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '-5.41px',
        width: '20px',
        height: '20px',
        background: 'transparent !important'
      },
      '&:hover': {
        '& .next-btn': {
          right: '-10px',
          transition: 'all .3s'
        }
      }
    },
    '& .copy-link-box': {
      marginTop: '25.5px'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '25px',
      '& .start-line': {
        paddingLeft: '45.3px',
        '& p': {
          fontSize: '15px',
          lineHeight: '21px'
        }
      }
    }
  },
  copyLink: {
    padding: '12px 20.9px 12px 19.6px',
    border: '1px solid #D5D5D5',
    borderRadius: '46px',
    '& p': {
      marginLeft: '20px'
    },
    '& .copy-icon': {
      display: 'flex',
      marginLeft: 'auto',
      cursor: 'pointer',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '16.8px',
      '&:hover': {
        right: '10px',
        transition: 'all .3s',
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: '16px 16.8x 16px 15.8px',
      '& p': {
        fontSize: '14px',
        lineHeight: '20px'
      },
      '& .copy-icon': {
        right: '16.8px',
        '&:hover': {
          right: '10px',
          transition: 'all .3s',
        }
      },
      '& .logo': {
        width: '26px',
        height: '21px'
      }
    }
  },
  socialMediaView: {
    paddingTop: '30.8px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '22.5px'
    }
  },
  socialLink: {
    paddingLeft: '49.6px',
    cursor: 'pointer' as const,
    '& .social-icon': {
      width: '21px',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '0'
    },
    '& .next-btn': {
      position: 'absolute',
      padding: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '-5.41px',
      width: '20px',
      height: '20px',
      background: 'transparent !important'     
    },
    '& p': {
      position: 'relative'
    },
    '&:hover': {
      '& p': {
        fontWeight: '500'
      },
      '&::before': {
        content: `''`,
        position: 'absolute',
        width: 'calc(100% + 30px)',
        height: 'calc(100% + 30px)',
        backgroundColor: '#f3f3f1',
        left: '-15px',
        top: '-15px',
        borderRadius: '8px'
      },
      '& .next-btn': {
        right: '-10px',
        transition: 'all .3s'
      }
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '37.6px',
      '& p': {
        fontSize: '14px',
        lineHeight: '20px'
      }
    }
  },
  addBioView: {
    paddingTop: '30.8px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '22.5px'
    }
  },
  qrCodeView: {
    '& .header': {
      paddingBottom: '0',
      borderBottom: '0',
      marginBottom: '16px',
      '& .title': {
        marginBottom: '22px'
      }
    },
    '& .qr-code': {
      padding: '22px'
    },
    '& .link-btn': {
      marginTop: '4px',
      marginBottom: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '15px',
      lineHeight: '21px',
      color: '#000',
      '& svg': {
        marginRight: '15.1px'
      }
    },
    '& .option-item': {
      '& .MuiSwitch-root': {
        width: '55px',
        height: '34px',
        '& .MuiSwitch-thumb': {
          width: '23px',
          height: '23px',
          boxShadow: 'none'
        },
        '& .Mui-checked+.MuiSwitch-track': {
          backgroundColor: '#F9F9F9'
        },
        '& .MuiSwitch-switchBase': {
          margin: '5.5px 6px'
        },
        '& .Mui-checked': {
          transform: 'translateX(20px)'
        }
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& .header': {
        marginBottom: '11.2px !important',
        '& .title': {
          marginBottom: '14.5px !important'
        }
      },
      '& .qr-code': {
        padding: '15px'
      },
      '& .link-btn': {
        marginTop: '7px',
        marginBottom: '32.8px'
      },
      '& .option-item': {
        '& h6': {
          fontSize: '14px',
          lineHeight: '20px'
        },
        '& p': {
          fontSize: '13px',
          lineHeight: '19px'
        }       
      }
    }
  },
  addContentsView: {
    '& .title-box': {
      borderBottom: '0',
      paddingBottom: '0',
      marginBottom: '24px'
    },
    '& .checkbox-line': {
      marginBottom: '17px',
      '& .MuiCheckbox-root': {
        padding: '0',
        marginRight: '17px'
      },
      '& .checkbox-icon': {
        width: '23px',
        height: '23px'
      }
    },
    '& .img-content': {
      margin: '35px 0 20px'
    },
    '& .social-line': {
      marginTop: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      '& .title-box': {       
        marginBottom: '15px'
      },
      '& .checkbox-line': {
        marginBottom: '13px',
        '& .checkbox-icon': {
          width: '26px !important',
          height: '26px !important'
        },
        '& p': {
          fontSize: '13px',
          lineHeight: '19px'
        }
      },
      '& .img-content': {
        margin: '32px 0 33px',
        height: '215px'
      },
      '& .social-line': {
        marginTop: '18px'
      },
    }
  }
}));

export default shareInterfaceDialogStyles;
