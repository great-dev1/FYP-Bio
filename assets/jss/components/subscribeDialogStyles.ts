import { Theme } from "@mui/system";

const subscribeDialogStyles = ((theme: Theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      width: '100%',
      maxWidth: '892px',
      borderRadius: '29px',
      '&::-webkit-scrollbar': {
        width: '3px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#BB14E2'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiDialog-paper': {
        margin: '0 24px',
        maxWidth: 'calc(100% - 48px)'
      }
    }
  },
  dialogInner: {
    padding: '48.5px 82px 62px',
    [theme.breakpoints.down('md')]: {
      padding: '26.7px 23px 30px'
    }
  },
  header: {
    marginBottom: '32px',
    '& h3': {
      fontSize: '30px',
      lineHeight: '45px',
      marginTop: '20px'
    },
    '& p': {
      fontSize: '18px',
      lineHeight: '25px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '28px',
      '& h3': {
        fontSize: '18px',
        lineHeight: '25px',
        marginTop: '18px',
        marginBottom: '5.5px'
      },
      '& p': {
        fontSize: '12px',
        lineHeight: '17px'
      }
    }
  },
  form: {
    '& .MuiTabs-root': {
      minHeight: 'unset',
      '& .MuiTab-root': {
        fontSize: '16px',
        lineHeight: '24px',
        color: '#CACACA',
        textTransform: 'none',
        padding: '28px 70px',
        minHeight: 'unset',
        borderBottom: '1px solid rgba(209, 209, 209, 0.2)',
        '&:hover': {
          borderColor: "#000"
        }
      },
      '& .Mui-selected': {
        fontWeight: '500',
        color: '#000'
      },
      '& .MuiTabs-indicator': {
        backgroundColor: '#000',
        height: '1px'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiTabs-root': {
        '& .MuiTab-root': {
          fontSize: '12px !important',
          lineHeight: '17px !important',
          padding: '0 25px 20px !important'
        }
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiTabs-root': {
        '& .MuiTab-root': {
          padding: '0 0px 20px !important',
          width: 'calc(100% / 3)'
        }
      }
    }
  },
  tabContents: {
    paddingTop: '57px',
    '& .MuiInputBase-root': {
      borderRadius: '57px'
    },
    '& .MuiInputBase-input': {
      fontSize: '18px',
      fontWeight: '700',
      color: '#000',
      padding: '22.8px 42.6px 24px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#EBEAEB'
    },
    '& .submit-btn': {
      fontSize: '22px',
      fontWeight: '700',
      height: '72px',
      maxHeight: 'unset'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '32px',
      '& .MuiInputBase-input': {
        fontSize: '14px !important',
        padding: '16.8px 30px !important'
      },
      '& .submit-btn': {
        height: '53px',
        fontSize: '15px'
      }
    }
  },
  checkbox: {
    '& .MuiButtonBase-root': {
      padding: '0'
    },
    '& .checkbox-icon': {
      backgroundColor: '#F7F7F7',
      borderRadius: '7px',
      width: '30px',
      height: '30px'
    },
    '& .checked-icon': {
      backgroundColor: '#2196f3',
      borderRadius: '7px',
      width: '30px',
      height: '30px'
    },
    '& p': {
      marginLeft: '20px',
      fontSize: '16px',
      lineHeight: '20px'
    },
    [theme.breakpoints.down('md')]: {
      '& .checkbox-icon': {
        borderRadius: '5px',
        width: '22px',
        height: '22px'
      },
      '& .checked-icon': {       
        borderRadius: '5px',
        width: '22px',
        height: '22px',
        '& .MuiSvgIcon-root': {
          fontSize: '16px'
        }
      },
      '& p': {
        marginLeft: '14px',
        fontSize: '11px',
        lineHeight: '14px'
      }
    }
  }
}));

export default subscribeDialogStyles;
