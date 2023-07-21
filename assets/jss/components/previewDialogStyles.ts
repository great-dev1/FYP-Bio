import { Theme } from "@mui/system";

const previewDialogStyles = ((theme: Theme) => ({
  preview: {
    '& .MuiDialog-paper': {
      backgroundColor: 'transparent',
      boxShadow: 'none',   
      '&::-webkit-scrollbar': {
        display: 'none',
      },   
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiDialog-paper': {
        marginLeft: '16px',
        marginRight: '16px',
        width: '100%'
      },
    }
  },
  mobileDevice: {
    width: '468px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }, 
  closeBtn: {
    '&.MuiButtonBase-root': {
      position: 'sticky',
      width: '50px',
      bottom: '0',
      backgroundColor: theme.palette.grey[500],
      left: '50%',
      transform: 'translateX(-50%)',
      height: '50px'
    }
  }
}));

export default previewDialogStyles;
