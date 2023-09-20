import React, { FC, useState } from "react";
import { Button } from '../Button';
import "./InputArea.scss";

export const InputArea: FC = () => {
  const [value, setValue] = useState('');

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (value) {
      e.preventDefault();
      console.log('submit');
      console.log(value);
      setValue('')
    }
  };

  return (
    <form className="input-area">
      <input
        className="input-area__input"
        value={value}
        onChange={(e) => setValue(e.target.value.trim())}
        type="text"
        required
        placeholder="Type name here..."
      />
      <Button variant="addItem" onSubmit={onSubmit}>Add New</Button>
    </form>
  );
};
