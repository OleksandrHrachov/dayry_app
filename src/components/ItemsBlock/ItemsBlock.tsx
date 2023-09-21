import { FC } from "react";
import { InputArea } from "../InputArea";
import { NoteItem } from "../NoteItem";
import { useAppSelector } from '../../store/hooks';
import "./ItemsBlock.scss";

export const ItemsBlock: FC = () => {
  const { items } = useAppSelector(state => state.items);

  return (
    <div className="items">
      <h1 className="items__heading">Items</h1>
      <InputArea />
      <ul className="items__notesList">
        {items && items.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            value={note.value}
            commentsCount={note.comments.length}
          />
        ))}
      </ul>
    </div>
  );
};
