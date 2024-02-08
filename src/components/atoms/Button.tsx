import React, { ReactNode } from 'react';

const DEFAULT_CLASS_NAME =
  'flex flex-row justify-center items-center gap-2 px-3 py-2 border border-slate-600 rounded-lg cursor-pointer hover:bg-lime-400';

interface Props {
  children?: ReactNode;
  className?: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export function Button({ children, className, onClick }: Props) {
  const finalClassName = className ?? DEFAULT_CLASS_NAME;

  return (
    <button className={finalClassName} onClick={onClick}>
      {children}
    </button>
  );
}
