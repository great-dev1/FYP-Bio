import { Theme } from "@mui/system";

const landingLayoutStyles = ((theme: Theme) => ({
  root: {
    backgroundColor: '#fff'
  },
  navbar: {
    position: 'relative' as const,
    zIndex: '2',
    padding: '34px 124px 24px',
    '& .nav-logo': {
      display: 'flex',
      lineHeight: '1'
    },
    [theme.breakpoints.up('lg')]: {
      '& .mobile-logo': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '16px 26px',
      '& .pc-logo': {
        display: 'none'
      }
    }
  },
  links: {
    columnGap: '82px',
    '& .MuiLink-root': {
      fontSize: '20px',
      fontWeight: '300',
      lineHeight: '28px',
      color: '#000',
      '&:hover': {
        color: '#2196f3'
      }
    },
    [theme.breakpoints.down('lg')]: {
      columnGap: '40px',
      '& .MuiLink-root': {
        fontSize: '16px',      
        lineHeight: '24px',
      },
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  signInBtn: {
    '&.MuiLink-root': {
      color: '#000',
      fontSize: '22px',
      lineHeight: '30px',
      fontWeight: '700',
      marginRight: '48px',
      transition: 'all 0.2s',
      '&:hover': {
        transition: 'all 0.2s',
        color: '#2196f3'
      }
    },
    [theme.breakpoints.down('lg')]: {
      '&.MuiLink-root': {
        border: '1px solid #6454F5',
        color: '#5B1AE3',
        fontSize: '12px',
        lineHeight: '18px',
        padding: '13px 19px',
        borderRadius: '46px',
        marginRight: '8px',
        '&:hover': {
          color: '#fff !important',
          backgroundColor: '#6454F5'
        }
      }
    }
  },
  startBtn: {
    '&.MuiButtonBase-root': {
      fontSize: '22px',
      lineHeight: '30px',
      fontWeight: '700',
      width: '197px',
      height: '75px',
      maxHeight: 'unset',
      paddingTop: '18px',
      paddingBottom: '18px'
    },
    [theme.breakpoints.down('lg')]: {
      '&.MuiButtonBase-root': {
        fontSize: '12px',
        lineHeight: '18px',
        width: '102px',
        height: '43px',
        paddingTop: '13px',
        paddingBottom: '13px',
        paddingLeft: '0',
        paddingRight: '0'
      },
    }
  },
  toggleBtn: {
    '&.MuiIconButton-root': {
      padding: '0',
      marginLeft: '24px'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  bundlePageLogo: {
    '& .line-bar': {
      borderColor: '#A854F5 !important',
      backgroundColor: '#A854F5'
    }
  },
  userMenuBtn: {
    '&.MuiButtonBase-root': {
      fontSize: '22px',
      lineHeight: '31px',
      fontWeight: '700',
      color: theme.palette.common.black,
      textTransform: 'none',
      '& > span:first-child': {
        marginRight: '26px !important'
      }
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  footer: {
    padding: '93px 124px 60px',
    '& .copy-info-box': {
      '& .MuiLink-root': {
        cursor: 'pointer'
      },
      '& p': {
        margin: '16.4px 0 36.6px'
      }
    },
    '& .link-box': {
      paddingTop: '5px',
      '& h6': {
        marginBottom: '33.5px'
      },
      '& .link-list': {
        rowGap: '25px'
      },
      '& .MuiLink-root': {
        color: 'rgba(85, 85, 85, 0.71)',
        fontSize: '17px',
        lineHeight: '24px'
      },
    },
    [theme.breakpoints.up('lg')]: {
      '& .mobile-logo': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '40.8px 26px 34px',
      '& .pc-logo': {
        display: 'none'
      },
      '& .link-box': {
        '& h6': {
          marginBottom: '25.3px !important'
        },
        '& .link-list': {
          rowGap: '20px !important'
        },
        '& .MuiLink-root': {
          fontSize: '15px !important',
          lineHeight: '21px !important'
        },
      },
    },
    [theme.breakpoints.up('md')]: {
      '& .copy-text': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .copy-info-box': {
        width: '100%',
        marginBottom: '30px',
        '& h6': {
          display: 'none'
        },
        '& p': {
          margin: '12.3px 0 0 !important'
        }
      },
      '& .link-box': {
        width: '50%',
        marginBottom: '25.7px'
      },
      '& .copy-text': {
        width: '100%',
        marginTop: '10px'
      }
    }
  }
}));

export default landingLayoutStyles;
