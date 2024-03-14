import { FormEvent } from 'react';

import { Button } from '^/components/atoms/Button';
import { MultiLineTextInput } from '^/components/atoms/MultiLineTextInput';
import { TextInput } from '^/components/atoms/TextInput';

interface Props {
  initTitle?: string;
  initDetail?: string;
  submitButtonLabel: string;

  onSubmit(event: FormEvent<HTMLFormElement>): void;
}

export function TodoForm({
  initTitle,
  initDetail,
  submitButtonLabel,
  onSubmit,
}: Props) {
  return (
    <form
      method="POST"
      className="w-full h-full flex flex-col justify-center items-center overflow-auto gap-4"
      onSubmit={onSubmit}
    >
      <div className="w-full flex flex-row items-center gap-2">
        <label htmlFor="todoTitle">Title</label>
        <TextInput initValue={initTitle} name="todoTitle" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="todoDetail">Detail</label>
        <MultiLineTextInput initValue={initDetail} name="todoDetail" />
      </div>
      <Button>{submitButtonLabel}</Button>
    </form>
  );
}
