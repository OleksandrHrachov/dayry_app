import { FC } from "react";
import { InputArea } from "../InputArea";
import { NoteItem } from "../NoteItem";
import "./ItemsBlock.scss";

const arr = [
  {
    id: "#123",
    value: "ghghgdgsdfadsfadsfadsfa",
    commentsCount: 3,
    isSelected: false
  },
  {
    id: "#1234",
    value: "ghgkgghk",
    commentsCount: 5,
    isSelected: true
  },
  {
    id: "#67855555",
    value: "gh65346346234663hk",
    commentsCount: 9,
    isSelected: false
  },
];

export const ItemsBlock: FC = () => {
  return (
    <div className="items">
      <h1 className="items__heading">Items</h1>
      <InputArea />
      <ul className="items__notesList">
        {arr.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            value={note.value}
            commentsCount={note.commentsCount}
            isSelected={note.isSelected}
          />
        ))}
      </ul>
    </div>
  );
};
