import React, { FC, useState } from 'react';
import Image from 'next/image';
import { arrayMoveImmutable } from 'array-move';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PrivateLayout from 'components/layouts/privateLayout';
import MobileDevice from 'components/mobileDevice';
import CustomButton from 'components/customButton';
import RecommendedEmbeds from './recommendedEmbeds';
import PinnedSocials from './pinnedSocials';
import { DNDItem, DNDList } from 'components/dndWidget';
import MyLinkItem from 'components/myLinkItem';
import ExploreEmbedsDialog from 'components/exploreEmbedsDialog';
import AddSocialDialog from 'components/addSocialDialog';

import { ILink } from 'types';
import newLinkIcon from 'assets/img/white-new-link.svg';
import exploreIcon from 'assets/img/white-explore.svg';

import styles from 'assets/jss/pages/editPageStyles';

const useStyles = makeStyles(styles);

const defaultLink = {
  title: '',
  url: ''
}

const EditPage: FC = () => {

  const classes = useStyles();
  const [state, setState] = useState<ILink[]>([defaultLink]);
  const [openExploreEmbeds, setOpenExploreEmbeds] = useState(false);
  const [openAddingSocial, setOpenAddingSocial] = useState(false);

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }): void => {
    setState(arrayMoveImmutable(state, oldIndex, newIndex))
  }

  return (
    <PrivateLayout title='Home Page' className={classes.homepage}>
      <Box display='flex' justifyContent='space-between' className={classes.wrapper}>
        <Box className={classes.contents}>
          <Grid container columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 3 }}>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <CustomButton
                fullWidth
                background='orangeGradient'
                startIcon={<Image src={newLinkIcon} width={20.56} height={21} alt='Add New Link' />}
                className={classes.addNewLinkBtn}
              >
                <span className={classes.hideOnMd}>Add&nbsp;</span>
                New Link
              </CustomButton>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <CustomButton
                fullWidth
                background='blueGradient'
                startIcon={<Image src={exploreIcon} width={21.22} height={21.67} alt='Explore Embeds' />}
                className={classes.explorekBtn}
                onClick={() => setOpenExploreEmbeds(true)}
              >
                Explore <span className={classes.hideOnMd}>&nbsp;Embeds</span>
              </CustomButton>
            </Grid>
          </Grid>

          <RecommendedEmbeds handleAdd={() => setOpenExploreEmbeds(true)} />

          <Box className={classes.myLinksSection}>
            <Typography variant='h3' fontWeight={700}>
              My Links
            </Typography>
            <Box>
              <DNDList
                axis='y'
                lockAxis="y"
                lockToContainerEdges={true}
                useDragHandle
                onSortEnd={onSortEnd}
              >
                {state.map((value: any, index: number) => (
                  <DNDItem key={`item-${index}`} index={index}>
                    <MyLinkItem />
                  </DNDItem>
                ))}
              </DNDList>
            </Box>
          </Box>

          <PinnedSocials handleAddSocial={() => setOpenAddingSocial(true)} />
        </Box>
        <Box className={classes.mobileDivice}>
          <MobileDevice />
        </Box>
      </Box>
      <ExploreEmbedsDialog open={openExploreEmbeds} handleClose={() => setOpenExploreEmbeds(false)} />
      <AddSocialDialog open={openAddingSocial} handleClose={() => setOpenAddingSocial(false)} />
    </PrivateLayout>
  )
}

export default EditPage;
