import { Theme } from "@mui/system";

const checkoutPageStyles = ((theme: Theme) => ({
  wrapper: {
    backgroundColor: '#FCFCFC',
    padding: '47.5px 46px 55px',
    [theme.breakpoints.down('lg')]: {
      padding: '32px 26px 53px'
    }
  },
  leftSection: {
    width: '62.43%',
    boxSizing: 'border-box' as const,
    paddingRight: '68.5px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      order: '1',
      paddingRight: '0'
    }
  },
  rightSection: {
    width: '37.57%',
    boxSizing: 'border-box' as const,
    paddingTop: '17.5px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      paddingTop: '0',
      paddingBottom: '27px',
      borderBottom: '1px solid rgba(112, 112, 112, 0.2)',
      marginBottom: '26.5px'
    }
  },
  detailBox: {
    paddingLeft: '53px',
    borderLeft: '1px solid #CCCCCC',
    '& .user-name': {
      paddingBottom: '24.5px',
      borderBottom: '1px solid rgba(112, 112, 112, 0.25)',
      marginBottom: '27px',
      '& h3': {
        marginLeft: '20px'
      }
    },
    '& .description': {
      marginBottom: '40px'
    },
    '& .plan-card': {
      background: 'linear-gradient(to right, #BB14E2, #161FE4)',
      padding: '30.5px 45px 38.8px 47px',
      borderRadius: '28px'
    },
    '& .change-plan-btn': {
      marginBottom: '36px',
      background: '#434343',
      fontSize: '17px',
      lineHeight: '24px',
      padding: '17px',
      '&:hover': {
        opacity: '0.7',
        transition: 'opacity .3s'
      }
    },
    '& .detail-values': {
      '& .divider': {
        margin: '24px 0',
        width: '100%',
        height: '1px',
        background: 'rgba(112, 112, 112, 0.1)'
      }
    },
    [theme.breakpoints.down('xl')]: {
      paddingLeft: '24px'
    },
    [theme.breakpoints.down('lg')]: {
      borderLeft: '0', 
      paddingLeft: '0',
      '& .plan-card': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .user-name': {
        paddingBottom: '27.5px',
        marginBottom: '18px',
        '& h3': {
          marginLeft: '20px',
          fontSize: '20px',
          lineHeight: '28px'
        }
      },
      '& .description': {
        marginBottom: '42px',
        fontSize: '14px',
        lineHeight: '21px'
      },
      '& .detail-values': {
        paddingLeft: '4px',
        '& p, span': {
          fontSize: '16px',
          lineHeight: '23px'
        },
        '& .divider': {
          margin: '21px 0 20px !important'
        },
        '& .total-value': {
          '& P:last-child': {
            fontSize: '19px',
            lineHeight: '27px'
          }
        }
      }
    }
  },
  subscriptionForm: {
    '& h1': {
      marginBottom: '24px'
    },
    [theme.breakpoints.down('md')]: {
      '& h1': {
        marginBottom: '27px',
        fontSize: '18px',
        lineHeight: '25px'
      },
    }
  },
  subscriptionMethods: {
    width: '100%',
    paddingTop: '25px',
    paddingBottom: '12px',
    '& .react-horizontal-scrolling-menu--inner-wrapper': {
      position: 'relative'
    },
    '& .react-horizontal-scrolling-menu--separator': {
      width: '18px',
      minWidth: '18px'
    },
    '& .react-horizontal-scrolling-menu--arrow-right': {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: '9'
    },
    '& .react-horizontal-scrolling-menu--arrow-left': {
      position: 'absolute',
      left: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: '9'
    },
    '& .arrow-btn': {
      padding: '0',
      boxShadow: '0 3px 20px rgba(0, 0, 0, 0.1)'
    },
    '& .react-horizontal-scrolling-menu--scroll-container': {
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '-26px',
      marginRight: '-26px',
      width: 'calc(100% + 52px)',
      '& .react-horizontal-scrolling-menu--scroll-container': {
        paddingLeft: '26px',
        paddingRight: '26px'
      },
      '& .react-horizontal-scrolling-menu--arrow-right': {
        right: '26px'
      },
      '& .react-horizontal-scrolling-menu--arrow-left': {
        left: '26px'
      }
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '0',
      paddingBottom: '0'
    }
  },
  subscriptionItem: {
    padding: '24px 15px',
    borderRadius: '10px',
    background: 'rgba(241, 241, 241, 0.37)',
    width: '252px',
    boxSizing: 'border-box' as const,
    cursor: 'pointer' as const,
    '&.active': {
      background: 'linear-gradient(to right, rgba(187, 20, 226, 0.1), rgba(22, 31, 228, 0.1))',
    },
    '&:hover': {
      background: 'linear-gradient(to right, rgba(187, 20, 226, 0.1), rgba(22, 31, 228, 0.1))'
    },
    '& .MuiRadio-root': {
      padding: '0'
    },
    '& .img-box': {
      width: '43.3px',
      height: '43.3px',
      borderRadius: '5px',
      background: '#fff',
      marginLeft: '14px',
      marginRight: '14px',
      '&.credit-card-img': {
        rowGap: '5.6px'
      }
    },
    '& h3': {
      marginBottom: '4px'
    }
  },
  formSection: {
    marginTop: '38px',
    '& .expiry-date-label': {
      marginBottom: '20px'
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
      background: 'transparent',
      '& input::placeholder, textarea::placeholder': {
        color: 'rgba(0, 0, 0, 0.5) !important'
      },
    },
    '& .MuiInputBase-input': {
      padding: '18px 40px',
      fontSize: '16px',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.5)'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E3E3E3'
    },
    [theme.breakpoints.down('md')]: {
      '& .form-label': {
        fontSize: '15px',
        marginBottom: '15.6px',
        lineHeight: '21px'
      },
      '& .MuiInputBase-input': {
        padding: '15px 17.5px !important',
        fontSize: '14px',
        lineHeight: "20px"
      }
    }
  },
  payBtn: {
    '&.MuiButtonBase-root': {
      fontWeight: '700',
      marginTop: '170px'
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiButtonBase-root': {
        fontSize: '16px',
        marginTop: '33px'
      },
    }
  },
  expiryDate: {
    '& .expiry-select': {
      width: '50%'
    },
    '& .expiry-select:first-child': {
      '& .MuiInputBase-root': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderRight: '0'
      },
      '& .select-anchor': {
        right: '33px'
      }
    },
    '& .expiry-select:nth-child(2)': {
      '& .MuiInputBase-root': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderLeft: '0'
      },
      '& .MuiSelect-select': {
        paddingLeft: '30px'
      }
    },
    '&::before': {
      content: `''`,
      position: 'absolute',
      width: '1px',
      height: '32px',
      background: 'rgba(112, 112, 112, 0.23)',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },
    [theme.breakpoints.down('md')]: {
      '& .expiry-select:first-child': {
        '& .select-anchor': {
          right: '21.4px !important'
        }
      },
      '& .expiry-select:nth-child(2)': {
        '& .MuiSelect-select': {
          paddingLeft: '21.1px !important'
        }
      },
      '&::before': {
        height: '26.3px !important'     
      },
    }
  }
}));

export default checkoutPageStyles;
