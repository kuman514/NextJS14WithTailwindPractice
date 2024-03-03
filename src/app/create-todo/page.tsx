'use client';

import { useRouter } from 'next/navigation';

import { Button } from '^/components/atoms/Button';
import { MultiLineTextInput } from '^/components/atoms/MultiLineTextInput';
import { TextInput } from '^/components/atoms/TextInput';

export default function CreateTodo() {
  const router = useRouter();

  return (
    <main className="w-full h-full pt-4">
      <form
        method="POST"
        className="w-full h-full flex flex-col justify-center items-center overflow-auto gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          if (
            !(event.target instanceof HTMLFormElement) ||
            !event.target.todoTitle ||
            !event.target.todoDetail
          ) {
            return;
          }

          (async () => {
            if (
              !(event.target instanceof HTMLFormElement) ||
              !event.target.todoTitle ||
              !event.target.todoDetail
            ) {
              return;
            }

            const response = await fetch('/api/todos', {
              method: 'POST',
              body: JSON.stringify({
                title: event.target.todoTitle.value,
                detail: event.target.todoDetail.value,
                createdAt: new Date(),
                updatedAt: new Date(),
              }),
            });

            if (response.ok) {
              router.push('/');
            }
          })();
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
