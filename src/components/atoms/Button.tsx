import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  isDisabled?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export function Button({ children, isDisabled, onClick }: Props) {
  return (
    <button
      disabled={isDisabled}
      className="flex flex-row justify-center items-center gap-2 px-3 py-2 border border-slate-600 rounded-lg cursor-pointer hover:bg-lime-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
