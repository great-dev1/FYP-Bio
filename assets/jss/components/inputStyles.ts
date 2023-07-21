import { Theme } from "@mui/system";

const inputStyles = (theme: Theme) => ({
  label: {
    fontSize: "18px",
    color: theme.palette.common.black,
    marginBottom: '17px',
    display: 'block',
    lineHeight: '25px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
      lineHeight: '20px',
      marginBottom: '16px'
    }
  },
  error: {
    color: "#f44336"
  },
  textField: {
    position: 'relative' as const,
    '& .MuiOutlinedInput-root': {
      fontSize: '18px',
      lineHeight: '25px',
      borderRadius: '46px',
      height: '72px',
      paddingLeft: '38px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#C8CFD6'
    },
    '& .MuiInputBase-input::placeholder': {
      fontWeight: '400 !important',
      color: '#7F889E',
      opacity: '1'
    },
    '& .MuiInputBase-inputAdornedStart': {
      paddingLeft: '28px'
    },
    '& .text-length': {
      position: 'absolute',
      fontSize: '15px',
      lineHeight: '21px',
      fontWeight: '300',
      color: '#000',
      bottom: '12px',
      right: '18.6px'
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiOutlinedInput-root': {
        height: '58px',
        paddingLeft: '24px',
        fontSize: '15px'
      },
      '& .MuiInputBase-inputAdornedStart': {
        paddingLeft: '13px'
      },
      '& .text-length': {
        fontSize: '14px',
        lineHeight: '20px',
        right: '18px',
        bottom: '13.2px'
      }
    }
  }, 
  normalTextField: {
    '& .form-label': {
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: '400',
      marginBottom: '14px'
    },
    '& .MuiInputBase-root': {
      borderRadius: '12px',        
      padding: '0',
      minHeight: 'unset',
      height: 'auto'
    },
    '& .MuiInputBase-input': {
      padding: '18.5px 38.5px',
      fontSize: '16px',
      lineHeight: '23px',
      color: theme.palette.common.black      
    },
    [theme.breakpoints.down('md')]: {
      '& .form-label': {
        marginBottom: '9px',
        fontSize: '15px',
        lineHeight: '20px'
      },
      '& .MuiInputBase-root': {
        borderRadius: '5px',
      },
      '& .MuiInputBase-input': {
        padding: '15px 22px !important',
        fontSize: '15px',
        lineHeight: '20px'
      }
    }
  }  
})

export default inputStyles
