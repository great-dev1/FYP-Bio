import { Theme } from "@mui/system";

const supportLayoutStyles = ((theme: Theme) => ({
  root: {
    backgroundColor: '#fff'
  },
  navbar: {
    padding: '20px 44px 20px 50px',
    '& .nav-logo': {
      '& .logo-icon': {
        alignItems: "center"
      },      
      '& .line-bar': {
        borderColor: '#000',
        height: '50px',
        marginRight: '18px'
      },
      '& p': {
        fontSize: '29px',
        lineHeight: '28px',
        color: '#000'
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '16px 26px',
      '& .nav-logo': {
        '& .line-bar': {
          borderColor: '#A854F5 !important',
          backgroundColor: '#A854F5 !important',
          height: '40px !important',
          marginRight: '14px !important'
        },
        '& p': {
          fontSize: '23px !important',
          lineHeight: '22px !important'
        }
      },
    }
  },
  links: {
    columnGap: '82px',
    '& .MuiLink-root': {
      fontSize: '20px',
      fontWeight: '300',
      lineHeight: '30px',
      color: '#000',
      '&:hover': {
        color: '#2196f3'
      }
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  signInBtn: {
    '&.MuiLink-root': {
      color: '#000',
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: '900',
      marginRight: '40px',
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
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: '900',
      width: '173px',
      height: '65px',
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
  }
}));

export default supportLayoutStyles;
