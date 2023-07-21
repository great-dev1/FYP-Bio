import { Theme } from "@mui/system";

const mobileStepperStyles = ((theme: Theme) => ({
  stepIndicator: {
    marginTop: '27.6px',
    [theme.breakpoints.up('md')]: {
      display: 'none !important'
    }
  },
  stepper: {
    width: '80px',
    height: '3px',
    backgroundColor: '#FBFBFB',
    marginRight: '4px'
  },
  activeStep: {
    backgroundColor: theme.palette.yellow.main,
  },
}));

export default mobileStepperStyles;
