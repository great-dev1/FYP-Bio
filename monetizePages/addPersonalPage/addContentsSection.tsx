import React, { FC, useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import { DNDItem, DNDList } from 'components/dndWidget';
import AddContentHeader from 'components/addProduct/addContentHeader';
import AddMoreBtn from 'components/addProduct/addMoreBtn';
import ContentItem from './contentItem';

import { IPersonalContent } from 'types';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

const defaultContent = {
  id: 1,
  questionType: '',
  answerType: ''
}

const AddContentsSection: FC = () => {

  const classes = useStyles();

  const [state, setState] = useState<IPersonalContent[]>([defaultContent]);
  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }): void => {
    setState(arrayMoveImmutable(state, oldIndex, newIndex))
  }

  const handleAddMoreContent = () => {
    setState([
      ...state,
      {
        id: state.length + 1,
        questionType: '',
        answerType: '',
      }
    ]);
  }

  return (
    <Box className={classes.personalAddContents}>
      <AddContentHeader
        title='Add Custom Questions'
        subTitle='Here you can add questions that will be asked to the person requesting shoutout'
        onClickAddBtn={handleAddMoreContent}
      />
      <Box mt={{xs: '19px', md: '22px'}}>
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
                onChangeQuestionType={(id, val) => setState(state.map((cell) => cell.id === id ? { ...cell, questionType: val } : cell))}
                onChangeAnswerType={(id, val) => setState(state.map((cell) => cell.id === id ? { ...cell, answerType: val } : cell))}
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
