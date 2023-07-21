import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomImage from 'components/customImage';
import trendingIcon from 'assets/img/analytics/trending_up.svg';

import styles from 'assets/jss/pages/analyticsPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  title: string;
  value: string;
  trending: string;
  selected: boolean;
  handleClick: () => void;
}

const TopChartTabCell: FC<Props> = (props) => {

  const { title, value, trending, selected, handleClick } = props;
  const classes = useStyles();  

  return (
    <Box
      className={clsx('top-chart-tab-cell', classes.topChartTabCell, { [classes.topChartTabActive]: selected })}
      position='relative'
      onClick={handleClick}
    >
      <Typography variant='h1' fontWeight={300}>
        {title}
      </Typography>
      <Typography variant='h2' fontWeight={500}>
        {value}
      </Typography>
      <Typography variant='body1' fontWeight={300}>
        <CustomImage src={trendingIcon} alt='' width={14.7} height={8.8} mdHeight={7} mdWidth={11.6} />
        {trending}
      </Typography>
    </Box>
  )
}

export default TopChartTabCell;
