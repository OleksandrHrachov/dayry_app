import React, { FC } from 'react';
import './Button.scss';

interface IProps {
  variant: 'addItem' | 'addComment' | 'delete';
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete?: () => void;
  children: React.ReactNode;
}

export const Button: FC<IProps> = ({variant, onSubmit, onDelete, children }) => {
  return(
    <button
    className={`button button-${variant}`}
    type='submit'
    onClick={(e) => {
      onSubmit && onSubmit(e);
      onDelete && onDelete();
    }}
    >
      {children}
    </button>
  );
};


