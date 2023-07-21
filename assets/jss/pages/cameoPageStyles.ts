import { Theme } from "@mui/system";

const cameoPageStyles = ((theme: Theme) => ({
  wrapper: {
    padding: '28px 45px 57px',
    backgroundColor: '#FCFCFC',
    [theme.breakpoints.down('md')]: {
      padding: '22px 25px 50px'
    }
  },
  leftSection: {
    width: '67.8%',
    [theme.breakpoints.down('xl')]: {
      width: 'calc(100% - 570px)'
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    }
  },
  rightSection: {
    width: '31%',
    [theme.breakpoints.down('xl')]: {
      width: '550px'
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    }
  },
  offeredServices: {
    padding: '20px 35px 24px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    '& .header': {
      marginBottom: '20px',
      '& h6': {
        fontSize: '20px',
        lineHeight: '28px'
      },
      '& .MuiButtonBase-root': {
        boxShadow: 'none',
        backgroundColor: '#F8F8F8',
        borderRadius: '33px',
        color: '#000',
        textTransform: 'none',
        fontSize: '17px',
        lineHeight: '24px',
        padding: '11.5px 22.5px',
        fontWeight: '600',
        '& svg': {
          marginRight: '14px'
        },
        '&:hover': {
          opacity: '0.7'
        }
      }
    },
    '& .book-btn': {
      textTransform: 'none',
      boxShadow: 'none',
      marginBottom: '20px',
      padding: '18px 40px 18px 30px',
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: '600',
      borderRadius: '33px',
      justifyContent: 'normal',
      background: 'linear-gradient(to right, #BB14E2, #161FE4)',
      '& .btn-text': {
        flex: '1',
        textAlign: 'left'
      },
      '& svg': {
        marginRight: '30px'
      },
      '& .price': {
        marginLeft: 'auto',
        fontWeight: '400'
      },
      '&:hover': {
        opacity: '0.7',
        transition: 'opacity 0.3s'
      }
    },
    '& .business-btn': {
      marginBottom: '0',
      background: '#fff',
      color: '#000',
      border: '1px solid #EAEAEA'
    },
    [theme.breakpoints.down('md')]: {
      padding: '15px 20px 20px',
      '& .header': {
        marginBottom: '25px',
        '& h6': {
          fontSize: '16px !important',
          lineHeight: '23px !important'
        },
        '& .MuiButtonBase-root': {
          fontSize: '13px !important',
          lineHeight: '20px !important',
          padding: '9.5px 20px !important',
          '& svg': {
            marginRight: '12px !important',
            width: '10px',
            height: '12.55px'
          }
        }
      },
      '& .book-btn': {
        marginBottom: '14px',
        padding: '11.5px 20px 11.5px 23px',
        fontSize: '15px',
        lineHeight: '21px',
        '& svg': {
          marginRight: '15.6px !important',
          width: '21.6px',
          height: '12.1px'
        },
        '& .price': {
          fontSize: '14px'
        }
      }
    }
  },
  moneyGuarantee: {
    padding: '26px 52px 32px 32px',
    background: '#fff',
    borderRadius: '16px',
    marginTop: '22px',
    '& .payment-links': {
      '& .MuiLink-root': {
        transition: 'all .3s',
        '&:hover': {
          transition: 'all .3s',
          transform: 'scale(1.2)'
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  detailBox: {
    backgroundColor: '#fff',
    padding: '33px 45px 27px 34px',
    borderRadius: '16px',
    '& .user-avatar': {
      width: 'fit-content',
      border: '8px solid #fff',
      '& > span': {
        borderRadius: '11px !important'
      }
    },
    '& .detail-content': {
      flex: '1',
      marginLeft: '38px'
    },
    '& .title': {
      marginBottom: '10px',
      '& h6': {
        fontSize: '25px',
        lineHeight: '35px'
      },
      '& span': {
        margin: '0 19.5px 0 19.5px',
        display: 'block',
        height: '16px',
        width: '1px',
        background: '#707070'
      },
      '& p': {
        fontSize: '20px',
        lineHeight: '28px'
      }
    },
    '& .description': {
      fontSize: '17px',
      lineHeight: '26px',
      marginBottom: '26px'
    },
    '& .details': {
      columnGap: '40px',
      '& .detail-item-content': {
        marginLeft: '20px',
        '& h6': {
          marginBottom: '2px',
          fontSize: '17px',
          lineHeight: '24px'
        },
        '& p': {
          fontSize: '16px',
          lineHeight: '23px'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '18px 28px 17px 28px',
      flexDirection: 'column',
      '& .user-avatar': {
        border: '6px solid #fff'
      },
      '& .detail-content': {
        marginLeft: '0'
      },
      '& .title': {
        marginTop: '14px',
        paddingBottom: '14.5px',
        marginBottom: '13.5px',
        flexDirection: 'column',
        '& h6': {
          fontSize: '19px !important',
          lineHeight: '27px !important'
        },
        '& span': {
          display: 'none !important'
        },
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        },
        '&::before': {
          position: 'absolute',
          content: `''`,
          width: '77%',
          height: '1px',
          backgroundColor: '#F5F5F5',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)'
        }
      },
      '& .description': {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '22px',
        textAlign: 'center'
      },
      '& .details': {
        columnGap: '0',
        '& .detail-item': {
          width: '50%'
        },
        '& .detail-item-content': {
          marginLeft: '10px !important',
          '& h6': {
            fontSize: '14px !important',
            lineHeight: '20px !important'
          },
          '& p': {
            fontSize: '12px !important',
            lineHeight: '17px !important'
          }
        }
      },
    },
    '@media screen and (max-width: 350px)': {
      '& .details': {
        flexWrap: 'wrap',
        rowGap: '16px',
        '& .detail-item': {
          width: '100%'
        }
      }
    }
  },
  recentOrders: {
    padding: '20px 30px 32px',
    background: '#fff',
    borderRadius: '16px',
    marginTop: '23px',
    '& h3': {
      fontSize: '20px',
      lineHeight: '28px',
      position: 'absolute',
      left: '35px',
      top: '25px'
    },
    '& .carousel-wrapper': {
      overflow: 'hidden',
      '& .react-multi-carousel-list': {
        marginLeft: '-17px',
        marginRight: '-17px'
      }
    },
    '& .carousel-item': {
      width: '242px !important',
      boxSizing: 'border-box',
      paddingLeft: '17px',
      paddingRight: '17px'
    },
    '& .carousel-button-group': {
      marginBottom: '22px',
      width: 'fit-content',
      marginLeft: 'auto',
      columnGap: '9px',
      display: 'flex'
    },
    '& .carousel-arrow-btn': {
      padding: '0',
      minWidth: 'unset',
      borderRadius: '50%'
    },
    [theme.breakpoints.down('md')]: {
      padding: '20px 20px 26px',
      marginTop: '13px',
      '& h3': {
        fontSize: '16px',
        lineHeight: '23px',
        top: '27px',
        left: '20px'
      },
      '& .carousel-wrapper': {
        '& .react-multi-carousel-list': {
          marginLeft: '-10px !important',
          marginRight: '-10px !important'
        }
      },
      '& .carousel-item': {
        width: '228px !important',
        paddingLeft: '10px',
        paddingRight: '10px'
      }
    }
  },
  recentOrderItem: {
    width: '100%',
    height: '303px',
    '& video': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '14px'
    },
    '& .MuiButtonBase-root': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      padding: '0',
      minWidth: 'unset',
      width: '48.1px',
      height: '48.1px',
      '&:hover': {
        '& > span:first-child': {
          transform: 'scale(1.2)',
          transition: 'all .3s'
        }
      }
    }
  },
  questionsBox: {
    marginTop: '24px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '32px 30px 24px',
    '& .questions': {
      '&::before': {
        content: `''`,
        position: 'absolute',
        width: '1px',
        height: '100%',
        background: 'rgba(112, 112, 112, 0.11)',
        top: '0',
        left: '50%',
        transform: 'transitionX(-50%)'
      }
    },
    '& .question-item': {
      width: 'calc(50% - 43px)',
      '& .question-title': {
        backgroundColor: '#565F72',
        borderRadius: '11px',
        padding: '21px 34px',
        marginBottom: '18px',
        '& h3': {
          fontSize: '17px',
          lineHeight: '24px'
        }
      },
      '& p': {
        fontSize: '17px',
        lineHeight: '24px'
      }
    },
    '& .show-more-btn': {
      marginTop: '28px',
      textTransform: 'none',
      color: '#000',
      fontSize: '17px',
      lineHeight: '24px',
      background: '#F7F7F7',
      borderRadius: '13px',
      padding: '18px 0',
      fontWeight: '600',
      '&:hover': {
        opacity: '0.7',
        transition: 'opacity .3s'
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '13px',
      padding: '25px 22px 22px',
      '& .questions': {
        rowGap: '23px',
        '&::before': {
          display: 'none'
        }
      },
      '& .question-item': {
        width: '100%',
        '& .question-title': {
          padding: '16px 20px 18px !important',
          marginBottom: '13px !important',
          '& h3': {
            fontSize: '14px !important',
            lineHeight: '20px !important'
          }
        },
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        }
      },
      '& .show-more-btn': {
        display: 'none'
      }
    }
  },
  formCard: {
    backgroundColor: '#fff',
    padding: '24px 40px 30px',
    borderRadius: '16px',
    marginTop: '23px',
    '& .form-title': {
      fontSize: '20px',
      lineHeight: '28px'
    },
    '& .text-field, .select-field': {
      '& .form-label': {
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '23px',
        color: '#474461',
        marginBottom: '14px'
      },
      '& .MuiInputBase-root': {
        borderRadius: '5px'
      },
      '& .MuiInputBase-input': {
        padding: '17.5px 30px 18.5px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#E3E3E3'
      },
      '& .MuiSelect-select': {
        fontSize: '16px'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '22px 22px 22px',
      marginTop: '13px',
      '& .text-field, .select-field': {
        '& .form-label': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          marginBottom: '10px !important'
        },
        '& .MuiInputBase-input': {
          padding: '12px 15.3px 12px !important'
        },
        '& .MuiSelect-select': {
          lineHeight: '20px !important',
          fontSize: '14px !important'
        },
        '& .select-anchor': {
          width: '12px !important'
        },
        '& textarea.MuiInputBase-input': {
          height: '135px !important'
        }
      },
      '& .text-length': {
        display: 'none'
      }
    }
  },
  forForm: {
    '& .form-title': {
      marginBottom: '29px'
    },
    [theme.breakpoints.down('md')]: {
      '& .form-title': {
        marginBottom: '24px'
      }
    }
  },
  fromForm: {
    '& .form-title': {
      marginBottom: '24px'
    },
    [theme.breakpoints.down('md')]: {
      '& .form-title': {
        marginBottom: '25px'
      }
    }
  },
  cameoCategoryBtn: {
    '&.MuiButtonBase-root': {
      padding: '13px',
      justifyContent: 'normal' as const,
      textTransform: 'none' as const,
      fontSize: '18px',
      lineHeight: '25px',
      fontWeight: '600',
      color: '#474461',
      border: '1px solid #EAEAEA',
      borderRadius: '8px',
      '& .icon-box': {
        display: 'flex',
        width: '49px',
        height: '49px',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FCFCFC',
        borderRadius: '5px',
        marginRight: '23px'
      }
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiButtonBase-root': {
        padding: '10.2px',
        fontSize: '14px',
        lineHeight: '20px',
        '& .icon-box': {
          width: '38.6px !important',
          height: '38.6px !important',
          marginRight: '10px !important'
        }
      }
    }
  },
  confirmCheckbox: {
    marginTop: '26px',
    '& .checkbox-icon': {
      width: '27.24px',
      height: '27.24px',
      borderRadius: '6px',
      backgroundColor: '#F9F9F9',
      '& .MuiSvgIcon-root': {
        fontSize: '20px'
      }
    },
    '& .MuiCheckbox-root': {
      padding: '0'
    },
    '& p': {
      fontSize: '16px',
      marginLeft: '17px',
      cursor: 'pointer' as const
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '19px',
      marginBottom: '3px',
      '& .checkbox-icon': {
        width: '22px',
        height: '22px',
        '& .MuiSvgIcon-root': {
          fontSize: '16px !important'
        }
      },
      '& p': {
        fontSize: '14px',
        marginLeft: '14px',
        lineHeight: '20px'
      }
    }
  },
  purchaseBtn: {
    '&.MuiButtonBase-root': {
      marginTop: '34px',
      fontSize: '19px',
      lineHeight: '27px'
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiButtonBase-root': {
        marginTop: '13px',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 'bold',
        padding: '0',
        height: '42px'
      }
    }
  },
  rightOffer: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  leftOffer: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  selectedCategory: {
    '&.MuiButtonBase-root': {
      background: 'linear-gradient(to right, #BB14E2, #161FE4)',
      color: '#fff'
    }
  }
}));

export default cameoPageStyles;
