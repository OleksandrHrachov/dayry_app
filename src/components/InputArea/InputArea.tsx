import React, { FC, useState } from "react";
import { Button } from '../Button';
import { useAppDispatch } from '../../store/hooks';
import { addItem } from '../../store/itemsSlice';
import { getId } from '../../utils/helpers';
import "./InputArea.scss";

export const InputArea: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (value) {
      e.preventDefault();
      dispatch(addItem({
        id: getId(10),
        textValue: value
      }))
      setValue('')
    }
  };

  return (
    <form className="input-area">
      <input
        className="input-area__input"
        value={value}
        onChange={(e) => e.target.value.trim() && setValue(e.target.value)}
        type="text"
        required
        placeholder="Type name here..."
      />
      <Button variant="addItem" onSubmit={onSubmit}>Add New</Button>
    </form>
  );
};
