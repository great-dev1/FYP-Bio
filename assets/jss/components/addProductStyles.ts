import { Theme } from "@mui/system";

const addProductStyles = ((theme: Theme) => ({
  header: {
    '& .page-title': {
      '& h1': {
        fontSize: '25px',
        lineHeight: '35px',
        marginLeft: '27.5px'
      }
    },
    '& .header-btns': {
      columnGap: '15px',
      '& .MuiButtonBase-root': {
        fontSize: '16px',
        lineHeight: '23px',
        padding: '0',
        paddingLeft: '30px',
        paddingRight: '30px',
        height: '58px'
      }
    },
    '& .save-as-draft': {
      backgroundColor: '#000'
    },
    [theme.breakpoints.up('lg')]: {
      '& .mobile-publish-btn': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('lg')]: {
      '& .page-title': {
        '& > span': {
          display: 'none !important'
        },
        '& h1': {
          marginLeft: '0 !important'
        }
      },
      '& .header-btns': {
        display: 'none'
      },
      '& .mobile-publish-btn': {
        fontSize: '16px',
        lineHeight: '23px',
        padding: '12px 30px'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .page-title': {
        '& h1': {
          fontSize: '17px !important',
          lineHeight: '24px !important'
        }
      },
      '& .mobile-publish-btn': {
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '17px !important',
        padding: '11px 20px !important',
        height: 'fit-content'
      }
    }
  },
  detailCard: {
    padding: '15px 30px 25px',
    '& .image-box': {
      height: '200px',
      marginBottom: '29px'
    },
    '& .detail-cell': {
      '& p': {
        fontSize: '16px',
        marginLeft: '16px'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '17px 16px 20px',
      '& .image-box': {
        height: '177px',
        marginBottom: '22px'
      },
      '& .detail-cell': {
        '& p': {
          fontSize: '14px !important',
          marginLeft: '9px !important'
        },
        '& .bank-cash-icon': {
          width: '20.7px',
          height: '14.27px'
        },
        '& .clock-icon': {
          width: '14.93px',
          height: '14.93px'
        },
        '& .location-icon': {
          width: '13.22px',
          height: '16.32px'
        }
      }
    }
  },
  sellMoreContents: {
    padding: '34px 28px 50px',
    '& .blog-content': {
      paddingBottom: '34px',
      borderBottom: '1px solid rgba(112, 112, 112, 0.08)',
      '& .MuiLink-root': {
        fontSize: '15px',
        fontWeight: '600',
        color: '#56BC50',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          marginLeft: '12.2px'
        }
      }
    },
    '& .specific-link': {
      marginTop: '29.5px',
      '& h3': {
        marginBottom: '10px'
      },
      '& > p': {
        marginBottom: '36px'
      },
      '& .MuiLink-root': {
        width: '100%',
        border: '1px solid rgba(112, 112, 112, 0.15)',
        borderRadius: '28px',
        display: 'flex',
        alignItems: 'center',
        padding: '11px 13px 11px 22px',
        '& .round-key-icon': {
          marginRight: '14px'
        },
        '& > span': {
          marginLeft: 'auto',
          width: '34px',
          height: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#6454F5',
          borderRadius: '50%'
        },
        '& p': {
          maxWidth: 'calc(100% - 70px)',
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }
      }
    }
  },
  addingContentHeader: {
    '& h3': {
      fontSize: '18px',
      lineHeight: '25px',
      marginBottom: '6.7px'
    },
    '& p': {
      fontSize: '15px',
      lineHeight: '21px'
    },
    '& .MuiButtonBase-root': {
      fontSize: '16px',
      lineHeight: '23px',
      padding: '20px 25px',
      '& > span:first-child': {
        display: 'flex',
        alignItems: 'center'
      },
      '& .plus-icon': {
        marginRight: '12.3px',
        '& path': {
          strokeWidth: '2px'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '5px',
      '& h3': {
        fontSize: '15px',
        lineHeight: '20px',
        marginBottom: '13px'
      },     
      '& .MuiButtonBase-root': {
        padding: '0',
        width: '30px',
        height: '30px',
        minWidth: 'unset',
        position: 'absolute',
        top: '0',
        right: '0',
        '& > span:first-child': {
          '& span': {
            display: 'none'
          }
        },
        '& .plus-icon': {
          marginRight: '0 !important',
          width: '9.25px',
          height: '9.25px'
        }
      },
    }
  },
  addMoreBtn: {
    '&.MuiLink-root': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '18px',
      textTransform: 'none',
      fontWeight: '700',
      color: '#6454F5',
      marginLeft: 'auto',
      width: 'fit-content',
      marginRight: 'auto',
      cursor: 'pointer',
      transition: 'all .3s',
      '&:hover': {
        transform: 'scale(1.2)',
        transition: 'all .3s'
      }
    },
    '& .plus-icon': {
      marginRight: '16px'
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiLink-root': {
        fontSize: '15px'       
      },
      '& .plus-icon': {
        marginRight: '10px',
        width: '13px',
        height: '13px'
      }
    }
  }
}));

export default addProductStyles;
