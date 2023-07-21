import { Theme } from "@mui/system";

const editPageStyles = ((theme: Theme) => ({
  homepage: {
    [theme.breakpoints.down('md')]: {
      '& .contents-inner': {
        paddingBottom: '30px'
      }      
    }   
  },
  wrapper: {
    [theme.breakpoints.down('lg')]: {
      flexWrap: 'wrap'
    }
  },
  mobileDivice: {
    width: '27.7%',
    [theme.breakpoints.down('xl')]: {
      width: '350px',
      flex: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '30px',
      display: 'none'
    }   
  },
  contents: {
    backgroundColor: theme.palette.white.light,
    padding: '32px 32px 18px',   
    width: '70.35%',
    borderRadius: '16px',
    [theme.breakpoints.down('xl')]: {
      width: 'calc(100% - 350px - 30px)'
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      flex: 'none'
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'transparent',
      borderRadius: '0',
      padding: '0'
    }
  },
  hideOnMd: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  addNewLinkBtn: {
    paddingLeft: '50px',
    paddingRight: '50px',
    [theme.breakpoints.down('md')]: {
      '& .MuiButton-startIcon': {
        width: '17.1px',
        height: '17.47px'
      }
    }
  },
  explorekBtn: {    
    paddingLeft: '50px',
    paddingRight: '50px',
    [theme.breakpoints.down('md')]: {
      '& .MuiButton-startIcon': {
        width: '17.65px',
        height: '18.03px'
      }
    }
  },
  recommendedSection: {
    marginTop: '26.6px',
    '& h6': {
      fontSize: '18px',
      lineHeight: '34px',
      color: theme.palette.black.main,      
    },   
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        fontSize: '15px',
        '& span': {
          display: 'none'
        }
      }
    }
  },
  recommendedHeader: {
    marginBottom: '17.6px',
    '& .MuiButtonBase-root': {
      padding: '10px 16px',
      width: '220px',
      background: '#434343',
      '& .MuiButton-startIcon': {
        left: '20px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '14px'
    }
  },
  recommendedItem: {
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '16px',
    height: '104.45px',
    paddingTop: '19.8px',
    paddingBottom: '15.1px',
    cursor: 'pointer',
    width: '100%',
    '& .MuiBox-root': {
      width: '35.5px',
      height: '34px',
      marginBottom: '15px'
    },
    '& p': {
      fontSize: '14px',
      lineHeight: '1',
      color: theme.palette.black.main,    
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      // marginRight: 'auto',
      // marginLeft: 'auto',
      paddingTop: '15.3px',
      paddingBottom: '13px',
      height: '74.3px',
      '& .MuiBox-root': {
        width: '20px',
        height: '20px',
        marginBottom: '6px',
        '& > span': {
          maxHeight: '100%'
        }
      },      
    }
  },
  recommendedControl: {
    backgroundColor: 'rgba(0, 0, 0, 0.4) !important',
    color: '#fff',
    [theme.breakpoints.down("md")]: {
      '&.MuiIconButton-root': {
        padding: "0",
        width: '30px',
        height: '30px'
      }
    }
  },   
  recCarousel: {    
    '& ::-webkit-scrollbar': {
      display: 'none'
    },
    '& .react-horizontal-scrolling-menu--inner-wrapper': {
      position: 'relative'
    },
    '& .react-horizontal-scrolling-menu--arrow-left': {
      position: 'absolute',
      zIndex: '2',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    '& .react-horizontal-scrolling-menu--arrow-right': {
      position: 'absolute',
      zIndex: '2',
      right: '0',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    '& .react-horizontal-scrolling-menu--item': {
      width: 'calc(100% / 8)',
      minWidth: '112px'
    },
    '& .react-horizontal-scrolling-menu--separator': {
      width: '15.5px',
      minWidth: '15.5px'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '-25px',
      marginRight: '-25px',
      '& .react-horizontal-scrolling-menu--item': {
        width: 'calc(100% / 8)',
        minWidth: '124px'
      },
      '& .react-horizontal-scrolling-menu--separator': {
        width: '10px',
        minWidth: '10px'
      },
      '& .react-horizontal-scrolling-menu--arrow-left': {
        left: '20px'
      },
      '& .react-horizontal-scrolling-menu--arrow-right': {
        right: '20px'
      },
      '& .react-horizontal-scrolling-menu--scroll-container': {
        paddingLeft: '25px',
        paddingRight: '25px'
      }
    }
  },
  pinnedSocials: {
    paddingTop: '20px',
    borderTop: `1px solid rgba(0, 0, 0, 0.05)`,    
    '& .section-title': {
      fontSize: '18px',
      lineHeight: '25px',
      marginBottom: '17.6px',
      color: theme.palette.common.black
    },
    '& .add-btn': {
      boxShadow: 'none',
      background: '#434343',
      borderRadius: '7px',
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '24px',
      textTransform: 'none',
      padding: '14px',
      '& .MuiButton-startIcon': {
        position: 'absolute',
        left: '30px'
      },
      '&:hover': {
        opacity: '0.7',
        transition: 'all .3s'
      }
    },
    [theme.breakpoints.down('md')]: {      
      paddingTop: '16.3px',
      marginTop: '25px',
      '& .section-title': {
        fontSize: '17px',
        lineHeight: '24px',
        marginBottom: '16.5px',
        fontWeight: '700'
      },
      '& .add-btn': {       
        fontSize: '15px',        
        lineHeight: '21px',       
        '& .MuiButton-startIcon': {
          position: 'absolute',
          left: '24px !important'
        }       
      }
    }    
  },
  dndList: {
    display: 'flex',
    overflowX: 'auto' as const,
    paddingBottom: '8px',
    marginBottom: '18px',
    columnGap: '19px',
    '&::-webkit-scrollbar': {
      height: '4px',
      
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '4px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '13.6px'
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap' as const,
      overflowX: 'auto',
      paddingBottom: '0',
      rowGap: '13.5px'
    }
  },
  dndItem: {
    display: 'flex',
    padding: '12.1px 14px 12.1px 10px',
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '7px',
    alignItems: 'center',
    width: '210px',
    height: '47.4px',
    minWidth: '210px',
    '& .contents-box': {
      flex: '1'
    },
    '& .social-icon': {
      width: '25px',
      marginRight: '10.5px'
    },
    '& .MuiLink-root': {
      fontSize: '14px',
      fontWeight: '300',
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 0.4)',
      marginLeft: 'auto'
    },    
    [theme.breakpoints.down('sm')]: {
      width: '100%',

    }
  },
  dndTriggerIcon: {
    cursor: 'pointer !important',
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px'   
  },
  addDndItemBtn: {
    width: '47px',
    minWidth: 'unset',
    backgroundColor: `${theme.palette.grey[800]} !important`,
    borderRadius: '7px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '34.1px',
      minWidth: '34.1px',
      '& img': {
        width: '12.23px'
      }
    }
  },
  myLinksSection: {
    marginTop: '26.6px',
    marginBottom: '42px',
    '& h3': {
      fontSize: '20px',
      lineHeight: '34px',
      color: theme.palette.common.black,
      marginBottom: '26.6px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '0'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
      marginBottom: '0',
      '& h3': {
        fontSize: '17px',
        marginBottom: '15.7px'
      }
    }
  },
  moreEmbedsBtn: {
    '&.MuiButtonBase-root': {
      width: '180px',
    },    
    '& > span:first-child': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '16px'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '20px',
      marginRight: '10px'
    },
    [theme.breakpoints.down('sm')]: {
      '&.MuiButtonBase-root': {
        width: '160px',
      },
      '& > span:first-child': {
        display: 'flex',
        alignItems: 'center',
        fontSize: '15px'
      },
      '& .MuiSvgIcon-root': {
        fontSize: '18px',
        marginRight: '6px'
      },
    }
  }
}));

export default editPageStyles;
