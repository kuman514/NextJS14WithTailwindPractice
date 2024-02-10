'use client';

import { Button } from '^/components/atoms/Button';
import { MultiLineTextInput } from '^/components/atoms/MultiLineTextInput';
import { TextInput } from '^/components/atoms/TextInput';

export default function CreateTodo() {
  return (
    <main className="w-full h-full pt-4">
      <form
        method="POST"
        className="w-full h-full flex flex-col justify-center items-center overflow-scroll gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          if (
            !(event.target instanceof HTMLFormElement) ||
            !event.target.todoTitle ||
            !event.target.todoDetail
          ) {
            return;
          }

          /**
           * @todo
           * Send create request with `event.target.todoTitle.value` and `event.target.todoDetail.value`.
           */
        }}
      >
        <div className="w-full flex flex-row items-center gap-2">
          <label htmlFor="todoTitle">Title</label>
          <TextInput name="todoTitle" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="todoDetail">Detail</label>
          <MultiLineTextInput name="todoDetail" />
        </div>
        <Button>Create!</Button>
      </form>
    </main>
  );
}
