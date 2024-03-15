'use client';

import { useRouter } from 'next/navigation';

import { TodoForm } from '^/components/organisms/TodoForm';
import { usePostTodoItem } from '^/hooks/use-post-todo-item';
import { useEffect } from 'react';

export default function CreateTodo() {
  const router = useRouter();
  const { isLoading, isSuccess, sendRequest } = usePostTodoItem();

  useEffect(() => {
    if (isSuccess) {
      router.push('/');
    }
  }, [isSuccess]);

  return (
    <main className="w-full h-full pt-4">
      <TodoForm
        onSubmit={(event) => {
          event.preventDefault();
          if (
            !(event.target instanceof HTMLFormElement) ||
            !event.target.todoTitle ||
            !event.target.todoDetail ||
            isLoading
          ) {
            return;
          }

          sendRequest({
            title: event.target.todoTitle.value,
            detail: event.target.todoDetail.value,
          });
        }}
        submitButtonLabel="Create!"
      />
    </main>
  );
}
