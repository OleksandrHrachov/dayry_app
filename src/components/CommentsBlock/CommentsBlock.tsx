import { FC } from 'react';
import { CommentItem } from '../CommentItem';
import { NewCommentItem } from '../NewCommentItem';
import { useAppSelector } from '../../store/hooks';
import "./CommentsBlock.scss";


export const CommentsBlock: FC = () => {
  const { selectedItem } = useAppSelector(state => state.items);

  return(
    <div className="comments">
      <h1 className="comments__heading">Comments #{selectedItem?.id}</h1>
      <ul className='comments__list'>
        {selectedItem && selectedItem.comments.map(comment => (
          <li key={comment.id} className='comments__list-item'>
            <CommentItem colorValue={comment.colorValue} value={comment.textValue} />
          </li>
        ))}
      </ul>
      <div className='comments__new'>
          <NewCommentItem />
      </div>
    </div>
  );
};
