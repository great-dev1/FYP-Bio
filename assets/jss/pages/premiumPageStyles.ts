import { Theme } from "@mui/system";
import bannerImg from 'assets/img/product/discord-banner.webp';
import checkIcon from 'assets/img/premium/plan-card-option-mark.svg';
import mdCheckIcon from 'assets/img/premium/plan-card-option-mark-md.svg';
import arrowRightIcon from 'assets/img/premium/arrow-right.svg';
import arrowRightMdIcon from 'assets/img/premium/arrow-right-md.svg';

const premiumPageStyles = ((theme: Theme) => ({
  pageWrapper: {
    '& .navbar': {
      '& .navbar-links': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .navbar': {
        '& .sign-btn, .start-btn': {
          display: 'none'
        }
      }
    }
  },
  wrapper: {
    backgroundColor: '#FCFCFC'
  },
  bannerBox: {
    backgroundImage: `url(${bannerImg.src})`,
    height: '523px',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: '87px',
    [theme.breakpoints.up('md')]: {
      '& p': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      backgroundImage: 'unset',
      paddingTop: '29px',
      height: 'auto',
      paddingLeft: '40px',
      paddingRight: '40px',
      '& h1': {
        fontSize: '25px',
        lineHeight: '35px',
        color: '#000',
        marginBottom: '20px'
      }
    }
  },
  mainContents: {
    width: 'calc(100% - 210px)',
    background: '#FCFCFC',
    borderRadius: '36px 36px 0 0',
    padding: '55px 36px 97px',
    marginTop: '-330px',
    [theme.breakpoints.down('xl')]: {
      width: 'calc(100% - 100px)',
      paddingRight: '24px',
      paddingLeft: '24px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: '27px',
      padding: '41px 26px 35px'
      
    }
  },
  plansSection: {
    paddingTop: '80px',
    [theme.breakpoints.down('md')]: {
      paddingTop: '0',
      '& .MuiGrid-container': {
        flexDirection: 'column-reverse' as const
      },
      '& .free-card-wrapper': {
        display: 'none'
      }
    }
  },
  planCard: {
    padding: '77px 45px 56px',
    boxShadow: '-15px -15px 50px rgba(232, 232, 232, 0.17)',
    backgroundColor: '#fff',
    marginTop: '23px',
    '& .plan-logo': {
      left: '50%',
      transform: 'translateX(-50%)',
      top: '-64px'
    },
    '& .plan-price': {
      marginBottom: '27.5px',
      '& .price': {
        '& span': {
          marginRight: '13px'
        }
      },
      '& .unit': {
        '& span': {
          marginLeft: '6px'
        }
      }
    },
    '& .divider': {
      margin: '38.5px 0 36px',
      height: '1px',
      background: 'rgba(112, 112, 112, 0.24)',
      width: '100%'
    },
    '& .options-list': {
      rowGap: '36px'
    },
    '& .option-item': {
      paddingLeft: '50px',
      minHeight: '34px',
      '&::before': {
        content: `''`,
        width: '34px',
        height: '34px',
        background: `url(${checkIcon.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        position: 'absolute'
      }
    },
    '& .join-btn': {
      marginTop: '55px',
      boxShadow: 'none',
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: '700',
      color: '#fff',
      textTransform: 'none',
      borderRadius: '46px',
      padding: '15px 0',
      background: '#000',
      '&:hover': {
        opacity: '0.7',
        transition: 'all .3s'
      }
    },
    '&.free-plan': {
      borderRadius: '46px 0 0 46px'
    },
    [theme.breakpoints.down('xl')]: {
      padding: '51px 28px 31px',
      '& .plan-logo': {
        width: '78px',
        height: '78px',
        top: '-44px'
      },
      '& .plan-title': {
        fontSize: '18px',
        lineHeight: '25px',
        marginBottom: '2px'
      },
      '& .plan-price': {
        marginBottom: '13.7px',
        '& .price': {
          '& h3': {
            fontSize: '31px',
            lineHeight: '44px'
          },
          '& span': {
            marginRight: '11px !important',
            fontSize: '24px'            
          }
        },
        '& .unit': {
          '& h4': {
            fontSize: '18px',
            lineHeight: '25px'
          },
          '& span': {
            fontSize: '14px',
            lineHeight: '20px'
          }
        }
      },
      '& .plan-desc': {
        fontSize: '14px',
        lineHeight: '20px'
      },
      '& .divider': {
        margin: '22.7px 0 20.7px',
      },
      '& .options-list': {
        rowGap: '21px'
      },
      '& .option-item': {
        paddingLeft: '31px',
        minHeight: '21px',
        '& p': {
          fontSize: '14px',
          lineHeight: '20px'
        },
        '&::before': {
          width: '21px !important',
          height: '21px !important',
          background: `url(${mdCheckIcon.src}) !important`
        }
      },
      '& .join-btn': {
        marginTop: '33.3px',
        fontSize: '15px',
        lineHeight: '21px',
        padding: '10.3px 0',
      },
      '&.free-plan': {
        borderRadius: '18px 0 0 18px'
      },
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '0',
      borderRadius: '18px !important',
      '& .plan-logo': {       
        top: '-39px'
      },
    }
  },
  starterPlanCard: {
    borderRadius: '46px',
    background: 'linear-gradient(to right, #BB14E2, #161FE4)',
    boxShadow: 'none',
    marginTop: '0',
    paddingTop: '61px',
    paddingBottom: '50px',
    '& .plan-logo': {
      top: '-80px'
    },
    '& .plan-title': {
      color: 'rgba(255, 255, 255, 0.72)'
    },
    '& .plan-price': {
      '& span, h3': {
        color: '#fff'
      }
    },
    '& .unit h4': {
      color: '#fff'
    },
    '& .plan-desc': {
      color: '#fff'
    },
    '& .divider': {
      background: 'rgba(255, 255, 255, 0.57)',
      marginBottom: '40px'
    },
    '& .options-list': {
      rowGap: '38.5x'
    },
    '& .option-item': {
      minHeight: '32.3px',
      paddingLeft: '48px',
      '& p': {
        fontSize: '22px',
        lineHeight: '31px',
        color: '#fff'
      },
      '&::before': {
        width: '32.3px',
        height: '32.3px'
      }
    },
    '& .join-btn': {
      marginTop: '115.5px',
      background: '#fff',
      color: '#5C1BE3'
    },
    [theme.breakpoints.down('xl')]: {
      borderRadius: '18px',
      paddingTop: '40px',
      paddingBottom: '33px',
      '& .plan-logo': {
        top: '-50px'
      },
      '& .plan-price': {
        marginBottom: '17px'
      },
      '& .divider': {
        margin: '24.5px 0 23.5px'
      },
      '& .options-list': {
        rowGap: '30px'
      },
      '& .option-item': {
        minHeight: '22px',
        paddingLeft: '29.4px',
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
        },
        '&::before': {
          width: '21px',
          height: '21px'
        }
      },
      '& .join-btn': {
        marginTop: '50px'        
      },
    },
    [theme.breakpoints.down('md')]: {
      background: '#fff',
      '& .plan-title': {
        color: '#97989E'
      },
      '& .plan-price': {
        '& span, h3': {
          color: '#000 !important'
        }
      },
      '& .unit h4': {
        color: '#000'
      },
      '& .plan-desc': {
        color: 'rgba(0, 0, 0, 0.9)'
      },
      '& .plan-logo': {
        top: '-42px'
      },
      '& .join-btn': {
        marginTop: '27.4px',
        background: '#000',
        color: '#fff'
      },
      '& .option-item': {    
        '& p': {        
          color: '#000 !important'
        }      
      },
      '& .divider': {
        background: 'rgba(112, 112, 112, 0.24)'       
      },
    }
  },
  premiumPlanCard: {
    borderRadius: '0 46px 46px 0',
    '& .divider': {
      margin: '26.5px 0 27.5px'
    },
    '& .join-btn': {
      marginTop: '76px'
    },
    [theme.breakpoints.down('xl')]: {
      borderRadius: '0 18px 18px 0',
      '& .divider': {
        margin: '14.7px 0 24.7px'
      },
      '& .join-btn': {
        marginTop: '30px'
      }
    },
    [theme.breakpoints.down('md')]: {
      background: 'linear-gradient(to right, #BB14E2, #161FE4)',
      '& .plan-title': {
        color: 'rgba(255, 255, 255, 0.72)'
      },
      '& .plan-price': {
        '& span, h3': {
          color: '#fff'
        }
      },
      '& .unit h4': {
        color: '#fff'
      },
      '& .plan-desc': {
        color: '#fff'
      },
      '& .divider': {
        background: 'rgba(255, 255, 255, 0.57)'      
      },
      '& .option-item': {      
        '& p': {
          color: '#fff'
        }
      },
      '& .join-btn': {
        background: '#fff',
        color: '#5C1BE3'
      }
    }
  },
  comparisonSection: {
    marginTop: '55px'
  },
  comparisonHeader: {
    '& .title-col': {
      width: '25.38%'
    },
    '& .plan-col': {
      paddingTop: '20px',
      paddingBottom: '24px',
      '& .plan-title': {
        marginBottom: '5px'
      },
      '& .plan-price': {
        marginBottom: '10px',
        '& p': {
          marginLeft: '8px'
        },
        '& h5': {
          marginRight: '7px'
        }
      },
      '& .join-btn': {
        textTransform: 'none',
        fontSize: '17px',
        lineHeight: '24px',
        fontWeight: '400',
        padding: '0',
        width: '160px',
        height: '58px',
        borderRadius: '46px',
        color: '#000',
        borderColor: '#ADADAD',
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'all .3s',
          background: 'unset'
        }
      }
    },
    '& .free-col': {
      width: '21.8%',
      background: 'linear-gradient(to right, rgba(219, 219, 255, 0.4), rgba(245, 236, 248, 0.4))',
      borderRadius: '40px 0 0'      
    },
    '& .starter-col': {
      width: '31%',
      background: 'linear-gradient(to right, #BB14E2, #161FE4)',
      '& .join-btn': {
        background: '#fff !important',
        color: '#000',
        border: '0'
      }
    },
    '& .premium-col': {
      width: '21.8%',
      background: 'linear-gradient(to right, rgba(219, 219, 255, 0.4), rgba(245, 236, 248, 0.4))',
      borderRadius: '0 40px 0 0'
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: '32px',
      '& .plan-col': {
        display: 'none'
      },
      '& .title-col': {
        width: '100%',
        '& h3': {
          textAlign: 'center'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .title-col': {
        '& h3': {
          fontSize: '25px',
          lineHeight: '35px'
        }
      }
    }
  },
  comparisonContents: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 20px 50px rgb(0 0 0 / 3%)',
    '& .comparison-row:nth-child(odd)': {
      '& .comparison-row-header': {
        background: 'linear-gradient(to right, rgba(245, 236, 248, 0.1), rgba(219, 219, 255, 0.1))'
      }
    },
    '& .comparison-row:first-child .comparison-row-header': {
      borderRadius: '16px 16px 0 0'
    },
    '& .comparison-row:last-child': {
      borderBottom: '0',
      '& .comparison-row-header': {
        borderRadius: '0 0 16px 16px'
      },
      '&::before': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('lg')]: {
      borderRadius: '18px',
      boxShadow: '-15px -15px 50px rgb(232, 232, 232, 0.17)',
      '& .comparison-row:first-child .comparison-row-header': {
        borderRadius: '18px 18px 0 0'
      },
      '& .comparison-row:last-child .comparison-row-header': {
        borderRadius: '0 0 18px 18px'
      }
    }
  },
  comparisonRow: {
    borderBottom: '1px solid rgba(112, 112, 112, 0.07)',
    '& .comparison-row-content': {
      padding: '16.5px 34px 20px 47px',
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: 'calc(100% - 79.5px)',
        height: '1px',
        backgroundColor: 'rgba(112, 112, 112, 0.1)',
        top: '0',
        left: '47px'
      },
    },
    '&.opened': {
      '& .comparison-row-header': {
        background: '#fff !important',
        '& .starter-col': {
          bottom: '12px'
        }
      },
      '& .action-btn': {
        transform: 'rotate(90deg)',
        transition: 'all .3s'
      }
    },
    '& .disable-mark': {
      width: '44px',
      height: '44px',
      background: 'rgba(235, 95, 95, 0.04)',
      borderRadius: '50%'
    },
    '& .enable-mark': {
      width: '44px',
      height: '44px',
      background: 'rgba(154, 216, 81, 0.04)',
      borderRadius: '50%'
    },
    [theme.breakpoints.down('lg')]: {
      borderBottom: '0',
      '&.opened': {
        '& .comparison-row-header': {
          paddingBottom: '12px'
        }
      },      
      '& .comparison-row-header': {
        background: '#fff !important'
      }, 
      '& .comparison-row-content': {
        padding: '0 24px 23px 21px',
        '& p': {
          fontSize: '14px',
          lineHeight: '20px'
        },
        '&::before': {
          display: 'none'
        }
      },
      '& .disable-mark': {
        width: '36px',
        height: '36px',
        marginTop: '10.6px',
        '& > span': {
          width: '12.25px !important',
          height: '12.25px !important'
        }
      },
      '& .enable-mark': {
        width: '36px',
        height: '36px',
        marginTop: '10.6px',
        '& > span': {
          width: '16.71px !important',
          height: '12.64px !important'
        }     
      },
      '&::before': {
        content: `''`,
        width: 'calc(100% - 21.5px - 26.5px)',
        left: '21.5px',
        height: '1px',
        background: '#ECECEC',
        bottom: '0',
        position: 'absolute',
        zIndex: '1'
      }
    }
  },
  comparisonRowHeader: {
    padding: '26px 0 28px',
    '& .title-col': {
      paddingLeft: '47px',
      width: '25.38%',
      '& .action-btn': {
        width: '36px',
        minWidth: 'unset',
        height: '36px',
        backgroundImage: `url(${arrowRightIcon.src})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        borderRadius: '50%',
        marginRight: '24px'
      }
    },
    '& .free-col': {
      width: '21.8%'
    },
    '& .starter-col': {
      width: '31%'      
    },
    '& .premium-col': {
      width: '21.8%'
    }, 
    [theme.breakpoints.up('lg')]: {
      '& .plan-col': {
        '& h6': {
          display: 'none'
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '18.7px 27px 18.7px 17.5px',
      justifyContent: 'space-between' as const,
      '& .title-col': {
        paddingLeft: '0',
        width: '100%',
        marginBottom: '15.6px',
        '& .action-btn': {
          width: '30px !important',
          height: '30px !important',
          backgroundImage: `url(${arrowRightMdIcon.src}) !important`,
          marginRight: '15px !important'
        },
        '& p': {
          fontSize: '15px',
          lineHeight: '21px',
          color: '#000',
          fontWeight: '500',
          flex: '1'
        }
      },
      '& .plan-col': {
        width: 'fit-content',
        flexDirection: 'column',
        '& p': {
          fontSize: '14px',
          fontWeight: '500',
          color: '#000',
          lineHeight: '20px',
          marginTop: '18.6px'
        }
      },
      '& .free-col': {
        marginLeft: '3.5px'
      },
      '& .starter-col': {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '18.7px'
      },
      '&::before': {
        width: 'calc(100% - 48px) !important',
        left: '21.5px !important',
        backgroundColor: '#ECECEC !important'
      },
    }
  }
}));

export default premiumPageStyles;
