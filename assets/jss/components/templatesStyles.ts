import { Theme } from "@mui/system";
import templateBackground from 'assets/img/template-background.png';

const templatesStyles = ((theme: Theme) => ({
  templateItem: {
    '& p': {
      fontSize: '18px',
      lineHeight: '25px',
      color: 'rgba(0, 0, 0, 0.5)',
      marginTop: '12.7px'
    },
    [theme.breakpoints.down('md')]: {
      '& p': {
        fontSize: '15px',
        lineHeight: '21px'
      }
    }
  },
  templateHead: {
    height: '157px',
    boxSizing: 'border-box' as const,
    padding: '24px 20px',
    borderRadius: '15px',
    cursor: 'pointer' as const,
    '& .template-head-line': {
      height: '29px',
      width: '100%',
      borderRadius: '10px',
      marginBottom: '12px'
    },
    '& .template-head-lines': {
      zIndex: '2'
    },
    '& .template-head-lines .template-head-line:last-child': {
      marginBottom: '0'
    },
    [theme.breakpoints.down('md')]: {
      height: '116px'
    }
  },
  activeHead: {
    '&::before': {
      content: `''`,
      position: 'absolute',
      width: 'calc(100% + 14px)',
      height: 'calc(100% + 14px)',
      borderRadius: '19px',
      border: '1px solid rgba(202, 204, 255, 0.5)',
      left: '-7px',
      top: '-7px'
    },
    [theme.breakpoints.down('md')]: {
      '&::before': {
        width: 'calc(100% + 8px)',
        height: 'calc(100% + 8px)',
        left: '-4px',
        top: '-4px'
      }
    }
  },
  onlyFansType: {
    '& .template-head': {
      background: 'linear-gradient(bottom, #9C37A3, #AB0B11)'
    },
    '& .template-head-lines .template-head-line:first-child': {
      background: 'linear-gradient(left, rgba(217, 100, 100, 1), rgba(205, 77, 175, 1), rgba(210, 63, 155, 1))'
    },
    '& .template-head-lines .template-head-line:nth-of-type(2)': {
      background: 'linear-gradient(left, rgba(217, 100, 100, 0.38), rgba(205, 77, 175, 0.38), rgba(210, 63, 155, 0.38))'
    },
    '& .template-head-lines .template-head-line:nth-of-type(3)': {
      background: 'linear-gradient(left, rgba(217, 100, 100, 0.38), rgba(205, 77, 175, 0.38), rgba(210, 63, 155, 0.38))'
    }
  },
  minimalType: {
    '& .template-head': {
      background: theme.palette.white.light,
      border: '1px solid #D7D7D7'
    },
    '& .template-head-lines .template-head-line:first-of-type': {
      background: 'rgba(0, 0, 0, 0.85)'
    },
    '& .template-head-lines .template-head-line:nth-of-type(2)': {
      background: theme.palette.white.light,
      border: '1px solid rgba(112, 112, 112, 0.38)'
    },
    '& .template-head-lines .template-head-line:nth-of-type(3)': {
      background: theme.palette.white.light,
      border: '1px solid rgba(112, 112, 112, 0.38)'
    }
  },
  glassType: {
    '& .template-head': {
      background: 'linear-gradient(bottom, #CE47C0, #F57059)'
    },
    '& .template-head-lines .template-head-line:first-of-type': {
      background: 'rgba(255, 255, 255, 0.6)'
    },
    '& .template-head-lines .template-head-line:nth-of-type(2)': {
      background: 'rgba(255, 255, 255, 0.25)'
    },
    '& .template-head-lines .template-head-line:nth-of-type(3)': {
      background: 'rgba(255, 255, 255, 0.25)'
    }  
  },
  snowType: {
    '& .template-head': {
      background: theme.palette.white.light,
      border: '1px solid #D7D7D7',      
    },
    '& .template-head-lines .template-head-line': {
      background: 'rgba(0, 0, 0, 0.85)'
    }
  },
  neonType: {
    '& .template-head': {
      background: 'linear-gradient(to top right, rgb(27, 43, 57), rgba(168, 84, 245, 0.21), rgb(56, 56, 56))',
      backgroundColor: '#000'
    },
    '& .template-head-lines .template-head-line': {
      background: 'linear-gradient(left, rgba(43, 62, 88, 0.85), rgba(56, 77, 106, 0.85))',
      boxShadow: 'inset 0 5px 20px rgba(255, 255, 255, 0.55)'
    }
  },
  threeDType: {
    '& .template-head': {
      background: theme.palette.white.light,
      border: '1px solid #D7D7D7',
      paddingTop: '21px'
    },
    '& .template-head-line': {
      width: 'calc(100% - 4px)'
    },
    '& .template-head-lines .template-head-line:nth-of-type(1)': {
      background: '#F4729A',
      boxShadow: '4px 5px #D03263'
    },
    '& .template-head-lines .template-head-line:nth-of-type(2)': {
      background: '#5490EB',
      boxShadow: '4px 5px #354C87'
    },
    '& .template-head-lines .template-head-line:nth-child(3)': {
      background: '#35BD81',
      boxShadow: '4px 5px #38795D'
    }
  },
  backgroundType: {
    '& .template-head': {
      backgroundColor: '#313744',
      backgroundImage: `url(${templateBackground.src})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    },
    '& .template-head-lines .template-head-line:first-of-type': {
      background: 'linear-gradient(left, rgba(217, 100, 100, 1), rgba(205, 77, 175, 1), rgba(210, 63, 155, 1))'
    },
    '& .template-head-lines .template-head-line:nth-of-type(2)': {
      background: '#565F72'
    },
    '& .template-head-lines .template-head-line:nth-of-type(3)': {
      background: '#565F72'
    }
  },
  templatePreview: {
    '& .template-head': {
      padding: '22px 18px 18px',
      height: '245px',
      display: 'flex',
      flexDirection: 'column',
      '& .template-head-line': {
        order: '1'
      }     
    }    
  },
  solidColorType: {
    '& .template-head': {
      backgroundColor: '#ECAF42'
    },
    '& .template-head-lines .template-head-line': {
      background: 'rgba(255, 255, 255, 0.83)'
    }
  },
  backgroundPhotoType: {
    '& .template-head-lines .template-head-line': {
      background: 'rgba(255, 255, 255, 0.83)'
    }
  },
  backgroundVideoType: {
    '& .template-head-lines .template-head-line': {
      background: 'rgba(255, 255, 255, 0.83)'
    }
  },
  gradientType: {
    '& .template-head': {
      backgroundImage: 'linear-gradient(-135deg, #ECAF42, #A9E3E8)'
    },
    '& .template-head-lines .template-head-line': {
      background: 'rgba(255, 255, 255, 0.83)'
    }
  },
  coverPhotoType: {
    '& .template-head': {
      backgroundColor: '#ECAF42'
    },
    '& .template-head-lines .template-head-line': {
      background: 'rgba(255, 255, 255, 0.83)'
    }
  },
  templateHeadBackground: {
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    borderRadius: 'inherit',
    '& > span': {
      width: '100% !important',
      height: '100% !important'
    }
  },
  templateHeadCoverPhoto: {
    width: '100%',
    top: '0px',
    left: '0px',
    borderRadius: '15px 15px 0 0',
    height: '58.6px',
    '& > span': {
      width: '100% !important',
      height: '100% !important'
    },
    [theme.breakpoints.down('md')]: {
      height: '53px'
    }
  },
  templateHeadVideo: {
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    borderRadius: 'inherit',
    '& video': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: 'inherit'
    },
    '& .video-toggle-btn': {
      position: 'absolute',
      zIndex: '3',
      width: '40px',
      height: '40px',
      minWidth: 'unset',
      minHeight: 'unset',
      border: '2px solid #fff',
      borderRadius: '50%',
      color: '#fff',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    [theme.breakpoints.down('md')]: {
      '& .video-toggle-btn': {
        width: '37px',
        height: '37px'
      }
    }
  }
}));

export default templatesStyles;
