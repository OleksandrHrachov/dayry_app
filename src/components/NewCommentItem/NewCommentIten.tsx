import React, { FC, useState } from "react";
import { Button } from "../Button";
import { useAppDispatch } from '../../store/hooks';
import { addComment } from '../../store/itemsSlice';
import { getId } from '../../utils/helpers';
import "./NewCommentItem.scss";

export const NewCommentItem: FC = () => {
  const [colorValue, setColorValue] = useState("#000000");
  const [textValue, setTextValue] = useState('');

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (textValue) {
      e.preventDefault();
      dispatch(addComment({
        id: getId(10),
        textValue: textValue,
        colorValue: colorValue
      }))
      setTextValue('')
      setColorValue("#000000")
    }
  };
  
  return (
    <div className="new-comment">
      <form className="new-comment__form">
        <input
          type="color"
          className="new-comment__color"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
        <textarea
          className="new-comment__text-area"
          value={textValue}
          onChange={(e) => e.target.value.trim() && setTextValue(e.target.value)}
          rows={4}
          required
          placeholder="Type comment here..."
        ></textarea>
        <Button variant="addComment" onSubmit={onSubmit}>
          Add New
        </Button>
      </form>
    </div>
  );
};
