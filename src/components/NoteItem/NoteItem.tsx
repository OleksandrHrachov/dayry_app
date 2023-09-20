import { FC } from "react";
import "./NoteItem.scss";
import { Button } from "../Button";
import classNames from 'classnames';

interface IProps {
  id: string;
  value: string;
  commentsCount: number;
  isSelected: boolean;
}

export const NoteItem: FC<IProps> = ({ id, value, commentsCount, isSelected }) => {
  const onDelete = () => {
    console.log("DELETE");
  };
  return (
    <li className={classNames("item", {selectedItem: isSelected} )}>
      {value}
      <span className="item__right-side">
        <span className="item__commentsCount">{commentsCount}</span>
        <span className="item__button">
          <Button variant="delete" onDelete={onDelete}>
            Delete
          </Button>
        </span>
      </span>
    </li>
  );
};
