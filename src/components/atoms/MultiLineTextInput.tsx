import React from 'react';

interface Props {
  name: string;
  initValue?: string;
  curValue?: string;
  placeholder?: string;
  onChange?(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export function MultiLineTextInput({
  name,
  initValue,
  curValue,
  placeholder,
  onChange,
}: Props) {
  return (
    <textarea
      className="w-full px-3 py-2"
      name={name}
      defaultValue={initValue}
      value={curValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
