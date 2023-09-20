import { FC } from 'react';
import { CommentItem } from '../CommentItem';
import { NewCommentItem } from '../NewCommentItem';
import "./CommentsBlock.scss";

const arr = [
  {
    id: 'fdsfa',
    colorValue: '#000',
    value: 'fdsgjdsgdfafdsfafd'
  },
  {
    id: 'fd65a',
    colorValue: '#1596aa',
    value: '7653642435234234'
  },
]

export const CommentsBlock: FC = () => {
  return(
    <div className="comments">
      <h1 className="comments__heading">Comments #87676987</h1>
      <ul className='comments__list'>
        {arr.map(comment => (
          <li key={comment.id} className='comments__list-item'>
            <CommentItem colorValue={comment.colorValue} value={comment.value} />
          </li>
        ))}
      </ul>
      <div className='comments__new'>
          <NewCommentItem />
      </div>
    </div>
  );
};
