import React, { FC } from 'react';
import './Button.scss';

interface IProps {
  variant: 'addItem' | 'addComment' | 'delete';
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const Button: FC<IProps> = ({variant, onSubmit, onDelete, children }) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSubmit && onSubmit(e);
    onDelete && onDelete(e);
  };

  return(
    <button
    className={`button button-${variant}`}
    type='submit'
    onClick={onClickHandler}
    >
      {children}
    </button>
  );
};


