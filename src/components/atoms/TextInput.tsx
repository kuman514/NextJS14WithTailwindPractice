import React from 'react';

interface Props {
  name: string;
  initValue?: string;
  curValue?: string;
  placeholder?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export function TextInput({
  name,
  initValue,
  curValue,
  placeholder,
  onChange,
}: Props) {
  return (
    <input
      className="w-full px-3 py-2"
      type="text"
      name={name}
      defaultValue={initValue}
      value={curValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
