import { Theme } from "@mui/system";

import instagramBg from 'assets/img/instagram-bg.png';

const mobileDeviceStyles = ((theme: Theme) => ({
  mobileDevice: {
    padding: '23px 25px 24px',
    border: `13px solid ${theme.palette.common.black}`,
    borderRadius: '51px',
    backgroundColor: theme.palette.white.light,
    '& .logo-icon': {
      '& .line-bar': {
        borderWidth: '3px',
        marginRight: '16px',
        borderColor: '#000',
        backgroundColor: "#000"
      },
      '& p': {
        fontSize: '26px',
        color: '#000'
      }
    }
  },
  topIconBtn: {
    '& .MuiIconButton-root': {
      width: '35px',
      height: '35px',
      backgroundColor: theme.palette.grey[200]
    }
  },
  userInfoText: {
    marginTop: '44px',
    '& h6': {
      color: theme.palette.common.black      
    },
    '& p': {
      marginTop: '7.2px',      
      color: theme.palette.black[800],
      maxWidth: '256px'
    }
  },
  socialLinks: {
    marginTop: '33px',
    '& .MuiLink-root': {
      margin: '0 12.5px'
    }
  },
  instagramBtn: {
    marginBottom: '20px',
    backgroundImage: `url(${instagramBg.src})`,
    padding: '10px 22px 12px 10px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    color: theme.palette.white.light,
    cursor: 'pointer'
  },
  instagramIcon: {
    backgroundColor: theme.palette.grey[700],
    borderRadius: '7px'
  },
  vimeoBtn: {
    border: `1px solid ${theme.palette.border.grey038}`,
    borderRadius: '10px',
    padding: '8px 17.5px 9px 8px',
    cursor: 'pointer'
  },
  vimeoIcon: {
    borderRadius: '7px',
    backgroundColor: theme.palette.grey[300],
  },
  footer: {
    marginTop: '305px',
    '& > .MuiTypography-root': {
      color: theme.palette.common.black,
      opacity: '0.85',
      marginBottom: '5px'
    },
    '& .logo-icon': {
      '& .line-bar': {
        borderWidth: '2px',
        marginRight: '11px',
        borderColor: '#000',
        backgroundColor: "#000"
      },
      '& p': {
        fontSize: '16px',
        color: '#000'
      }
    },
    [theme.breakpoints.down('xl')]: {
      marginTop: '150px'
    }
  }
}));

export default mobileDeviceStyles;
