import { FC } from "react";
import "./NoteItem.scss";
import { Button } from "../Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeItem, addToSelected } from "../../store/itemsSlice";
import classNames from "classnames";

interface IProps {
  id: string;
  value: string;
  commentsCount: number;
}

export const NoteItem: FC<IProps> = ({ id, value, commentsCount }) => {
  const dispatch = useAppDispatch();
  const { selectedItem } = useAppSelector((state) => state.items);

  const onDelete = () => {
    dispatch(removeItem(id));
  };

  const onSelect = () => {
    dispatch(addToSelected(id));
  };

  return (
    <li
      className={classNames("item", { selectedItem: id === selectedItem?.id })}
      onClick={onSelect}
    >
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
