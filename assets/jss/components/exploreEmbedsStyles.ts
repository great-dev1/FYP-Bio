import { Theme } from "@mui/system";

const exploreEmbedsStyles = ((theme: Theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      maxWidth: 'unset',
      borderRadius: '29px',
      boxShadow: 'none',
      height: '100%'
    },   
    [theme.breakpoints.down("md")]: {
      '& .MuiDialog-container': {
        alignItems: 'end'
      },
      '& .MuiDialog-paper': {
        width: '100%',
        borderRadius: '21px 21px 0 0',
        margin: '32px 0 0 0',
        maxHeight: 'calc(100vh - 76px)'
      },
    }
  },
  contents: {
    height: '100%',
    padding: '36.4px 40px 40px',
    width: '872px',
    boxSizing: 'border-box' as const,
    '& .modal-title': {
      marginBottom: '40px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '20px',
      '& .modal-title': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '24px',
        textAlign: 'center'
      }
    }
  },
  closeBtn: {
    '&.MuiButtonBase-root': {
      width: '39px',
      height: '39px',
      backgroundColor: '#FAFAFA',
      position: 'absolute',
      top: '18px',
      right: '16px'
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiButtonBase-root': {
        width: '34px',
        height: '34px',
        top: '19px',
        right: '16px',
        padding: '6px'
      },
    }
  },
  headerTab: {
    '& .header-cell': {
      paddingBottom: '22px',
      cursor: 'pointer' as const,
      borderBottom: '2px solid rgba(210, 210, 210)',
      '& h3': {
        whiteSpace: 'nowrap'
      },
      '&:hover': {
        borderColor: '#000',
        '& h3': {
          fontWeight: '500'
        },
        '& .header-cell-img': {
          background: 'linear-gradient(to right, rgba(245, 236, 248, 0.7), rgba(219, 219, 255, 0.7))'
        },       
      }
    },
    '& .header-cell-img': {
      background: '#F6F6F6',
      borderRadius: '50%'
    },
    '& .active': {
      borderColor: '#000',
      position: 'relative',
      '& h3': {
        fontWeight: '500'
      },
      '& .header-cell-img': {
        background: 'linear-gradient(to right, rgba(245, 236, 248, 0.7), rgba(219, 219, 255, 0.7)) !important'
      }          
    },
    '& .react-horizontal-scrolling-menu--wrapper': {
      position: 'relative'
    },
    '& .react-horizontal-scrolling-menu--separator': {
      borderBottom: '2px solid rgba(210, 210, 210)',
      width: '36px',
      minWidth: '36px'
    },
    '& .react-horizontal-scrolling-menu--arrow-left, .react-horizontal-scrolling-menu--arrow-right': {
      position: 'absolute',
      zIndex: '2',
      top: '0',
      left: '20px',
    },
    '& .react-horizontal-scrolling-menu--arrow-right': {
      right: '20px',
      left: 'unset'
    },
    '& .react-horizontal-scrolling-menu--scroll-container': {
      
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% + 40px)',
      marginLeft: '-20px',
      '& .header-cell': {
        paddingBottom: '14px',
        borderWidth: '1px',
        borderColor: 'rgba(112, 112, 112, 0.08)',
        '& h3': {
          fontSize: '14px',
          lineHeight: '20px'
        },
        '&:focus': {
          borderColor: 'rgba(112, 112, 112, 0.08)',
          '& h3': {
            fontWeight: '400'
          },
          '& .header-cell-img': {
            background: '#F6F6F6'
          }, 
        },
        '&.MuiBox-root:hover': {
          borderColor: 'rgba(112, 112, 112, 0.08)',
          '& h3': {
            fontWeight: '400'
          },
          '& .header-cell-img': {
            background: '#F6F6F6'
          }, 
        }
      },
      '& .header-cell-img': {
        marginBottom: '7.5px'
      },
      '& .react-horizontal-scrolling-menu--separator': {
        width: 'unset',
        minWidth: '36px',
        flex: '1',
        borderWidth: '1px',
        borderColor: 'rgba(112, 112, 112, 0.08) !important',
      },
      '& .react-horizontal-scrolling-menu--scroll-container': {
        paddingLeft: '20px',
        paddingRight: '20px'
      },
      '& .active.header-cell': {
        borderColor: '#707070 !important'
      },
      '&::before': {
        content: `''`,
        width: '20px',
        height: '1px',
        background: '#fff',
        bottom: '0',
        position: 'absolute',
        left: '0',
        zIndex: '2'
      },
      '&::after': {
        content: `''`,
        width: '20px',
        height: '1px',
        background: '#fff',
        bottom: '0',
        position: 'absolute',
        right: '0',
        zIndex: '2'
      }
    }
  },
  scrollArrowBtn: {
    '&.MuiButtonBase-root': {
      width: '38px',
      height: '38px',
      padding: '0',
      boxShadow: '0 3px 20px rgba(0, 0, 0, 0.1)',
      background: '#fff'
    }
  },
  scrollWrapper: {
    height: '100%',
    overflowY: 'auto' as const,
    width: "calc(100% + 40px)",
    paddingRight: '40px',
    '&::-webkit-scrollbar': {
      width: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888'
    },
    [theme.breakpoints.down('md')]: {
      width: "calc(100% + 30px)",
      paddingLeft: '10px',
      marginLeft: '-10px',
      paddingRight: '15px'
    }
  },
  sectionBlock: {
    paddingTop: '35px',
    '& .show-more-btn': {
      fontSize: '16px',
      lineHeight: '23px',
      color: '#000',
      background: '#F9F9F9',
      padding: '15px 54.5px',
      margin: '29px auto 0',
      display: 'flex',
      '&:hover': {
        opacity: '0.7',
        transition: 'all .3s'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .content-item-list': {
        '& .MuiGrid-item:first-child .content-item': {
          borderTop: '0'
        }
      },
      '& .show-more-btn': {
        width: '100%',
        fontSize: '15px',
        lineHeight: '21px',
        padding: '13px 0',
        marginTop: '12px'
      }
    }
  },
  contentItem: {
    padding: '16px 15px',
    border: '1px solid rgba(213, 213, 213, 0.4)',
    borderRadius: '46px',
    cursor: 'pointer' as const,
    '& .icon-box': {
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      background: 'rgba(213, 213, 213, 0.19)',
      marginRight: '15px',
    },
    '& .add-btn': {
      fontSize: '14px',
      color: '#3333DA',
      marginLeft: 'auto',
      marginRight: '11px',
      textTransform: 'none',
      cursor: 'pointer',
      '&:hover': {
        opacity: '0.7',
        transition: 'all .3s'
      }
    },
    '&:hover': {
      background: 'linear-gradient(to right, rgba(245, 236, 248, 0.7), rgba(219, 219, 255, 0.7))',
      '& .icon-box': {
        background: 'rgba(213, 213, 213, 1)'
      }
    },
    '& h6, p, a': {
      position: 'relative'
    },
    [theme.breakpoints.down('md')]: {
      padding: '16px 0',
      borderLeft: '0',
      borderRight: '0',
      borderRadius: '0',
      borderBottom: '0',
      '& .add-btn': {
        marginRight: '8px !important'
      },
      '&:hover': {
        background: '#fff',
        '&::before': {
          content: `''`,
          position: 'absolute',
          width: `calc(100% + 20px)`,
          left: '-10px',
          top: '0',
          background: 'linear-gradient(to right, rgba(245, 236, 248, 0.7), rgba(219, 219, 255, 0.7))',
          height: '100%',
          borderRadius: '8px'
        }
      }
    }
  }
}));

export default exploreEmbedsStyles;
