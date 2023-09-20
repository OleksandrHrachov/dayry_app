import React, { FC, useState } from "react";
import { Button } from "../Button";
import "./NewCommentItem.scss";

export const NewCommentItem: FC = () => {
  const [colorValue, setColorValue] = useState("#000000");
  console.log('color =>', colorValue);
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    console.log("ADD COMMENT");
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
