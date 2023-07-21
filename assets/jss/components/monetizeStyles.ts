import { Theme } from "@mui/system";

const monetizeStyles = ((theme: Theme) => ({
  tabHeader: {
    marginBottom: '24px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '46px',
      alignItems: 'flex-start'
    }
  },
  tabs: {
    position: 'relative' as const,
    '&::before': {
      position: 'absolute',
      content: `''`,
      width: '100%',
      height: '2px',
      background: 'rgba(210, 210, 210, 0.4)',
      left: '0',
      bottom: '0'
    },
    '& .MuiTabs-root': {
      minHeight: '46px'
    },
    '& .MuiTab-root': {
      padding: '0',
      minHeight: 'unset',
      fontSize: '17px',
      lineHeight: '24px',
      color: '#000',
      textTransform: 'none',
      minWidth: 'unset',
      fontWeight: '300',
      '&:hover': {
        color: 'rgba(0, 0, 0, 0.7)'
      }
    },
    '& .MuiTab-root:last-child': {
      marginLeft: '36px'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#000'
    },
    '& .Mui-selected': {
      fontWeight: '600'
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiTabs-root': {
        minHeight: '33px'
      },
      '& .MuiTab-root': {
        fontSize: '14px',
        lineHeight: '20px'
      },
      '& .MuiTab-root:last-child': {
        marginLeft: '17px'
      }
    }
  },
  sortBtn: {
    cursor: 'pointer' as const,
    '& p': {
      fontSize: '17px',
      lineHeight: '24px',
    },
    '& p:first-of-type': {
      marginLeft: '14.3px',
      marginRight: '10.5px'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      '& .sort-icon': {
        width: '15.45px',
        height: '15.48px'
      },
      '& p': {
        fontSize: '14px',
        lineHeight: '20px',
      },
      '& p:first-of-type': {
        marginLeft: '8px',
        marginRight: '6px'
      },
    }
  },
  sortPopup: {
    '& .MuiPaper-root': {
      width: '200px',
      padding: '16px 0'
    },
    '& .MuiButtonBase-root': {
      textTransform: 'none',
      color: '#000',
      fontSize: '16px',
      lineHeight: '24px',
      justifyContent: 'start',
      padding: '8px 24px'
    }
  },
  textCard: {
    borderRadius: '17px',
    border: '1px solid rgba(112, 112, 112, 0.3)',
    padding: '22px',
    '& .card-header': {
      marginBottom: '16px'
    },
    '& .product-title': {
      fontSize: '22px',
      lineHeight: '30px',
      marginBottom: '4px'
    },
    '& .date-time': {
      '& p': {
        fontSize: '16px',
        lineHeight: '24px'
      },
      '& span': {
        margin: '0 13px 0 14.6px',
        background: '#DFDFDF',
        height: '12px',
        width: '1px'
      }
    },
    '& .revenue-value': {
      '& p': {
        fontSize: '15px',
        lineHeight: '20px'
      },
      '& h4': {
        fontSize: '25px',
        lineHeight: '27px'
      }
    },
    '& .customer': {
      padding: '12.5px 18px 14.5px 16.5px',
      marginBottom: '15.5px',
      backgroundColor: 'rgba(249, 249, 249, 0.47)',
      borderRadius: '10px',
      '& > p': {
        fontSize: '15px',
        lineHeight: '21px'
      },
      '& .user-name': {
        '& .MuiLink-root': {
          marginLeft: '14.5px',
          fontSize: '17px',
          fontWeight: '600',
          color: 'rgba(0, 0, 0, 0.65)'
        }
      }
    },
    '& .customer-fee': {
      '& p': {
        fontSize: '16px',
        lineHeight: '24px',
        marginBottom: '9px'
      },
      '& h5': {
        fontSize: '19px',
        fontWeight: '600',
        lineHeight: '27px'
      },
      '& .MuiButtonBase-root': {
        boxShadow: 'none',
        minWidth: 'unset',
        minHeight: 'unset',
        width: '47.4px',
        height: '47.4px',
        borderRadius: '50%',
        backgroundColor: '#A854F5',
        padding: '0',
        '&:hover': {
          backgroundColor: 'rgba(168, 84, 245, 0.6)'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '17px 22px 20px',
      '& .card-header': {
        marginBottom: '12.6px'
      },
      '& .product-title': {
        fontSize: '19px',
        lineHeight: '27px',
        marginBottom: '6px'
      },
      '& .date-time': {
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        },
        '& span': {
          margin: '0 11.6px 0 !important'
        }
      },
      '& .revenue-value': {
        '& p': {
          fontSize: '14px !important'
        },
        '& h4': {
          fontSize: '22px !important',
          lineHeight: '32px !important'
        }
      },
      '& .customer': {
        padding: '11.5px 16px 13.5px 13.5px',
        marginBottom: '25.5px',
        '& > p': {
          fontSize: '14px !important'
        },
        '& .user-name': {
          '& .MuiLink-root': {
            fontSize: '15px !important'
          }
        }
      },
      '& .customer-fee': {
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          marginBottom: '5px !important'
        },
        '& h5': {
          fontSize: '17px !important',
          lineHeight: '24px !important'
        }
      },
    }
  },
  confirmDialog: {
    '& .MuiDialog-paper': {
      margin: '16px',
      maxWidth: 'calc(100vw - 32px)',
      width: '800px'
    },
    '& .contents': {
      padding: '60px 24px 32px'
    },
    '& .close-btn': {
      position: 'absolute',
      top: '16px',
      right: '16px'
    },
    '& .confirm-text': {
      fontSize: '24px'
    },
    '& .confirm-btn': {
      marginTop: '40px',
      fontSize: '18px',
      lineHeight: '25px',
      padding: '0',
      height: '48px',
      maxWidth: '400px'
    }
  },
  mainTabCard: {
    padding: '24px 30px 26.5px 24px',
    backgroundColor: '#FBFBFB',
    borderRadius: '15px',
    '& .card-image': {
      borderRadius: '11px',
      border: '1px solid #E9E9E9',
      width: '125px',
      height: '120px'
    },
    '& .card-contents': {
      flex: '1',
      marginLeft: '30px'
    },
    '& .card-title': {
      marginBottom: '10px',
      '& h4': {
        fontSize: '16px',
        lineHeight: '23px',
        display: 'flex',
        alignItems: 'center',
        '& > span': {
          marginLeft: '19px !important',
          cursor: 'pointer'
        }
      },
      '& .MuiIconButton-root': {
        padding: '0'
      },
      '& .MuiIconButton-root:last-child': {
        marginLeft: '17px'
      },
      '& svg': {
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.2)'
        }
      }
    },
    '& .card-content': {
      marginBottom: '14.5px'
    },
    '& .properties': {
      columnGap: '66px',
      rowGap: '16px',
      flexWrap: 'wrap'
    },
    '& .property-field': {
      '& p': {
        fontSize: '16px',
        lineHeight: '23px',
        marginLeft: '13px'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '14px 17px 16px 18px',
      borderRadius: '10px',
      '& .card-image': {
        width: '90px',
        height: '90px'
      },
      '& .card-contents': {
        marginLeft: '22px'
      },
      '& .card-title': {
        marginBottom: '6px',
        '& h4': {
          fontSize: '15px !important',
          lineHeight: '20px !important',
          '& > span:first-child': {
            marginLeft: '11.3px !important'
          }
        },
        '& .MuiIconButton-root:last-child': {
          marginLeft: '10px !important',
        },      
      },
      '& .card-content': {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '13.5px'
      },
      '& .properties': {
        columnGap: '8px',
        rowGap: '8px'
      },
      '& .property-field': {
        '& p': {
          fontSize: '15px !important',
          lineHeight: '20px !important',
          marginLeft: '5px !important'
        },
        '& .bank-cash-icon': {
          width: '20px',
          height: '16px'
        },
        '& .clock-icon': {
          width: '16px',
          height: '16px'
        },
        '& .location-icon': {
          width: '14px',
          height: '18px'
        }
      },
    }
  },
  personalCard: {
    '& .file-dropzone': {
      marginTop: '20px',
      borderRadius: '5px',
      borderColor: '#DBDBDB'
    }
  },
  videoCallCard: {
    '& .customer-fee': {
      '& h5': {
        wordBreak: 'break-all'
      }
    },
    '& .timeline': {
      marginTop: '22px',
      marginBottom: '18px',
      '& p': {
        fontSize: '17px',
        lineHeight: '24px'
      },
      '& .MuiBox-root': {
        flex: '1',
        margin: '0 25.6px',
        height: '1px',
        backgroundColor: '#DCDCDC'
      }
    },
    '& .action-btns': {
      marginTop: '17.6px',
      '& .MuiButtonBase-root': {
        width: 'calc(50% - 10px)',
        padding: '0',
        height: '48px',
        fontSize: '18px'
      },
      '& .reject-btn': {
        backgroundColor: '#EA3F1D',
        '&:hover': {
          opacity: '0.7',
          transition: 'opacity 0.3s'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .timeline': {
        marginTop: '19px',
        marginBottom: '6px',
        '& p': {
          fontSize: '15px !important',
          lineHeight: '21px !important'
        },
        '& .MuiBox-root': {
          margin: '0 20px !important'
        }
      },
      '& .action-btns': {
        marginTop: '24px',
        '& .MuiButtonBase-root': {
          width: 'calc(50% - 7.5px) !important',
          height: '45px !important',
          fontSize: '15px !important'
        }
      },
    }
  },
  discordTelegramCard: {
    borderRadius: '17px',
    border: '1px solid rgba(112, 112, 112, 0.3)',
    padding: '17.5px 18.5px 19px',
    '& .card-image': {
      marginBottom: '17px',
      '& > span': {
        width: '100%',
        borderRadius: '14px !important'
      }
    },
    '& .product-title': {
      fontSize: '22px',
      lineHeight: '30px',
      marginBottom: '3px'
    },
    '& .date-time': {
      '& p': {
        fontSize: '16px',
        lineHeight: '24px'
      },
      '& span': {
        margin: '0 13px 0 14.6px',
        background: '#DFDFDF',
        height: '12px',
        width: '1px'
      }
    },
    '& .revenue-value': {
      '& p': {
        fontSize: '15px',
        lineHeight: '20px'
      },
      '& h4': {
        fontSize: '25px',
        lineHeight: '27px'
      }
    },
    '& .properties': {
      marginTop: '20px',
      '& p': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '6px'
      },
      '& h5': {
        fontSize: '17px',
        lineHeight: '24px'
      },
    },
    '& .refund-btn': {
      padding: '0',
      height: '48px',
      marginTop: '20px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '13px 14px 17px',
      '& .card-image': {
        marginBottom: '11.5px'
      },
      '& .product-title': {
        fontSize: '16px',
        lineHeight: '23px',
        marginBottom: '5px'
      },
      '& .date-time': {
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        },
        '& span': {
          margin: '0 11.6px 0 !important'
        }
      },
      '& .revenue-value': {
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px'
        },
        '& h4': {
          fontSize: '22px !important'
        }
      },
      '& .properties': {
        marginTop: '14px',
        '& p': {
          fontSize: '14px !important',
          marginBottom: '2px !important'
        },
        '& h5': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        },
      },
      '& .refund-btn': {
        height: '45px',
        marginTop: '18px',
        fontSize: '15px'
      },
    }
  },
  searchField: {
    backgroundColor: 'rgba(249, 249, 249, 0.8)',
    borderRadius: '48px',
    marginLeft: 'auto',
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
    [theme.breakpoints.down('xl')]: {
      width: '100%',
      display: 'flex',
      marginTop: '16px',
      order: '1',
      '& .MuiInputBase-root': {
        flex: '1'
      },
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiInputBase-input': {
        paddingLeft: '24px'
      },
      '& .MuiButtonBase-root': {
        width: '48px',
        height: '48px'
      },
    }
  },
  pageTitle: {
    '& .page-title': {
      marginRight: 'auto'
    },
    '& .add-btn': {
      marginLeft: '12px',
      boxShadow: 'none',
      fontSize: '18px',
      lineHeight: '27px',
      textTransform: 'none',
      fontWeight: '400',
      background: 'linear-gradient(to right, #BB14E2, #161FE4)',
      borderRadius: '46px',
      padding: '16px 37px 16px 25px',
      '& .plus-icon': {
        marginRight: '22px',
        '& path': {
          strokeWidth: '2px'
        }
      },
      '&.custom-icon-btn': {
        '& > span:first-child': {
          marginRight: '22px !important',
        }        
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .custom-icon-btn': {
        '& .plus-icon': {
          display: 'none'
        }       
      }
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '32px',
      '& .page-title': {
        fontSize: '17px',
        lineHeight: '24px'
      },
      '& .add-btn': {
        minWidth: 'unset',
        padding: '0',
        width: '30px',
        height: "30px",
        '& .btn-text': {
          display: 'none'
        },
        '& .plus-icon': {
          marginRight: '0 !important',
          width: '10px',
          height: '10px'
        }
      }
    }
  }
}));

export default monetizeStyles;
