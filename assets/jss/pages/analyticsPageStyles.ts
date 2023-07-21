import { Theme } from "@mui/system";

const analyticsPageStyles = ((theme: Theme) => ({
  wrapper: {
    backgroundColor: theme.palette.white.light,
    padding: '36px 40px 40px',
    borderRadius: '16px',
    [theme.breakpoints.down('md')]: {
      padding: '0',
      backgroundColor: 'transparent',
      borderRadius: '8px'
    }
  },
  borderCard: {
    borderRadius: '14px',
    border: '1px solid rgba(225, 225, 225, 0.5)',
    // height: '100%',
    backgroundColor: theme.palette.white.light,
    [theme.breakpoints.down('md')]: {
      borderRadius: '8px'
    }
  },
  topChart: {
    padding: '24px 24px 24px 32px',
    [theme.breakpoints.down('md')]: {
      padding: '12px 15px 15px'
    }
  },
  topChartHeader: {
    '& > h6': {
      display: 'none',
      fontSize: '15px',
      lineHeight: '20px',
      color: theme.palette.common.black
    },
    [theme.breakpoints.down('xl')]: {
      alignItems: 'center',
      '& > h6': {
        display: 'block'
      }
    }
  },
  topChartTab: {
    width: 'fit-content',
    '& .top-chart-tab-cell:last-child': {
      marginRight: '0'
    },
    '&::before': {
      content: `''`,
      width: '100%',
      height: '2px',
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
      position: 'absolute',
      bottom: '0',
      left: '0'
    },
    [theme.breakpoints.down('xl')]: {
      order: '1',
      marginTop: '14px',
      justifyContent: 'space-between',
      width: '100%'
    }
  },
  topChartTabCell: {
    color: theme.palette.common.black,
    cursor: 'pointer' as const,
    paddingBottom: '12px',
    marginRight: '55.6px',
    transition: 'all 0.3s',
    '& h1': {
      fontSize: '10px',
      lineHeight: '15px',
    },
    '& h2': {
      fontSize: '29px',
      lineHeight: '40px',
      marginBottom: '2.2px'
    },
    '& p': {
      fontSize: '12px',
      lineHeight: '17px',
      color: '#24CA99',
      '& > span': {
        marginRight: '6.7px !important'
      }
    },
    '&:hover': {
      backgroundColor: 'rgba(196, 196, 196, 0.2)',
      transition: 'all 0.3s'
    },
    '&:hover::before': {
      content: `''`,
      position: 'absolute',
      width: '100%',
      height: '2px',
      backgroundColor: '#6454F5',
      bottom: '0',
      left: '0'
    },
    [theme.breakpoints.down('xl')]: {
      marginRight: '0'
    },
    [theme.breakpoints.down('md')]: {
      '& h1': {
        fontSize: '13px',
        lineHeight: '19px',
      },
      '& h2': {
        fontSize: '18px',
        lineHeight: '25px',
        marginBottom: '0px'
      },
      '& p': {
        fontSize: '14px',
        lineHeight: '20x',
        '& > span': {
          marginRight: '4px !important',
          transform: 'rotate(-16deg)'
        }
      },
    }
  },
  topChartTabActive: {
    '&::before': {
      content: `''`,
      position: 'absolute',
      width: '100%',
      height: '2px',
      backgroundColor: '#6454F5',
      bottom: '0',
      left: '0'
    }
  },
  topChartInner: {
    paddingTop: '55.4px'
  },
  cardAction: {
    '& > p': {
      fontSize: '15px',
      lineHeight: '1',
      color: '#D2D2D2',
      marginRight: '13.7px'
    },
    '& .select-day-btn.MuiButtonBase-root': {
      padding: '0',
      textTransform: 'none',
      color: theme.palette.common.black,
      fontWeight: '700',
      fontSize: '15px',
      marginRight: '37px',
      '& > span:first-child': {
        marginLeft: '15.7px !important'
      }
    },
    '& .export-btn': {
      minWidth: 'unset',
      padding: '0'
    },
    [theme.breakpoints.down('lg')]: {
      '& > p': {
        display: 'none'
      },
    },
    [theme.breakpoints.down('md')]: {      
      '& .select-day-btn.MuiButtonBase-root': {
        fontSize: '13px',
        marginRight: '11.8px',
        '& > span:first-child': {
          marginLeft: '8.7px !important'
        }
      },
    }
  },
  topLinksCard: {
    padding: '14.5px 22.5px 30px',
    borderRadius: '14px',
    backgroundColor: 'rgba(22, 31, 228, 0.5)',
    [theme.breakpoints.down('md')]: {
      padding: '10.7px 14.3px 23px',
      borderRadius: '8px'
    }
  },
  topLinksCardHeader: {
    color: theme.palette.white.light,
    marginBottom: '20px',
    '& > h1': {
      fontSize: '17px',
      lineHeight: '24px',
      marginRight: 'auto'
    },
    '& .top-links-button': {
      padding: '0',   
      minWidth: 'unset',
      marginLeft: '28.5px'
    },
    '& .MuiTabs-root': {
      minHeight: '30px',
      position: 'relative',
      '& .MuiTab-root': {
        paddingBottom: '9.6px',
        paddingTop: '0',
        color: theme.palette.white.light,
        textTransform: 'none',
        fontSize: '14px',
        lineHeight: '20px',
        minHeight: 'unset',
        minWidth: 'unset',
        paddingLeft: '7px',
        paddingRight: '7px'
      },
      '& .MuiTab-root:first-child': {
        paddingLeft: '0',
        marginRight: '20px'
      },
      '& .MuiTab-root:last-child': {
        paddingRight: '0'
      },
      '& .Mui-selected': {
        fontWeight: '700'
      },
      '& .MuiTabs-indicator': {
        backgroundColor: theme.palette.white.light
      },
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: '100%',
        height: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.26)',
        bottom: '0',
        left: '0'
      }
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '18px',
      '& > h1': {
        fontSize: '15px',
        lineHeight: '20px',
        fontWeight: '700'
      },
      '& .top-links-button': {
        marginLeft: '20px'
      },
      '& .MuiTabs-root': {
        minHeight: '25px',
        '& .MuiTab-root': {
          paddingBottom: '5.8px',
          fontSize: '13px',
          lineHeight: '19px',
          paddingLeft: '0 !important',
          paddingRight: '0 !important'
        },
        '& .MuiTab-root:first-child': {
          marginRight: '14px !important'
        }
      }
    }
  },
  topLinksCardContent: {
    paddingRight: '28.5px',
    maxHeight: '358px',
    overflowY: 'auto' as const,
    '&::-webkit-scrollbar': {
      width: '3.4px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.white.light,
      borderRadius: '3px'
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '3px',
      backgroundColor: 'rgba(247, 247, 247, 0.23)'
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: '22.5px',
      maxHeight: '242px'
    }
  },
  topLinkCell: {
    color: theme.palette.white.light,
    marginBottom: '20px',
    '& p': {
      fontSize: '14px',
      lineHeight: '20px'
    },
    '& .MuiBox-root': {
      marginBottom: '16px'
    },
    '& .MuiLinearProgress-root': {
      backgroundColor: 'rgba(243, 243, 243, 0.19)',
      borderRadius: '5px',
      height: '9px'
    },
    '& .MuiLinearProgress-bar': {
      backgroundColor: theme.palette.white.light
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '15.6px',      
      '& .MuiBox-root': {
        marginBottom: '10px'
      },
      '& .MuiLinearProgress-root': {
        height: '5.7px'
      }
    }
  },
  commonCard: {
    padding: '20px 24px 24px',
    '& h6.card-title': {
      fontSize: '17px',
      lineHeight: '24px',
      color: theme.palette.common.black
    },
    '& .select-day-btn.MuiButtonBase-root': {
      marginRight: '18.5px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '8.6px 14px 15px',
      '& h6.card-title': {
        fontSize: '15px',
        lineHeight: '20px'
      },
      '& .select-day-btn.MuiButtonBase-root': {
        marginRight: '16px'
      }
    }
  },
  rententionTimeCard: {
    backgroundColor: '#445E81',
    paddingBottom: '0',
    '& h6.card-title': {
      color: theme.palette.white.light
    },
    '& .card-action': {
      '& > p': {
        color: '#fff'
      },
      '& .MuiButtonBase-root': {
        color: '#fff'
      }
    }
  },
  funnelContents: {
    marginTop: '45.5px',
    [theme.breakpoints.down('md')]: {
      marginTop: '10.5px'
    }
  },
  funnelImgs: {
    width: '47.2%',
    '& .MuiBox-root': {
      padding: '10px'
    },
    [theme.breakpoints.down('md')]: {
      width: '48.35%',
      '& .MuiBox-root': {
        padding: '6.5px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& > span': {
        width: '100% !important'
      }
    }
  },
  funnelBtns: {
    width: '43.65%',
    '& .MuiButtonBase-root': {
      borderRadius: '10px',
      fontSize: '16px',
      lineHeight: '23px',
      marginBottom: '13px',
      height: '64px',
      maxHeight: 'unset',
      transition: 'all .3s',
      '&:hover': {
        border: '1px solid #BB14E2',
        color: '#BB14E2',
        backgroundColor: theme.palette.white.light,
        transition: 'all .3s'
      }
    },
    '& .MuiButtonBase-root:last-child': {
      marginBottom: '0'
    },
    [theme.breakpoints.down('md')]: {
      width: '43.75%',
      '& .MuiButtonBase-root': {
        borderRadius: '5px',
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '7.8px',
        height: '38.6px'        
      },
    }    
  },
  activeFunnelBtn: {
    '&.MuiButtonBase-root': {
      border: '1px solid #BB14E2',
      color: '#BB14E2',
      backgroundColor: theme.palette.white.light
    },
  },
  trafficTitle: {
    '& .card-title': {
      display: 'flex'
    },
    '& .card-title span': {
      fontSize: '24px',
      lineHeight: '26px',
      fontWeight: '900',
      marginLeft: '20px'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  trafficContents: {
    marginTop: '44px',
    [theme.breakpoints.down('lg')]: {
      marginTop: '-7px'
    }
  },
  trafficCell: {
    marginBottom: '19.5px'
  },
  trafficImgCell: {
    width: '32.5px',
    marginRight: '17px'
  },
  trafficProgress: {
    flex: '1',
    '& p': {
      fontSize: '12px',
      color: '#7C828A',
      lineHeight: '17px'
    },
    '& .MuiBox-root': {
      marginBottom: '10.5px'
    },
    '& .MuiLinearProgress-root': {
      height: '5px',
      borderRadius: '3px',
      backgroundColor: '#F3F3F3'
    },
    '&.instagram': {
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#E8EDA8'
      }
    },
    '&.snapchat': {
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#FFEEAB'
      }
    },
    '&.onlyfans': {
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#81D299'
      }
    },
    '&.twitter': {
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#F69D00'
      }
    },
    '&.facebook': {
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#9BCDFF'
      }
    },
    '&.tiktok': {
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#BB14E2'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& p': {
        fontSize: '14px',
        lineHeight: '20px'
      },
      '& .MuiBox-root': {
        marginBottom: '9.5px'
      }      
    }
  },
  funnelTitle: {
    '& > p': {
      width: '100%',
      fontSize: '13px',
      lineHeight: '19px',
      display: 'flex',
      color: theme.palette.common.black,
      '& span': {
        marginLeft: '4px',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '600'
      }
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiBox-root': {
        display: 'none'
      },
      '& > p': {
        display: 'none'
      }
    }
  },
  donutChartWrapper: {
    marginTop: '25px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '15px'
    }
  },
  donutChartLegend: {
    width: '146px',
    marginRight: '20px',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    rowGap: '11px',
    [theme.breakpoints.down('md')]: {
      rowGap: '7px !important'
    }
  },
  legendLabel: {
    '& p': {
      fontSize: '15px',
      lineHeight: '20px',
      color: "#7C828A"
    },
    // marginBottom: '11px',
    [theme.breakpoints.down('md')]: {
      '& p': {
        fontSize: '14px',
        lineHeight: '20px'        
      }
    }
  },
  legendColor: {
    borderRadius: '4px',
     width: '15px',
     height: '5px',
     marginRight: '12px'
  },
  donutChart: {
    width: 'calc(100% - 146px - 20px)'
  },
  retentionChart: {
    marginTop: '36px',
    [theme.breakpoints.down('md')]: {
      marginTop: '22px'
    }
  },
  emailSmsTab: {
    marginRight: "9.7%",
    marginLeft: 'auto',
    '& .MuiTabs-root': {
      height: '35px',
      minHeight: 'unset',
      position: 'relative',
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: '100%',
        height: '2px',
        backgroundColor: 'rgba(210, 210, 210, 0.18)',
        bottom: '0',
        left: '0'
      }
    },
    '& .MuiTab-root': {
      padding: '0',      
      fontSize: '14px',
      fontWeight: '300',
      minWidth: 'unset',
      minHeight: 'unset',
      marginRight: '30px',
      lineHeight: '20px',
      color: '#A3A3A3',
      textTransform: 'unset'
    },
    '& .Mui-selected': {
      color: theme.palette.common.black,
      fontWeight: '500'
    },
    '& .MuiTab-root:last-child': {
      marginRight: '0'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: theme.palette.common.black
    },
    [theme.breakpoints.down("md")]: {
      marginRight: '0',
      '& .MuiTabs-root': {
        height: '25px'       
      },
      '& .MuiTab-root': {
        fontSize: '13px',
        marginRight: '10px',
      }
    }
  },
  emailSmsHeader: {
    [theme.breakpoints.down('md')]: {
      '& .card-action': {
        display: 'none'
      }
    }    
  },
  geoChart: {
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
      marginTop: '20px'
    }
  },
  geoChartLegend: {
    marginTop: '20px',
    '& > .MuiBox-root': {
      marginBottom: '0'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '6px',
      '& p': {
        fontSize: '12px',
        lineHeight: '17px'
      },
      '& .legend-color-mark': {
        width: '9px',
        marginRight: '7px'
      }
    }
  },
  cardActionMenus: {
    '& .MuiPaper-root': {
      minWidth: '200px'
    },
    '& .MuiMenuItem-root.Mui-disabled': {
      opacity: '1'
    },
    '& .date-range-label': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
      paddingBottom: '14px'
    },
    '& .selected-date': {
      color: '#4BB7DF'
    }
  }
}));

export default analyticsPageStyles;
