import { Theme } from "@mui/system";

const monetizePageStyles = ((theme: Theme) => ({
  monetizePage: {
    [theme.breakpoints.down('md')]: {
      '& .contents-inner': {
        paddingBottom: '52px'
      }
    }
  },
  leftColumn: {
    width: '64.8%',
    '& > h3': {

    },
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    }    
  },
  rightColumn: {
    width: '33.55%',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  leftInner: {
    padding: '27px 40px 29px',
    borderRadius: '16px',
    backgroundColor: theme.palette.white.light,
    '& > h3': {
      fontSize: '25px',
      lineHeight: '34px',
      color: theme.palette.common.black,
      marginBottom: '40px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      borderRadius: '0',
      backgroundColor: 'transparent',
      '& > h3': {
        fontSize: '17px',
        lineHeight: '24px',
        marginBottom: '24px'
      }
    }
  },
  monetizeCard: {
    padding: '20px 26px 18px',
    borderRadius: '15px',
    border: '1px solid #E9E9E9',
    height: '100%',
    '& h6': {
      fontSize: '16px',
      lineHeight: '24px',
      color: theme.palette.common.black,
      marginBottom: '9px'
    },
    '& > p': {
      fontSize: '14px',
      lineHeight: '22px',
      marginBottom: '33.7px',
      color: theme.palette.common.black
    },
    '& .MuiButtonBase-root': {
      fontSize: '15px',
      fontWeight: '700',
      lineHeight: '21px',
      minHeight: '45px',
      padding: '11px 0 13px',
      marginBottom: '10.6px',
      marginTop: 'auto'
    },
    '& .MuiLink-root': {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'none',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '700',
      color: theme.palette.blue[600],
      cursor: 'pointer',
      '& > svg': {
        marginTop: '3px !important',
        marginLeft: '4px !important'
      },
      '&:hover': {
        color: '#2196f3',
        '& svg path': {
          fill: '#2196f3'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '18px 20px',
      backgroundColor: theme.palette.white.light,
      '& h6': {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '5px',
        textAlign: 'center'
      },
      '& > p': {
        fontSize: '14px',
        marginBottom: '14.6px',
        textAlign: 'center'
      },
      '& .MuiButtonBase-root': {
        fontSize: '14px',
        lineHeight: '1',
        minHeight: '40px',
        padding: '10px 0 10px',
        marginBottom: '10px',
      },
      '& .MuiLink-root': {
        '& > svg': {
          marginTop: '3px !important',
          marginLeft: '4px !important'         
        }
      }
    }
  },
  monetizeCardImg: {
    borderRadius: '10px',
    backgroundColor: '#FBFBFE',
    width: '75px',
    height: '75px',
    marginBottom: '19.5px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '68px',
      marginBottom: '17.4px'
    }
  },
  footerBanner: {
    width: '100%',
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
      marginTop: '18.8px'
    }
  },
  monetizeSubPage: {
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#fff',
      '& .contents-inner': {
        padding: '10px 25px 40px'
      }
    }
  },
  mainContents: {
    padding: '35.5px 36px 35.5px 40px',
    backgroundColor: '#fff',
    borderRadius: '15px',    
    '& .page-title': {
      fontSize: '25px',
      lineHeight: '34px'
    },
    [theme.breakpoints.down('xl')]: {
      paddingLeft: '24px',
      paddingRight: '24px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      borderRadius: '0',
      '& .page-header': {
        marginBottom: '32px'
      },
      '& .page-title': {
        fontSize: '17px',
        lineHeight: '24px'
      }
    }
  },
  mainContentsInner: {
    padding: '22px 42px 0',
    [theme.breakpoints.down('xl')]: {
      paddingLeft: '0',
      paddingRight: '0'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0'
    }
  },
  searchField: {
    backgroundColor: 'rgba(249, 249, 249, 0.8)',
    borderRadius: '48px',
    '& .MuiInputBase-input': {
      color: '#000',
      paddingLeft: '30px'
    },
    '& .MuiButtonBase-root': {
      minWidth: 'unset',
      width: '56px',
      padding: '0',
      height: '56px',
      maxHeight: 'unset !important',
      '& span': {
        display: 'flex'
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      marginTop: '16px',
      '& .MuiInputBase-root': {
        flex: '1'
      },
      '& .MuiInputBase-input': {
        paddingLeft: '24px'
      },
      '& .MuiButtonBase-root': {
        width: '48px',
        height: '48px'
      },
    }
  },
  tipCard: {
    '& .card-title': {
      '& h4': {
        display: 'flex',
        alingItems: 'center',
        '& > span': {
          marginLeft: '19px !important',
          cursor: 'pointer'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .card-title': {
        '& h4.MuiTypography-h4': {
          '& > span': {
            marginLeft: '11px !important'
          }
        }
      },
    }
  },
  tabContents: {
    maxHeight: '600px',
    overflowY: 'auto' as const,
    paddingRight: '16px',
    '&::-webkit-scrollbar': {
      width: '8px',      
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(to bottom, #161FE4, #BB14E2)',
      borderRadius: "8px"
    },
    [theme.breakpoints.down('md')]: {
      maxHeight: 'unset',
      paddingRight: '0'
    }
  }
}));

export default monetizePageStyles;
