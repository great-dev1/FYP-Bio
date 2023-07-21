import { Theme } from "@mui/system";

const successDialogStyles = ((theme: Theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      borderRadius: '29px'
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiDialog-paper': {
        borderRadius: '15px',
        margin: '25px'
      }
    }
  },
  contents: {
    width: '576px',
    paddingBottom: '56px',
    paddingTop: '56px',
    '& h3': {
      fontSize: '25px',
      lineHeight: '35px',
      marginTop: '42px',
      marginBottom: '13px'
    },
    '& p': {
      fontSize: '18px',
      lineHeight: '28px',
      marginBottom: '42px',    
    },
    '& .view-btn': {
      fontSize: '17px',
      lineHeight: '24px',
      width: '310px'
    },
    '& .close-btn': {
      position: 'absolute',
      top: '16px',
      right: '16px',
      color: '#000'
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '385px',
      width: '100%',
      paddingBottom: '30px',
      paddingTop: '32px',
      paddingLeft: '24px',
      paddingRight: '24px',
      '& h3': {
        fontSize: '15px',
        lineHeight: '21px',
        marginTop: '36px',
        marginBottom: '8px'
      },
      '& p': {
        fontSize: '14px',
        lineHeight: '18px',
        marginBottom: '29px',    
      },
      '& .view-btn': {
        fontSize: '14px',
        lineHeight: '20px',
        width: '175px',
        fontWeight: '700'
      },
    }
  }
}));

export default successDialogStyles;
