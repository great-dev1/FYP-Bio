import React, { FC, useState } from "react";
import { arrayMoveImmutable } from "array-move";
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import { Link, animateScroll as scroll } from "react-scroll";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";

import GeneralInfoForm from "./generalInfoForm";
import CommonFileDropzone from "components/fileDropzone/commonFileDropzone";
import CustomImage from "components/customImage";
import { DNDList } from "components/dndWidget";
import { CarouselImageItem } from "./carouselImgItem";

import { carouselImageList } from "assets/mockdata/designData";
import uploadIcon from "assets/img/design/upload-purple.svg";
import styles from "assets/jss/pages/designPageStyles";
const useStyles = makeStyles(styles);

const GeneralInfo: FC = () => {
  const classes = useStyles();

  const [isCoverActive, setIsCoverActive] = useState(true);

  const [carouselImages, setCarouselImages] = useState<any[]>(
    carouselImageList
  );

  const onSortEnd = ({
    oldIndex,
    newIndex
  }: {
    oldIndex: number;
    newIndex: number;
  }): void => {
    setCarouselImages(arrayMoveImmutable(carouselImages, oldIndex, newIndex));
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        className={classes.generalInfoHeader}
        flexWrap="wrap"
      >
        <Typography variant="h3" fontWeight={700}>
          General Info
        </Typography>
        <Box className={clsx(classes.sectionTabs, 'general-info-tab')} display="flex">
          <Link
            activeClass="active"
            to="general-info"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            href='/general-info'
          >
            General Info
          </Link>
          <Link
            activeClass="active"
            to="general-templates"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            href='/general-templates'
          >
            Templates
          </Link>
          <Link
            activeClass="active"
            to="general-custom"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            href='/general-custom'
          >
            Custom
          </Link>
        </Box>
      </Box>
      <Box id="general-info">
        <GeneralInfoForm />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className={classes.carouselImgsHeader}
        >
          <Typography variant="body1">Carosouel Images</Typography>
          <Box
            display="flex"
            alignItems="center"
            className={classes.coverActiveSwitch}
          >
            <Typography variant="body1">Cover Active</Typography>
            <Switch
              checked={isCoverActive}
              onChange={e => setIsCoverActive(e.target.checked)}
            />
          </Box>
        </Box>
        <Collapse in={isCoverActive} timeout="auto" unmountOnExit>
          <Box className={classes.carouselImgCollapse}>
            <CommonFileDropzone
              text="Drag and drop or browse files"
              setFiles={files => {
                console.log(files);
              }}
              dropzoneIcon={
                <CustomImage
                  src={uploadIcon}
                  alt=""
                  width={24}
                  height={22}
                  mdWidth={18.34}
                  mdHeight={17}
                />
              }
            />
            <Box className={classes.carouselImgs}>
              <DNDList
                axis="xy"
                lockAxis="xy"
                lockToContainerEdges={true}
                useDragHandle
                onSortEnd={onSortEnd}
                className={classes.carouselImgDndList}
              >
                {carouselImages.map((carouselImg: any, index) => (
                  <CarouselImageItem
                    key={carouselImg.id}
                    data={carouselImg}
                    index={index}
                  />
                ))}
              </DNDList>
            </Box>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default GeneralInfo;
