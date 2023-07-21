import { Theme } from "@mui/system";

const adminDialogStyles = ((theme: Theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      width: '100%',
      maxWidth: '500px'
    }
  },
  dialogContents: {
    '& .form-label': {
      fontSize: '16px',
      fontWeight: '700',
      color: '#474461',
      lineHeight: '24px',
      marginBottom: '11px'
    },
    '& .MuiSelect-select': {
      fontSize: '16px',
      lineHeight: '23px',
      color: '#000'
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.white.light,
      borderRadius: '5px',
      color: theme.palette.common.black
    },
    '& .MuiInputBase-input': {
      padding: '18.5px 30px',
      color: theme.palette.common.black
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E3E3E3'
    },

    [theme.breakpoints.down('md')]: {
      '& .form-label': {
        fontWeight: '700',
        fontSize: '15px',
        lineHeight: '20px'
      },
      '& .password-field': {
        '& .change-password-btn': {
          fontSize: '15px !important',
          lineHeight: '17px !important',
          marginRight: '24px !important'
        }
      }      
    }
  },
  closeBtn: {
    '&.MuiButtonBase-root': {
      width: '39px',
      height: '39px',
      backgroundColor: '#FAFAFA',
      position: 'absolute',
      top: '18px',
      right: '16px'
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiButtonBase-root': {
        width: '24px',
        height: '24px',
        top: '11px',
        right: '12px',
        padding: '6px'
      },
    }
  }
}));

export default adminDialogStyles;
