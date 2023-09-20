import React, { FC } from 'react';
import './CommentItem.scss';

interface IProps {
  colorValue: string;
  value: string;
}

export const CommentItem: FC<IProps> = ({colorValue, value}) => {
  return(
    <div className='comment'>
      <div className='comment__color' style={{backgroundColor: colorValue}}/>
      <div className='comment__value'>{value}</div>
    </div>
  );
};
