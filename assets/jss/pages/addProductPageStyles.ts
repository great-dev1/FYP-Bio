import { Theme } from "@mui/system";

const addProductPageStyles = ((theme: Theme) => ({
  wrapper: {
    '& .contents-inner': {
      padding: '28px 36px 45px'
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#fff',
      '& .contents-inner': {
        padding: '0 26px 32px'
      },
      '& .navbar-links-wrapper': {
        display: 'none'
      }
    }
  },
  contents: {
    backgroundColor: '#fff',
    padding: '20px 40px 36px',
    borderRadius: '16px',
    [theme.breakpoints.down('md')]: {
      padding: "0",
      borderRadius: '0'
    }
  },
  leftSection: {
    width: 'calc((100% - 33px) * 0.633)',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      order: '1',
      marginTop: '28px'
    }
  },
  rightSection: {
    width: 'calc((100% - 33px) * 0.367)',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      '& .sell-more-contents-box': {
        display: 'none'
      }
    }
  },
  footerBtns: {
    order: '2',
    marginTop: "18px",
    width: '100%',
    '& .save-as-draft': {
      background: '#000',
      '&:hover': {
        opacity: '0.8',
        transition: 'opacity .3s'
      }
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiButtonBase-root': {
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '20px',
        padding: '0',
        height: '40px'
      },
    }
  },
  formField: {
    '& .form-label': {
      fontSize: '16px',
      fontWeight: '600',
      color: '#474461',
      marginBottom: '20px',
      lineHeight: '24px'
    },
    '& .MuiInputBase-root': {
      borderRadius: '5px',
      '& input::placeholder, textarea::placeholder': {
        color: '#000 !important'
      },
    },
    '& .MuiInputBase-input': {
      padding: '17.5px 30px',
      fontSize: '16px',
      color: '#000'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E3E3E3'
    },
    [theme.breakpoints.down('md')]: {
      '& .form-label': {
        fontSize: '14px',
        marginBottom: '8.6px',
        lineHeight: '20px'
      },
      '& .MuiInputBase-input': {
        padding: '13px 25px !important',
        fontSize: '15px'
      }
    }
  },
  priceField: {
    '& .form-label': {
      fontSize: '16px',
      fontWeight: '600',
      color: '#474461',
      marginBottom: '20px',
      lineHeight: '24px'
    },
    '& .free-switch': {
      '& p': {
        marginLeft: '15.5px'
      },
      '& .MuiSwitch-root': {
        width: '59px',
        height: '37px'
      },
      '& .MuiSwitch-thumb': {
        width: '23px',
        height: '23px',
      },
      '& .MuiSwitch-switchBase': {
        color: '#000',
        '&.Mui-checked': {
          color: '#A854F5',
          transform: 'translateX(24px)'
        }
      },
      '& .MuiSwitch-track': {
        backgroundColor: 'rgba(206, 206, 206, 0.13)'
      }
    },
    '& .price-value': {
      flex: '1',
      marginRight: '20px',
      '& .currency-field': {
        width: '96px',
        '& .MuiInputBase-root': {
          borderRadius: '5px 0 0 5px',
          background: '#FBFBFB'
        }
      },
      '& .MuiSelect-select': {
        paddingLeft: '17px',
        fontWeight: '700'
      }
    },
    '& .price-input': {
      flex: '1',
      left: '-1px',
      '& .MuiInputBase-root': {
        borderRadius: '0 5px 5px 0'
      },
      '& .MuiInputBase-input': {
        paddingLeft: '24px',
        paddingRight: '24px'
      }
    },
    '& .MuiInputBase-root': {
      borderRadius: '5px',
      '& input::placeholder, textarea::placeholder': {
        color: '#000 !important'
      },
    },
    '& .MuiInputBase-input': {
      padding: '17.5px 30px',
      fontSize: '16px',
      color: '#000'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E3E3E3'
    },
    [theme.breakpoints.down('md')]: {
      '& .free-switch': {
        '& p': {
          fontSize: '15px',
          marginLeft: '8.5px !important'
        },
        '& .MuiSwitch-root': {
          width: '47.5px !important',
          height: '30px !important'
        },
        '& .MuiSwitch-thumb': {
          width: '18.5px !important',
          height: '18.5px !important',
        },
        '& .MuiSwitch-switchBase': {
          marginTop: '5.6px',
          marginBottom: '5.6px',
          '&.Mui-checked': {
            transform: 'translateX(21px) !important'
          }
        },

      },
      '& .price-value': {
        marginRight: '24px',
        '& .currency-field': {
          width: '78px !important',
          '& .MuiInputBase-root': {
            height: '47.56px !important'
          }
        },
        '& .MuiSelect-select': {
          paddingLeft: '13px !important',
          paddingRight: '8px !important',
          fontSize: '14px'
        },
        '& .select-anchor': {
          right: '16px'
        }
      },
      '& .price-input': {
        '& .MuiInputBase-input': {
          paddingLeft: '19px !important',
          paddingRight: '19px !important'
        }
      },
      '& .form-label': {
        fontSize: '14px',
        marginBottom: '8.6px',
        lineHeight: '20px'
      },
      '& .MuiInputBase-input': {
        padding: '13px 25px !important',
        fontSize: '15px'
      }
    }
  },
  generalInfoBox: {
    padding: '25px 45px 40px 36px',
    '& .general-info-header': {
      paddingBottom: '24px',
      borderBottom: '1px solid rgba(112, 112, 112, 0.1)',
      '& h2': {
        fontSize: '20px',
        lineHeight: "27px",
        marginBottom: '15px'
      },
      '& p': {
        fontSize: '17.5px',
        lineHeight: '27px'
      }
    },
    '& .file-dropzone-box': {
      marginTop: '24px',
      marginBottom: '24px',
      '& > p': {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '18px'
      }
    },
    '& .description-field': {
      '& .MuiInputBase-root': {
        height: '155px',
        '& .MuiInputBase-input': {
          height: '100% !important',
          boxSizing: 'border-box'
        }
      },
      '& h6': {
        fontSize: '16px',
        lineHeight: '23px',
        marginBottom: '6.5px'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '24px'
      },
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0'
    },
    [theme.breakpoints.down('md')]: {
      '& .general-info-header': {
        paddingBottom: '0',
        borderBottom: '0',
        '& h2': {
          fontSize: '15px !important',
          lineHeight: "21px !important",
          marginBottom: '5px !important'
        },
        '& p': {
          fontSize: '15px !important',
          lineHeight: '20px !important'
        }
      },
      '& .file-dropzone-box': {
        marginTop: '18px',
        marginBottom: '20px',
        '& > p': {
          color: '#474461',
          fontWeight: '600'
        },
        '& .file-dropzone': {
          height: '48px'
        },
        '& .dropzone-icon': {
          left: '20px'
        },
        '& .upload-file-icon': {
          width: '16.84px',
          height: '16.84px'
        }
      },
      '& .description-field': {
        '& .MuiInputBase-root': {
          height: '125px !important'
        },
        '& h6': {
          fontSize: '15px !important',
          lineHeight: '21px !important',
          marginBottom: '2px !important'
        },
        '& p': {
          marginBottom: '17px !important'
        }
      }
    }
  },
  inviteBotSection: {
    marginTop: '27px',
    '& .invite-header': {
      paddingBottom: '32px',
      borderBottom: '1px solid rgba(112, 112, 112, 0.08)'
    },
    '& .title-box': {
      '& h6': {
        fontSize: '20px',
        lineHeight: '28px',
        marginBottom: '9px'
      },
      '& p': {
        fontSize: '17.5px',
        lineHeight: '24px'
      }
    },
    '& .invite-link': {
      backgroundColor: 'rgba(234, 63, 29, 0.04)',
      borderRadius: '46px',
      padding: '12px 28px 12px 25.5px',
      '& h6': {
        fontSize: '18px',
        lineHeight: '25px'
      },
      '& p': {
        fontSize: "14px",
        lineHeight: '20px'
      },
      '& .warning-icon': {
        marginRight: '16px'
      },
      '& .MuiLink-root': {
        fontSize: '16px',
        color: '#000',
        fontWeight: '700',
        textDecorationColor: '#000'
      }
    },
    '& .invite-form': {
      '& h6': {
        fontSize: '16px',
        lineHeight: '23px',
        marginBottom: '6.4px'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '21px'
      }
    },
    '& .give-roles': {
      marginTop: '23px',
      marginBottom: '23px',
      '& p': {
        marginBottom: '24.5px'
      }
    },
    '& .grace-period': {
      marginTop: '25px',
      '& p': {
        marginBottom: '17.5px'
      }
    },
    '& .invite-btn': {
      fontSize: '17px',
      lineHeight: '24px'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '18px',
      '& .invite-header': {
        paddingBottom: '22.5px'
      },
      '& .title-box': {
        '& h6': {
          fontSize: '15px !important',
          lineHeight: '20px !important',
          marginBottom: '0px !important'
        },
        '& p': {
          fontSize: '15px !important',
          lineHeight: '20px !important'
        }
      },
      '& .invite-link': {
        padding: '9.7px 23px 9.7px 21px',
        '& h6': {
          fontSize: '15px !important',
          lineHeight: '20px !important'
        },
        '& p': {
          fontSize: "11px !important",
          lineHeight: '16px !important'
        },
        '& .warning-icon': {
          marginRight: '12.8px !important',
          width: '18.35px',
          height: '16.33px'
        },
        '& .MuiLink-root': {
          fontSize: '12px !important',
          lineHeight: '17px'
        }
      },
      '& .invite-form': {
        '& h6': {
          fontSize: '15px !important',
          lineHeight: '20px !important',
          marginBottom: '0px !important'
        },
        '& .MuiSelect-select': {
          paddingLeft: '14px !important'
        }
      },
      '& .give-roles': {
        marginTop: '14px',
        marginBottom: '16px',
        '& p': {
          marginBottom: '21px !important'
        }
      },
      '& .grace-period': {
        marginTop: '21px',
        paddingTop: '16px',
        borderTop: '1px solid rgba(112, 112, 112, 0.08)',
        '& p': {
          marginBottom: '16px !important'
        }
      },
      '& .invite-btn': {
        fontSize: '15px',
        lineHeight: '20px',
        fontWeight: '700',
        padding: '0',
        height: '40px'
      },
    }
  },
  exclusionGeneralInfo: {
    '& .general-info-header': {
      borderBottom: '0',
      paddingBottom: '0'
    },
    '& .file-dropzone-box': {
      marginTop: '34px',
      '& > p': {
        fontSize: '16px',
        lineHeight: '24px'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .file-dropzone-box': {
        marginTop: '20px',
        '& > p': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        }
      }
    }
  },
  exclusionAddContents: {
    marginTop: '24px',
    '& .add-content-header': {
      marginBottom: '22px'
    },
    '& .add-more-btn': {
      marginTop: '20px'
    },
    '& .contents-list': {
      rowGap: '16px',
      display: 'flex',
      flexDirection: 'column'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '22px',
      '& .add-content-header': {
        marginBottom: '20px'
      },
      '& .add-more-btn': {
        marginTop: '12px'
      }
    }
  },
  exclusionContentItem: {
    padding: '24px 45px 28px 63px',
    border: '1px solid #F2F2F2',
    borderRadius: '16px',
    background: '#fff',
    '& .upload-file-title': {
      marginBottom: '26px',
      '& h6': {
        fontSize: '15px',
        lineHeight: '21px',
        padding: '0 45px',
        background: '#fff',
        position: 'relative'
      },
      '&::before': {
        content: `''`,
        position: 'absolute',
        width: '100%',
        height: '1px',
        background: 'rgba(0, 0, 0, 0.05)',
        left: '0',
        top: '50%'
      },
      '& .MuiIconButton-root': {
        position: 'absolute',
        right: '-8px',
        top: '50%',
        transform: 'translateY(-50%)'
      }
    },
    '& .file-dropzone': {
      background: '#FBFBFB',
      padding: '28px 0 25px',
      border: '1px dashed #EFEFEF',
      height: '140px',
      borderRadius: '18px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& h6': {
        fontSize: '16px',
        lineHeight: '23px',
        marginTop: '15px',
        marginBottom: '5px'
      },
      '& p': {
        marginTop: '0 !important',
        fontSize: '13px !important',
        color: 'rgba(0, 0, 0, 0.8) !important'
      }
    },
    '& .copy-text-box': {
      marginBottom: '25.6px',
      height: '43px',
      background: '#FAFAFA',
      borderRadius: '7px',
      '& .description-btn': {
        padding: '0',
        width: '45px',
        minWidth: 'unset',
        background: 'linear-gradient(to right, rgba(245, 236, 248, 0.7), rgba(219, 219, 219, 0.7))',
        borderRadius: '7px',
        height: '100%'
      },
      '& .trash-btn': {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '14px'
      }
    },
    '& .title-box': {
      marginBottom: '5.5px',
      '& h6': {
        fontSize: '20px',
        lineHeight: '28px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      '& .MuiInputBase-input': {
        padding: '0',
        fontSize: '20px',
        lineHeight: '28px',
        color: '#000',
        fontWeight: '500'
      },
      '& .title-label': {
        '& > .MuiBox-root': {
          maxWidth: 'calc(100% - 100px)'
        }
      },
      '& .check-btn': {
        '& .MuiSvgIcon-root': {
          fontSize: '15px'
        }
      },
      '& .notification-box': {
        '& > p': {
          marginRight: '10px'
        },
        '& > p+span': {
          marginRight: '10px !important'
        }
      }
    },
    '& .description-box': {
      maxWidth: 'calc(100% - 100px)',
      marginBottom: '12px',
      '& h6': {
        fontSize: '18px',
        lineHeight: '25px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      '& .MuiInputBase-input': {
        padding: '0',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000',
        fontWeight: '300'
      },
      '& .check-btn': {
        '& .MuiSvgIcon-root': {
          fontSize: '15px'
        }
      },
      '& .edit-btn': {
        width: '31px',
        height: '31px'
      }
    },
    '& .trigger-btn': {
      position: 'absolute',
      left: '21px',
      top: '62px',
      '& .MuiIconButton-root': {
        width: '33px'
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .upload-file-title': {
        '& .MuiIconButton-root': {
          display: 'none'
        }
      },
      '& .title-box': {
        '& .notification-box': {
          '& > p+span': {
            display: 'none !important'
          }
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px 13px 16.5px 18px',
      borderRadius: '10px',
      '& .upload-file-title': {
        marginBottom: '8.5px',
        '& h6': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          padding: '0 22px !important'
        }
      },
      '& .file-dropzone': {
        padding: '20px 0 18.5px',
        border: '0',
        height: 'fit-content',
        background: '#fff',
        '& .image-icon': {
          width: '23.76px',
          height: '18.87px'
        },
        '& h6': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          marginTop: '9px !important',
          marginBottom: "0 !important"
        },
        '& p.MuiTypography-root': {
          marginTop: '2px !important',
          fontSize: '10px !important'
        }
      },
      '& .copy-text-box': {
        marginBottom: '5px',
        height: '26px',
        marginLeft: '20px',
        '& .description-btn': {
          width: '27px !important',
          '& .description-icon': {
            width: '9.72px',
            height: '10.74px'
          }
        },
        '& .trash-btn': {
          display: 'none'
        }
      },
      '& .title-box': {
        marginBottom: '0px',
        '& h6': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        },
        '& .title-label': {
          '& > .MuiBox-root': {
            maxWidth: 'calc(100% - 70px) !important'
          }
        },
       
        '& .MuiIconButton-root': {
          padding: '0',
          marginLeft: '8px'
        },
        '& .MuiInputBase-root': {
          '& .MuiInputBase-input': {
            fontSize: '14px',
            lineHeight: '20px'
          }
        },
        '& .notification-box': {
          '& > p': {
            display: 'none'
          }
        },
        '& .edit-btn, .check-btn': {
          width: '20px !important',
          height: '20px !important'
        }
      },
      '& .description-box': {
        maxWidth: 'calc(100% - 70px) !important',
        marginBottom: '8px',
        '& h6': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        },
        '& .MuiIconButton-root': {
          padding: '0',
          marginLeft: '8px'
        },
        '& .MuiInputBase-root': {
          '& .MuiInputBase-input': {
            padding: '0',
            fontSize: '14px',
            lineHeight: '20px'
          }
        },
        '& .edit-btn, .check-btn': {
          width: '20px !important',
          height: '20px !important'
        }
      },
      '& .trigger-btn': {
        top: '30px',
        left: '9.4px',
        '& .MuiIconButton-root': {
          width: '30px !important'
        }
      }
    }
  },
  personalGeneralInfo: {
    padding: '27px 45px 40px 36px',
    '& .field-title': {
      fontSize: '16px',
      lineHeight: '23px',
      marginBottom: '8.5px'
    },
    '& .field-subtext': {
      fontSize: '14px',
      lineHeight: '20px'
    },
    '& .respond-type-btn': {
      textTransform: 'none',
      color: '#000',
      fontSize: '16px',
      lineHeight: '24px',
      padding: '18.5px 0',
      border: '1px solid rgba(186, 189, 255, 0.3)',
      borderRadius: '5px',
      '& .MuiButton-startIcon': {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '20px'
      },
      '&:hover': {
        backgroundColor: 'rgba(84, 170, 245, 0.1)'
      },
      '&.active': {
        color: '#fff',
        backgroundColor: '#54AAF5',
        '& .outlined-video-icon': {
          '& path': {
            stroke: '#fff'
          }
        },
        '& .speaker-icon, .text-icon': {
          '& path': {
            fill: '#fff'
          }
        }
      }
    },
    '& .description-field': {
      '& .MuiInputBase-input': {
        height: '193px !important',
        boxSizing: 'border-box'
      }
    },
    '& .file-dropzone-box': {
      marginTop: '20px',
      '& > p': {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '18px'
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0',
      '& .form-section': {
        order: '1'
      },
      '& .file-dropzone-box': {
        marginTop: '0',
        marginBottom: '13px'
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .delivery-time': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .respond-type-box': {
        '& .field-title': {
          color: '#000'
        }
      },
      '& .field-title': {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '5px'
      },
      '& .respond-type-btn': {
        fontSize: '14px',
        lineHeight: '20px',
        padding: '12px 0',
        '& .outlined-video-icon': {
          width: '19.33px',
          height: '14px'
        }
      },
      '& .description-field': {
        '& textarea.MuiInputBase-input': {
          height: '125px !important'
        }
      },
      '& .file-dropzone-box': {
        '& > p': {
          marginBottom: '13.5px !important',
          color: '#000'
        },
        '& .file-dropzone': {
          height: '48px'
        },
        '& .dropzone-icon': {
          left: '20px'
        },
        '& .upload-file-icon': {
          width: '16.84px',
          height: '16.84px'
        }
      },
      '& .maximum-word': {
        display: 'none'
      }
    }
  },
  personalAddContents: {
    marginTop: '17px'
  },
  personalContentItem: {
    padding: '27.8px 45px 27.8px 66px',
    background: '#fff',
    '& .trigger-btn': {
      position: 'absolute',
      left: '21px',
      top: '81px',
      '& .MuiIconButton-root': {
        width: '33px'
      }
    },
    '& .answer-type': {
      '& .required': {
        fontSize: '25px',
        fontWeight: '600',
        color: '#F12323',
        lineHeight: '35px',
        top: '18px',
        position: 'absolute',
        right: '54px'
      }
    },
    '& .question-type': {
      '& .actions': {
        top: '50%',
        right: '16px',
        transform: 'translateY(-50%)'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '21px',
        marginRight: '22px'
      },
      '& .MuiIconButton-root': {
        marginLeft: '16px'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '20px 22px 20px 38px',
      '& .trigger-btn': {
        left: '8px !important',
        top: '50% !important',
        transform: 'translateY(-50%)',
        '& .MuiIconButton-root': {
          width: '30px !important'
        }
      },
      '& .answer-type': {
        '& .required': {
          top: '12px !important',
          right: '46px !important'
        }
      },
      '& .question-type': {
        '& .actions': {
          right: '6px !important'
        },
        '& p': {
          fontSize: '12px !important',
          lineHeight: '17px !important',
          marginRight: '10.5px !important',
          color: '#9F83EB',
          '& span': {
            display: 'none'
          }
        },
        '& .MuiIconButton-root': {
          marginLeft: '2px !important'
        }
      }
    }
  },
  videoCallRightSection: {
    '& .sell-more-contents-box': {
      marginTop: '0'
    }
  },
  videoCallGeneral: {
    '& .file-dropzone-box': {
      marginTop: '0',
      marginBottom: '27px',
      '& > p': {
        fontSize: '16px',
        lineHeight: '24px',
        marginBottom: '20px'
      }
    },
    '& .description-field': {
      '& h6': {
        marginBottom: '20px'
      },
      '& .MuiInputBase-root': {
        height: '165px'
      }
    },
    '& .meeting-duration-box': {
      '& h6': {
        fontSize: '16px',
        lineHeight: '24px',
        marginBottom: '20px'
      },
      '& .specific-time': {
        '& p': {
          marginRight: '27px',
          marginLeft: '26px'
        },
        '& .MuiInputBase-root': {
          fontSize: '16px',
          width: '200px'
        },
        '& .MuiInputBase-input': {
          padding: '13px 23px'
        }
      },
      '& .meeting-duration-btn': {
        textTransform: 'none',
        background: '#FBFBFB',
        fontSize: '16px',
        lineHeight: '24px',
        padding: '14px 0',
        borderRadius: '5px',
        color: '#000',
        '&:hover': {
          background: 'rgba(84, 170, 245, 0.1)'
        },
        '&.active': {
          background: 'rgba(84, 170, 245, 1)',
          color: '#fff'
        }
      }
    },
    [theme.breakpoints.down('xl')]: {
      '& .meeting-duration-box': {
        '& .specific-time': {
          width: '100%',
          marginTop: '24px',
          '& p': {
            display: 'none'
          },
          '& .MuiInputBase-root': {
            width: '100% !important'
          },
        }
      },
    },
    [theme.breakpoints.up('md')]: {
      '& .description-field': {
        '& p': {
          display: 'none'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .file-dropzone-box': {
        marginBottom: '20px',
        '& > p': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          marginBottom: '16px !important'
        }
      },
      '& .description-field': {
        marginTop: '10px',
        '& h6': {
          fontSize: '14px !important'
        },
        '& p': {
          fontSize: '14px !important',
          marginBottom: '15px !important'
        },
        '& .MuiInputBase-root': {
          height: '125px !important'
        }
      },
      '& .meeting-duration-box': {
        '& h6': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          marginBottom: '16px !important'
        },
        '& .specific-time': {
          '& .MuiInputBase-root': {
            fontSize: '14px !important',
          },
          '& .MuiInputBase-input': {
            padding: '13px 23px'
          }
        },
        '& .meeting-duration-btn': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          padding: '10px 0 !important',
        }
      },
    }
  },
  videoLocationBox: {
    marginTop: '20px',
    padding: '20px 45px 30px 30px',
    '& .title-box': {
      marginBottom: '32px',
      '& h6': {
        marginBottom: '6px'
      }
    },
    '& .location-item': {
      cursor: 'pointer' as const,
      '& .img-box': {
        width: '66px',
        height: '66px',
        borderRadius: '5px',
        background: '#FBFBFB',
        border: '1px solid #F1F1F1'
      },
      '& .text-box': {
        marginLeft: '28px',
        '& h6': {
          marginBottom: '4px'
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '20px 0 0'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      marginTop: '23px',
      '& .title-box': {
        marginBottom: '16px',
        '& h6': {
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#000'
        },
        '& p': {
          color: "#000"
        }
      },
      '& .location-item': {
        '& .img-box': {
          width: '31px !important',
          height: '31px !important'
        },
        '& .text-box': {
          marginLeft: '14px !important',
          '& h6': {
            marginBottom: '0px !important',
            fontSize: '14px',
            lineHeight: '20px'
          },
          '& p': {
            fontSize: '13px'
          }
        }
      }
    }
  },
  videoDailyAvailability: {
    marginTop: '21px',
    padding: '35px 42px 38px 30px',
    '& .title-box': {
      marginBottom: '32px',
      '& h6': {
        marginBottom: '6px'
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '35px 0 0'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      marginTop: '58px',
      '& .title-box': {
        marginBottom: '21px',
        '& h6': {
          fontSize: '14px',
          color: '#000',
          lineHeight: '20px'
        },
        '& p': {
          color: '#000'
        }
      }
    }
  },
  videoDailyItemHeader: {
    '& .day-title': {
      marginLeft: '20px'
    },
    '& .delete-btn': {
      minWidth: 'unset',
      padding: '0',
      marginLeft: 'auto'
    },
    '& .unavailable': {
      marginLeft: 'auto'
    },
    '& .MuiSwitch-root': {
      width: '73.3px',
      height: '46px',
      borderRadius: '27px'
    },
    '& .MuiSwitch-switchBase': {
      margin: '8.5px 10px'
    },
    '& .Mui-checked .MuiSwitch-thumb': {
      background: 'linear-gradient(to right, #161FE4, #BB14E2)'
    },
    '& .MuiSwitch-thumb': {
      background: '#000',
      width: '32px',
      height: '29px',
      boxShadow: 'none'
    },
    '& .MuiSwitch-track': {
      backgroundColor: 'rgba(206, 206, 206, 0.13)',
      border: '0'
    },
    [theme.breakpoints.down('md')]: {
      '& .day-title': {
        marginLeft: '15px',
        fontSize: '14px',
        lineHeight: '20px'
      },
      '& .delete-btn': {
        '& .filled-trash-icon': {
          width: '15.74px',
          height: '15.74px'
        }
      },
      '& .unavailable': {
        fontSize: '14px',
        lineHeihgt: '20px'
      },
      '& .MuiSwitch-root': {
        width: '57.54px',
        height: '36px'      
      },
      '& .MuiSwitch-switchBase': {
        margin: '7px 7.8px'
      },
      '& .MuiSwitch-thumb': {
        width: '25px',
        height: '22px'
      }      
    }
  },
  videoDailyItemContent: {
    paddingTop: '20px',
    '& .daily-item-form': {
      '& > p': {
        margin: '0 22px'
      },
      '& .MuiSelect-select': {
        paddingLeft: '23px'
      }
    },
    '& .add-btn': {
      textTransform: 'none',
      color: '#000',
      fontSize: "16px"
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '16px',
      '& .daily-item-form': {
        '& > p': {
          fontSize: '12px',
          lineHeight: '17px',
          margin: '0 18px !important'
        },
        '& .MuiSelect-select': {
          paddingLeft: '18px !important'
        }
      },
      '& .add-btn': {      
        fontSize: "14px"
      }
    }
  },
  videoRangeSection: {
    marginTop: '21px',
    padding: '35px 44px 25px 36px',
    '& .title-box': {
      marginBottom: '25px',
      '& h6': {
        marginBottom: '6px'
      }
    },
    '& .exclude-days-section': {
      marginBottom: '26px',
      '& .add-days-btn': {
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000',
        textTransform: 'none',
        padding: '16px 0',
        borderColor: '#D5D5D5',
        borderRadius: '46px',
        marginTop: '25px',
        '& .MuiButton-startIcon': {
          position: 'absolute',
          left: '36px'
        }
      }
    },
    '& .exclude-days-header': {
      marginBottom: '18px',
      '& .MuiLink-root': {
        display: 'flex',
        alignItems: 'center',
        textTransform: 'none',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#BB14E2',
        cursor: 'pointer',
        '& > span': {
          marginRight: '17px !important'
        },
        '&:hover': {
          opacity: '0.7',
          transition: 'opacity .3s'
        }
      }
    },
    '& .exclude-day-item': {
      '& .date-picker': {
        flex: '1',
        marginRight: '13.5px',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#F1F1F1'
        },
        '& .MuiInputBase-root': {
          height: '60px',
          borderRadius: '5px',
          background: '#FBFBFB'
        },
        '& .MuiInputBase-input': {
          paddingLeft: '38.6px',
          fontSize: '16px',
          color: '#000'
        }
      },
      '& .delete-btn': {
        background: '#EC3868',
        height: '60px',
        width: '92px',
        borderRadius: '8px',
        '&:hover': {
          opacity: '0.7',
          transition: 'opacity .3s'
        }
      }
    },
    '& .buffer-section': {
      '& .desc-text': {
        marginBottom: '23px'
      }
    },
    '& .timezone-section': {
      marginTop: '23px',
      '& h6': {
        marginBottom: '20px'
      },
      '& .timezone-option': {
        '& p': {
          marginLeft: '16.6px'
        },
        '& .radio-icon': {
          width: '29px',
          height: '29px'
        }
      }
    },
    '& .timezone-input': {
      marginTop: '14px',
      '& p': {
        marginLeft: '13.6px'
      },
      '& .MuiInputBase-root': {
        width: '80px',
        height: '45px'
      },
      '& .MuiInputBase-input': {
        paddingLeft: '22.6px',
        paddingRight: ''
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '35px 0 25px',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      '& .buffer-section': {
        '& .desc-text, .buffer-form': {
          order: '1'
        },
        '& .timezone-section': {
          marginTop: '0',
          paddingBottom: '18.5px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          marginBottom: '20px'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 0 6px',
      '& .title-box': {
        marginBottom: '21px',
        '& h6': {
          fontSize: '14px',
          color: '#000',
          lineHeight: '20px'
        },
        '& p': {
          color: '#000'
        }
      },
      '& .exclude-days-section': {
        marginBottom: '20px',
        '& .add-days-btn': {
          fontSize: '15px !important',
          fontWeight: '700',
          lineHeight: '20px',
          padding: '12px 0 !important',
          marginTop: '20px !important',
          '& .MuiButton-startIcon': {
            left: '25px !important'
          },
          '& .plus-icon': {
            width: '10.3px',
            height: '10.3px'
          }
        }
      },
      '& .exclude-days-header': {
        marginBottom: '16px',
        '& .MuiLink-root': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          '& > span:first-child': {
            marginRight: '12px !important'
          }
        },
        '& h6': {
          fontSize: '14px',
          lineHeight: '20px'
        }
      },
      '& .exclude-day-item': {
        '& .delete-btn': {
          height: '53px !important',
          width: '82px !important'
        },
        '& .date-picker': {
          '& .MuiInputBase-root': {
            height: '53px !important'
          },
          '& .MuiInputBase-input': {
            paddingLeft: '22px !important',
            fontSize: '14px !important'
          }
        },
      },
      '& .buffer-section': {
        '& .desc-text': {
          marginBottom: '16px !important',
          color: '#000'
        }
      },
      '& .timezone-section': {
        '& h6': {
          marginBottom: '8px !important',
          fontSize: '14px',
          lineHeight: '20px'
        },
        '& .timezone-option': {
          '& p': {
            marginLeft: '10px !important',
            fontSize: '14px',
            lineHeight:' 20px'
          },
          '& .radio-icon': {
            width: '22px !important',
            height: '22px !important'
          },
          '& .radio-checked-icon': {
            width: '22px',
            height: '22px'
          }
        }
      },
      '& .timezone-input': {
        marginTop: '22px',
        '& p': {
          marginLeft: '10.3px !important',
          fontSize: '14px',
          lineHeight: '20px'
        },
        '& .MuiInputBase-root': {
          width: '50px !important',
          height: '34px !important'
        },
        '& .MuiInputBase-input': {
          paddingLeft: '17px !important',
          paddingRight: '17px !important',
          fontSize: '12px',
          lineHeight: '17px'
        }
      },
    }
  },
  excludeDatePicker: {
    '& .MuiInputAdornment-root': {
      display: 'none'
    },
    '& .MuiInputBase-input': {
      cursor: 'pointer'
    }
  }
}));

export default addProductPageStyles;
