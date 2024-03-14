'use client';

import { useRouter } from 'next/navigation';

import { TodoForm } from '^/components/organisms/TodoForm';

export default function CreateTodo() {
  const router = useRouter();

  return (
    <main className="w-full h-full pt-4">
      <TodoForm
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
        submitButtonLabel="Create!"
      />
    </main>
  );
}
