import { Theme } from "@mui/system";

const datePickerStyles = ((theme: Theme) => ({
  datepicker: {
    backgroundColor: 'rgba(241, 241, 241, 0.24)',
    paddingLeft: '23.9px',
    paddingRight: '21.4px',
    borderRadius: '30px',
    '& .MuiFormControl-root': {
      flex: '1'      
    },
    '& .MuiInputBase-root': {
      color: theme.palette.common.black,
      fontSize: '15px',
      paddingRight: '6px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none'
    },
    '& .MuiInputBase-input': {
      cursor: 'pointer' as const
    },
    '& input::placeholder': {
      color: theme.palette.common.black,
      opacity: '1'
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '14.5px',
      paddingRight: '13px',
      '& > .MuiBox-root > span': {
        width: '14.8px !important',
        height: '14.7px !important'
      },
      '& .MuiInputBase-root': {
        height: '36.4px',
        paddingRight: '4px'
      },
      '& .MuiInputAdornment-root .MuiButtonBase-root > span': {
        width: '8.36px !important'
      }
    }
  },
  startIcon: {
    opacity: '0.4',
    [theme.breakpoints.down('sm')]: {
      
    }
  },
  timePicker: {
    backgroundColor: 'rgba(241, 241, 241, 0.24)',
    paddingLeft: '21.9px',
    paddingRight: '20px',
    borderRadius: '30px',
    cursor: 'pointer' as const,
    '& .MuiInputBase-root': {
      color: theme.palette.common.black,
      fontSize: '15px',
      paddingRight: '6px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none'
    },
    '& .MuiInputBase-input': {
      paddingLeft: '0',
      cursor: 'pointer' as const
    },
    '& input::placeholder': {
      color: theme.palette.common.black,
      opacity: '1'
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '12.3px',
      paddingRight: '12.1px',   
      '& .MuiInputBase-root': {
        height: '36.4px',
        paddingRight: '4px'
      },
      '& .MuiInputAdornment-root .MuiButtonBase-root > span': {
        width: '8.36px !important'
      }
    }
  }
}));

export default datePickerStyles;
