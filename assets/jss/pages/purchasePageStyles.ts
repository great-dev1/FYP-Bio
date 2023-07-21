import { Theme } from "@mui/system";

const purchasePageStyles = ((theme: Theme) => ({
  wrapper: {
    backgroundColor: '#FCFCFC',
    padding: '28px 50px 40px',
    minHeight: 'calc(100vh - 106px)',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '26px',
      paddingRight: '26px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '16px 0 30px',
      backgroundColor: '#fff'
    }
  },
  contents: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '25px 26px 40px 26px',
    '& .tab-title': {
      fontSize: '25px',
      lineHeight: '34px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      '& .tab-title': {
        marginLeft: '24px',
        fontSize: '17px',
        lineHeight: '24px'
      }
    }
  },
  contentsInner: {
    marginTop: '50px',
    [theme.breakpoints.down('md')]: {
      marginTop: '20px'
    }
  },
  tabHeader: {
    '& .MuiTabs-flexContainer': {
      width: 'max-content',
      borderBottom: '2px solid rgba(210, 210, 210, 0.4)'
    },
    '& .MuiTab-root': {
      padding: '24px 0 22px',
      marginRight: '40px',
      fontSize: '17px',
      lineHeight: '24px',
      color: '#000',
      fontWeight: '300',
      textTransform: 'none',
      minWidth: 'unset',
      // '&:hover': {
      //   fontWeight: '700'
      // }
    },
    // '& .Mui-selected': {
    //   fontWeight: '700'
    // },
    '& .MuiTab-root:last-child': {
      marginRight: '0'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#000',
      height: '2px'
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiTabScrollButton-root': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiTab-root': {
        padding: '13px 0',
        marginRight: '26px',
        fontSize: '14px',
        lineHeight: '16px'
      },
      '& .MuiTabScrollButton-root': {
        width: '24px',
        '& .MuiSvgIcon-root': {
          transform: 'scale(1.5)'
        }
      }
    }
  },
  tabContents: {
    marginTop: '36px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '24px',
      paddingRight: '24px'
    }
  },
  imgCard: {
    padding: '20px 20px 24px',
    border: '1px solid rgba(112, 112, 112, 0.3)',
    borderRadius: '17px',
    transition: 'transform .15s ease-in-out,box-shadow .15s ease-in-out',
    cursor: 'pointer' as const,
    '& .card-title': {
      fontSize: '23px',
      lineHeight: '32px',
      color: '#000',
      marginTop: '18px',
      marginBottom: '11px',
      display: 'block'
    },
    '& .card-image': {
      '& > span': {
        width: '100% !important',
        borderRadius: '14px'
      },
      '&:hover .open-img': {
        opacity: '1'
      }
    },
    '& .card-user': {
      '& .MuiLink-root': {
        fontSize: "18px",
        lineHeight: '25px',
        color: '#AAAAAA',
        marginLeft: '14px'
      }
    },
    '& .card-actions': {
      zIndex: '3',
      position: 'absolute',
      top: '18px',
      right: '20px',
      '& .MuiLink-root': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '38px',
        height: '38px',
        padding: '0',
        minWidth: 'unset',
        backgroundColor: '#fff',
        borderRadius: '50%',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.6)'
        },
        '&.download': {
          marginLeft: '9px'
        }
      }
    },
    '& .open-img': {
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '12px',
      transition: 'opacity 0.25s ease',
      opacity: '0',
      '& .MuiButtonBase-root': {
        fontSize: '16px',
        height: '45px',
        padding: '0',
        width: '60%',
        color: '#fff',
        fontWeight: 'bold',
        maxWidth: '200px'
      }
    },
    // '&:hover': {
    //   transform: 'translateY(-.33rem)',
    //   boxShadow: '0 0.5rem 2rem 0 rgb(33 40 50 / 25%)'
    // }
    [theme.breakpoints.down('md')]: {
      padding: '16px 16px 18px',
      '& .card-title': {
        fontSize: '19px',
        lineHeight: '27px',
        marginTop: '15.5px'
      },
      '& .card-image': {
        '& > span': {
          height: '150px !important'
        }
      },
      '& .card-user': {
        '& .MuiLink-root': {
          fontSize: "15px !important",
          lineHeight: '21px !important',
          marginLeft: '10px !important'
        }
      },
      '& .card-actions': {
        right: '16px',
        '& .MuiLink-root': {
          width: '34.5px',
          height: '34.5px'
        }
      },
      '& .open-img': {
        '& .MuiButtonBase-root': {
          fontSize: '14px !important',
          height: '35px !important',
          width: '100% !important',
          maxWidth: '150px !important'
        }
      },
    }
  },
  socialCard: {
    padding: '17.5px 18.5px 20px',
    '& .join-btn': {
      marginTop: '22px',
      fontSize: '18px',
      lineHeight: '25px',
      padding: '10px 0 13px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '16px 17px 15.5px',
      '& .join-btn': {
        marginTop: '15.5px',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '20px',
        padding: '12px 0 14px'
      }
    }
  },
  tipCard: {
    padding: '19.5px 27px 21.5px 30px',
    border: '1px solid rgba(112, 112, 112, 0.3)',
    borderRadius: '17px',
    '& .tip-price': {
      marginBottom: '7px',
      '& p': {
        fontSize: '20px',
        lineHeight: '24px'
      },
      '& h3': {
        fontSize: '28px',
        lineHeight: '40px'
      }
    },
    '& .tip-receiver': {
      '& > p': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '8px'
      }
    },
    '& .card-user': {
      marginBottom: '11px',
      '& .MuiLink-root': {
        fontSize: '20px',
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 0.65)',
        marginLeft: '12px'
      }
    },
    '& .tip-field-label': {
      fontSize: '15px',
      lineHeight: '21px',
      marginBottom: '6px'
    },
    '& .tip-field-value': {
      fontSize: '17px',
      lineHeight: '24px',
      marginLeft: '16.6px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '18px 30px 25px',
      '& .tip-price': {
        marginBottom: '9px',
        '& p': {
          fontSize: '18px !important'         
        },
        '& h3': {
          fontSize: '26px !important',
          lineHeight: '36px !important'
        }
      },
      '& .tip-receiver': {
        '& > p': {
          fontSize: '14px !important'
        }
      },
      '& .card-user': {
        marginBottom: '13px !important',
        '& .MuiLink-root': {
          fontSize: '18px !important'
        }
      },
      '& .tip-field-label': {
        fontSize: '14px !important'
      },
      '& .tip-field-value': {
        fontSize: '15px !important',
        lineHeight: '20px !important',
        marginLeft: '16px !important'
      },
      '& .calendar-icon': {
        width: '17.23px',
        height: '19.14px'
      },
      '& .clock-icon': {
        width: '20.2px',
        height: '20.2px'
      }
    }
  },
  videoCard: {
    padding: '17.5px 18.5px 20px',
    '& .card-video': {
      '& video': {
        width: '100%',
        height: '165px',
        objectFit: 'cover',
        borderRadius: '14px'
      }
    },
    '& .card-title': {
      fontSize: '22px',
      marginBottom: '10px'      
    },
    '& .date-time-value': {
      fontSize: '15px',
      lineHeight: '21px',
      marginLeft: '16.6px'
    },
    '& .card-user': {
      marginBottom: '26px'
    },
    '& .play-btn': {
      width: '56px',
      height: '56px',
      position: 'absolute',
      top: '50%',
      left :'50%',
      transform: 'translate(-50%, -50%)',
      minWidth: 'unset',
      boxShadow: 'none',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.42)',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '16px 17px 15.5px',
      '& .card-video': {
        '& video': {
          height: '150px !important'
        }
      },
      '& .card-title': {
        fontSize: '19px'
      },
      '& .card-user': {
        marginBottom: '22px'
      }
    }
  }
}));

export default purchasePageStyles;
