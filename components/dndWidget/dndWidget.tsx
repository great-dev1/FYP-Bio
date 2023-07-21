import React from 'react';
import {
  SortableContainer,
  SortableElement,
  SortableElementProps,
  SortableContainerProps,
  SortableHandle
} from 'react-sortable-hoc';

interface ISortableHandleElement {
  children: React.ReactNode
  className?: string
}

interface ISortableItem extends SortableElementProps {
  children: React.ReactNode
  className?: string
}

interface ISortableContainer extends SortableContainerProps {
  children: React.ReactNode
  className?: string
}

export const DNDTrigger: React.ComponentClass<ISortableHandleElement, any> = SortableHandle(
  ({ children, className }: { children: React.ReactNode; className: string }) => (
    <div className={className || ''}>{children}</div>
  )
);

export const DNDItem: React.ComponentClass<ISortableItem, any> = SortableElement(
  ({ children, className }: { children: React.ReactNode; className: string }) => (
    <div className={className || ''}>{children}</div>
  )
);

export const DNDList: React.ComponentClass<ISortableContainer, any> = SortableContainer(
  ({ children, className }: { children: React.ReactNode; className: string }) => {
    return <div className={className || ''}>{children}</div>
  }
);
