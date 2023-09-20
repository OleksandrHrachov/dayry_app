import { FC } from 'react';
import { ItemsBlock } from '../ItemsBlock';
import { CommentsBlock } from '../CommentsBlock';
import './MainPart.scss';

export const MainPart: FC = () => {
  return (
    <div className="main-container">
      <ItemsBlock />
      <CommentsBlock />
    </div>
  );
};
