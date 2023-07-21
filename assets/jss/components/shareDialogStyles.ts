import { Theme } from "@mui/system";

const shareDialogStyles = ((theme: Theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      width: '584px',
      borderRadius: '29px',
      padding: '33px 0 44px'
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiDialog-paper': {
        margin: '0 24px',
        maxWidth: 'calc(100% - 48px)'
      }
    }
  },
  dialogInner: {
    padding: '0 60px',
    overflowY: 'auto' as const,
    '&::-webkit-scrollbar': {
      width: '3px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#BB14E2'
    },
    [theme.breakpoints.down('md')]: {
      padding: '26px 23px 23px'
    }
  },
  userInfoBox: {
    marginBottom: '25px',
    '& h3': {
      fontSize: '25px',
      lineHeight: '35px',
      marginTop: '15px',
      marginBottom: '2px'
    },
    '& p': {
      fontSize: '18px',
      lineHeight: '25px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '18px',
      '& h3': {
        fontSize: '18px',
        lineHeight: '25px',
        marginTop: '18px',
        marginBottom: '6px'
      },
      '& p': {
        fontSize: '12px',
        lineHeight: '17px'
      },
    }
  },
  usersList: {
    paddingTop: '26px',
    borderTop: '1px solid #F2F2F2',
    paddingBottom: '32px',
    '& .view-more-btn': {
      height: '62px',
      borderRadius: '46px',
      boxShadow: 'none',
      backgroundColor: '#FAFAFA',
      marginTop: '26.5px',
      color: '#000',
      textTransform: 'none',
      fontSize: '18px',
      lineHeight: '25px',
      fontWeight: '700',
      '& .plus-icon': {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '32px'
      },
      '&:hover': {
        boxShadow: 'rgb(217 100 100 / 40%) 0px 0px 15px 0px'
      }
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '26.6px',
      '& .view-more-btn': {
        height: '53.5px',        
        marginTop: '22px',
        fontSize: '15px',
        lineHeight: '21px',
        '& .plus-icon': {
          right: '28px',
          width: '16.4px',
          height: '16.4px'
        },
        '&:hover': {
          boxShadow: 'rgb(217 100 100 / 40%) 0px 0px 15px 0px'
        }
      },
    }
  },
  userLine: {
    '& .user-name-email': {
      marginLeft: '24px',
      '& h4': {
        fontSize: '17px',
        lineHeight: '24px',
        marginBottom: '3px'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '21px'
      }
    },
    '& .share-link': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '44px',
      height: '44px',
      backgroundColor: '#A854F5',
      borderRadius: '50%',
      marginLeft: 'auto',
      '& .share-icon': {
        width: '17.14px',
        height: '21.56px'
      },
      '&:hover': {
        boxShadow: 'rgb(217 100 100 / 40%) 0px 0px 15px 0px'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .user-name-email': {
        marginLeft: '20px',
        '& h4': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        },
        '& p': {
          fontSize: '12px !important',
          lineHeight: '18px !important'
        }
      },
      '& .share-link': {
        width: '38px',
        height: '38px',
        '& .share-icon': {
          width: '14.8px !important',
          height: '18.6px !important'
        }
      },
    }
  },
  footerText: {
    paddingTop: '23.6px',
    paddingBottom: '24.6px',
    borderTop: '1px solid #F2F2F2',
    borderBottom: '1px solid #F2F2F2',
    '& h5': {
      fontSize: '18px',
      lineHeight: '25px',
      marginBottom: '6.8px'
    },
    '& p': {
      fontSize: '16px',
      lineHeight: '20px'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '12.6px',
      paddingBottom: '12.6px',
      '& h5': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '7.8px'
      },
      '& p': {
        fontSize: '13px'
      },
    }
  },
  footerLinks: {
    paddingTop: '30px',
    '& .footer-link-cell': {
      '& .MuiLink-root': {
        width: '66px',
        height: '66px',
        backgroundColor: '#4B4B4B',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          boxShadow: 'rgb(217 100 100 / 40%) 0px 0px 15px 0px'
        }
      },
      '& p': {
        fontSize: '14px',
        lineHeight: '20px',
        marginTop: '9px'
      }
    },
    '& .footer-link-cell:nth-child(2)': {
      marginLeft: '44px',
      marginRight: '44px'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '26.6px',
      '& .footer-link-cell': {
        '& .MuiLink-root': {
          width: '51px !important',
          height: '51px !important'
        },
        '& p': {
          fontSize: '11px !important',
          lineHeight: '13px !important'
        },
        '& .phone-icon': {
          width: '19.85px !important',
          height: '19.85px !important'
        },
        '& .copy-link-icon': {
          width: '23.17px !important',
          height: '23.29px !important'
        },
        '& .mail-icon': {
          width: '21.66px !important',
          height: '21.63px !important'
        }
      },
      '& .footer-link-cell:nth-child(2)': {
        marginLeft: '30px',
        marginRight: '30px'
      },
    }
  }
}));

export default shareDialogStyles;
