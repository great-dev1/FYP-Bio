import { Theme } from "@mui/system";

const privateLayoutStyles = ((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[50]
  },
  contents: {
    width: 'calc(100% - 150px)',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  contentsInner: {
    padding: '28px 44px 45px 36px',
    [theme.breakpoints.down('md')]: {
      padding: '25px 25px 80px'
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '40px'
    }
  },
  mobilePreviewBtn: {
    position: 'fixed' as const,
    bottom: '63px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '46px',    
    '&.MuiButtonBase-root': {
      background: 'linear-gradient(to right, #FDF6FF, #EFEFFF)',
      color: '#000',
      textTransform: 'none',
      padding: '11.5px 17px 11.5px 13.5px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      fontSize: '14px',
      lineHeight: '20px',
      '& > span:first-child': {        
        marginRight: '11px !important',
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'none !important'
    }
  }
}));

export default privateLayoutStyles;
