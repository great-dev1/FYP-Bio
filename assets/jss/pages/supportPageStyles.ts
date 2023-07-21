import { Theme } from "@mui/system";

const supportPageStyles = ((theme: Theme) => ({
  wrapper: {
    backgroundColor: '#FCFCFC',
    padding: '38px 40px',
    [theme.breakpoints.down('lg')]: {
      padding: '0'
    }
  },
  contentsInner: {
    backgroundColor: '#fff',
    padding: '34px 32px',
    [theme.breakpoints.down('lg')]: {
      padding: '0'
    }
  },
  leftSection: {
    boxSizing: 'border-box' as const,
    width: '48.6%',
    padding: '60px 62px 35px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      padding: '40px 28px 48px'
    }
  },
  leftHeader: {
    paddingBottom: '50px',
    marginBottom: '54px',
    '& p': {
      fontSize: '20px',
      lineHeight: '28px',
      marginBottom: '10px'
    },
    '& h1': {
      fontSize: '40px',
      lineHeight: '56px'
    },
    '&::after': {
      content: `''`,
      position: 'absolute',
      width: '90px',
      height: '2px',
      backgroundColor: '#707070',
      bottom: '0',
      left: '0'
    },
    '&::before': {
      content: `''`,
      position: 'absolute',
      width: '5px',
      height: '62px',
      backgroundColor: '#9F83EB',
      top: '6px',
      left: '-94px'
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '22.5px',
      marginBottom: '47px',
      '& p': {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '3px'
      },
      '& h1': {
        fontSize: '25px',
        lineHeight: '34px'
      },
      '&::before': {
        content: `''`,
        display: 'none'
      },
    }
  },
  optionItem: {
    marginBottom: '25px',
    padding: '15px 17.4px 17.4px',
    backgroundColor: '#FCFCFC',
    borderRadius: '12px',
    cursor: 'pointer' as const,
    transition: 'all .3s',
    maxWidth: '600px',
    '& .option-icon': {
      width: '58px',
      height: '58px',
      borderRadius: '9px',
      backgroundColor: '#fff',
      marginRight: '35px'
    },
    '& h2': {
      fontSize: '21px',
      fontWeight: '700',
      lineHeight: '29px',
      marginBottom: '4px',
      color: '#474461'
    },
    '& p': {
      fontSize: '19px',
      lineHeight: '27px',
      color: '#000'
    },
    '&:hover': {
      boxShadow: 'rgb(186 146 255 / 40%) 0px 0px 15px 0px',
      transition: 'all .3s'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
      padding: '13px 14px',
      maxWidth: 'unset',
      '& .option-icon': {
        width: '45.5px',
        height: '45.5px',
        marginRight: '27px',
        '& .discord-icon': {
          width: '20px',
          height: '14.8px'
        },
        '& .email-icon': {
          width: '17.2px',
          height: '13.74px'
        }
      },
      '& h2': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '3px'
      },
      '& p': {
        fontSize: '14px',
        lineHeight: '20px'
      }
    }
  },
  selectedOption: {
    background: 'linear-gradient(to left, rgba(219, 219, 255, 0.32), rgba(245, 236, 2488, 0.32))'
  },
  rightSection: {
    width: '51.4%',
    backgroundColor: '#FAFAFA',
    borderRadius: '16px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      borderRadius: '0'
    }
  },
  emailForm: {
    padding: '35px 40px 38px',
    '& .MuiInputBase-root': {
      backgroundColor: '#fff',
      borderRadius: '12px',
      '& .MuiInputBase-input': {
        padding: '23px 28px 26px',
        fontSize: '17px',
        lineHeight: '23px',
        color: '#000',
        fontWeight: '500'
      },
      '& input::placeholder': {
        opacity: '1',
        color: '#000',
        fontWeight: '500'
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none'
    },
    '& .MuiButtonBase-root': {
      fontSize: '18px',
      lineHeight: '27px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '22px 28px 30px',
      '& .MuiInputBase-root': {       
        borderRadius: '10px',
        '& .MuiInputBase-input': {
          padding: '17px 20px 19px !important',
          fontSize: '15px !important',
          lineHeight: '20px !important',
        }       
      },
      '& .MuiButtonBase-root': {
        fontSize: '16px !important',
        lineHeight: '23px !important',
        fontWeight: '700',
        marginTop: '15px'
      },
    }
  },
  descField: {
    '& textarea': {
      height: '475px !important',
      boxSizing: 'border-box',
      '&::placeholder': {
        fontSize: '17px !important',
        fontWeight: '400 !important',
        color: 'rgba(116, 116, 116, 0.4) !important'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& textarea': {
        height: '177px !important',
        '&::placeholder': {
          fontSize: '12px !important'
        }
      }
    }
  },
  fileDropzone: {
    '& .file-dropzone': {
      justifyContent: 'unset',
      height: '74px',
      borderColor: '#C9C9C9',
      '& .dropzone-icon': {
        transform: 'translateY(-50%) rotate(41deg)',
        left: '32px'
      },
      '& p': {
        marginLeft: '80px',
        fontSize: '17px',
        fontWeight: '500',
        lineHeight: '23px',
        color: '#000'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .file-dropzone': {
        height: '55px',
        '& .dropzone-icon': {
          left: '20px !important'
        },
        '& p': {
          marginLeft: '56px !important',
          fontSize: '13px !important',
          lineHeight: '19px !imporatnt'
        }
      },
    }
  },
  socialLinks: {
    bottom: '70px',
    left: '92px',
    '& .MuiLink-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '58px',
      height: '58px',
      border: '1px solid #ECECEC',
      borderRadius: '50%',
      marginRight: '18px',
      '&:hover': {
        boxShadow: 'rgb(186 146 255 / 40%) 0px 0px 15px 0px',
        transition: 'all .3s'
      }
    },
    [theme.breakpoints.down('lg')]: {
      position: 'unset !important',
      padding: '37px 28px',
      width: '100%',
      justifyContent: 'space-between !important' as const,
      '& .MuiLink-root': {
        marginRight: '0',
        width: '51px',
        height: '51px',
        '& .facebook-icon': {
          width: '9.5px',
          height: '19px'
        },
        '& .twitter-icon': {
          width: '19.9px',
          height: '16.2px'
        },
        '& .instagram-filled-icon': {
          width: '19.4px',
          height: '19.1px'
        },
        '& .reddit-icon': {
          width: '24.5px',
          height: '19.8px'
        },
        '& .discord-icon': {
          width: '22.7px',
          height: '16.2px'
        }
      }
    }
  },
  discordForm: {
    padding: '37.5px 40px 38px',
    '& h2': {
      fontSize: '27px',
      lineHeight: '34px',
      marginBottom: '13px'
    },
    '& p': {
      fontSize: '20px',
      lineHeight: '34px',
      marginBottom: '28px'
    },
    '& .MuiButtonBase-root': {
      fontSize: '18px',
      lineHeight: '25px',
      marginTop: '36px',
      '& .MuiButton-startIcon': {
        left: '26px'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '22px 28px 27px',
      '& h2': {
        fontSize: '20px',
        lineHeight: '25px',
        marginBottom: '11px'
      },
      '& p': {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '22.5px'
      },
      '& .MuiButtonBase-root': {
        fontSize: '16px',
        lineHeight: '25px',
        marginTop: '23px',
        fontWeight: '700',
        '& .MuiButton-startIcon': {
          display: 'none'
        }
      }
    }
  }
}));

export default supportPageStyles;
