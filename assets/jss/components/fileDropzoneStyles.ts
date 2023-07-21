import { Theme } from "@mui/system";

const fileDropzoneStyles = ((theme: Theme) => ({
  dropzone: {
    height: '186px',
    background: 'linear-gradient(right, rgba(245, 236, 248, 0.33), rgba(219, 219, 255, 0.33))',
    padding: '29px',
    borderRadius: '21px',
    '& > span': {
      marginBottom: '20px !important'
    },
    '& h6': {
      color: theme.palette.common.black,
      fontSize: '20px',
      lineHeight: '28px',
    },
    '& p': {
      fontSize: '16px !important',
      marginTop: '8px !important',
      color: 'rgba(0, 0, 0, 0.8) !important',
      marginBottom: '0 !important'
    },
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      padding: '19.2px 8px',
      '& > span': {
        width: '22.3px !important',
        height: '17.7px !important',
        marginBottom: '10px !important'
      },
      '& h6': {
        fontSize: '17px',
        lineHeight: '20px',
      },
      '& p': {
        fontSize: '15px !important',
        lineHeight: '16px !important'
      },
    }
  },
  commonFileDropzone: {
    height: '50.8px',
    border: '1px dashed #E7E7E7',
    borderRadius: '10px',
    cursor: 'pointer' as const,
    '& .MuiTypography-root': {
      fontSize: '16px',
      lineHeight: '23px',
      color: theme.palette.common.black
    },
    '& .dropzone-icon': {
      top: '50%',
      transform: 'translateY(-50%)',
      left: '25.5px'
    },
    [theme.breakpoints.down('md')]: {
      height: '45px',
      '& .MuiTypography-root': {
        fontSize: '15px',
        lineHeight: '20px',
      }
    }
  }
}));

export default fileDropzoneStyles;
