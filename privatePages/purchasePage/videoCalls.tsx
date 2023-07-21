import React, { FC, useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { slice } from 'lodash';

import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

import VideoCard from './videoCard';
import VideoDialog from 'components/videoDialog';

const VideoCalls: FC = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openVideo, setOpenVideo] = useState(false);
  const [pageSize, setPaseSize] = useState(16);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);

  const onChangePagination = (pageNum: number) => {
    setPage(pageNum);
    setStartIndex((pageNum - 1) * pageSize);
    setEndIndex(pageNum * pageSize);
  }

  useEffect(() => {
    if (isMobile) {
      setStartIndex(0);
      setEndIndex(6);
      setPage(1);
      setPaseSize(6);
    } else {
      setStartIndex(0);
      setEndIndex(16);
      setPage(1);
      setPaseSize(16);
    }
  }, [isMobile])

  return (
    <Box>
      <Grid container columnSpacing={3} rowSpacing={{ xs: '15px', lg: '23px' }}>
        {
          slice([...Array(35)], startIndex, endIndex).map((el, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <VideoCard
                title='Video Calls'
                author='Isabella Adams'
                date='22th Aug, 2021'
                time='15 Min'
                handleOpenVideo={() => setOpenVideo(true)}
              />
            </Grid>
          ))
        }
      </Grid>
      <Box display='flex' justifyContent='center' mt={4}>
        <Pagination
          count={Math.ceil(35 / pageSize)}
          variant="outlined"
          color="primary"
          siblingCount={0}
          size='large'
          page={page}
          onChange={(e, value) => onChangePagination(value)}
        />
      </Box>
      <VideoDialog 
        filePath='/video/video.mp4'
        open={openVideo}
        handleClose={() => setOpenVideo(false)}
      />
    </Box>
  )
}

export default VideoCalls;
