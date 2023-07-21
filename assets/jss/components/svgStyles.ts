import { Theme } from "@mui/system";

const svgStyles = ((theme: Theme) => ({
  logoIcon: {
    paddingTop: '5px',
    paddingBottom: '5px',
    '& .line-bar': {
      height: 'auto',
      border: '4px solid #fff',
      borderRadius: '3px',
      marginRight: '20px',
      backgroundColor: '#fff'
    },
    '& p': {
      fontSize: '33px'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '3.5px',
      paddingBottom: '3.5px',
      '& .line-bar': {        
        border: '3px solid #fff',
        marginRight: '14px'        
      },
      '& p': {
        fontSize: '23px'
      },
    }
  }
}));

export default svgStyles;
