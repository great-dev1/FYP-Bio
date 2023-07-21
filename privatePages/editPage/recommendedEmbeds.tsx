import React, { FC, ContextType } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import CustomButton from 'components/customButton';
import { LeftArrow, RightArrow } from "./recommendedArrow";

import { embeds } from 'assets/mockdata/recommentEmbedsData';

import styles from 'assets/jss/pages/editPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleAdd: () => void;
}

type scrollVisibilityApiType = ContextType<typeof VisibilityContext>;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const RecommendedEmbeds: FC<Props> = (props) => {

  const { handleAdd } = props;
  const classes = useStyles();

  return (
    <Box className={classes.recommendedSection}>
      <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap' className={classes.recommendedHeader}>
        <Typography variant='h6' fontWeight={400}>
          Recommended <span>Embeds</span>
        </Typography>
        <CustomButton onClick={handleAdd} variant='contained' boxShadow='none' className={classes.moreEmbedsBtn}>
          <AddIcon />
          More Embeds
        </CustomButton>
      </Box>

      <Box className={classes.recCarousel}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onWheel={onWheel}
        >
          {
            embeds.map((cell: any) => (
              <Box className={classes.recommendedItem} key={cell.title} display='inline-block'>
                <Box display='flex' alignItems='center' justifyContent='center' flex={1} mx='auto'>
                  <Image src={cell.icon} alt='' width={cell.imgWidth} height={cell.imgHeight} />
                </Box>
                <Typography variant='body1' align='center'>
                  {cell.title}
                </Typography>
              </Box>
            ))
          }
        </ScrollMenu>
      </Box>
    </Box>
  )
}

export default RecommendedEmbeds;
