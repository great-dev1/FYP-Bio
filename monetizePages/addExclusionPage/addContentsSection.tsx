import React, { FC, useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import { DNDItem, DNDList } from 'components/dndWidget';
import AddContentHeader from 'components/addProduct/addContentHeader';
import AddMoreBtn from 'components/addProduct/addMoreBtn';
import ContentItem from './contentItem';

import { IVideoContent } from 'types';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

const defaultContent = {
  id: 1,
  title: '',
  description: ''
}

const AddContentsSection: FC = () => {

  const classes = useStyles();

  const [state, setState] = useState<IVideoContent[]>([defaultContent]);
  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }): void => {
    setState(arrayMoveImmutable(state, oldIndex, newIndex))
  }

  const handleAddMoreContent = () => {
    setState([
      ...state,
      {
        id: state.length + 1,
        title: '',
        description: '',
      }
    ]);
  }

  return (
    <Box className={classes.exclusionAddContents}>
      <AddContentHeader
        title='Add Your Content'
        subTitle='After filling out the above information, upload your content below.'
        onClickAddBtn={handleAddMoreContent}
      />
      <Box>
        <DNDList
          axis='y'
          lockAxis="y"
          lockToContainerEdges={true}
          useDragHandle
          onSortEnd={onSortEnd}
          className='contents-list'
        >
          {state.map((value: any, index: number) => (
            <DNDItem key={`item-${index}`} index={index}>
              <ContentItem 
                data={value} 
                onChangeTitle={(id, val) => setState(state.map((cell) => cell.id === id ? {...cell, title: val} : cell))}
                onChangeDescription={(id, val) => setState(state.map((cell) => cell.id === id ? {...cell, description: val} : cell))}
              />
            </DNDItem>
          ))}
        </DNDList>
      </Box>
      <AddMoreBtn onClick={handleAddMoreContent} />
    </Box>
  )
}

export default AddContentsSection;
