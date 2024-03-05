'use client';

import { useRouter } from 'next/navigation';

import { Button } from '^/components/atoms/Button';
import { TodoList } from '^/components/molecules/TodoList';
import { useTodoList } from '^/hooks/use-todo-list';

export default function Home() {
  const router = useRouter();
  const { todoList } = useTodoList();

  return (
    <main className="w-full h-full flex flex-col justify-center items-center overflow-auto pt-4 gap-4">
      <div className="w-full h-full flex flex-col items-center overflow-auto">
        <TodoList
          todoItemDataArray={todoList}
          onClickTodoItem={(todoItemId) => {
            router.push(`/read-todo/${todoItemId}`);
          }}
        />
      </div>
      <Button
        onClick={() => {
          router.push('/create-todo');
        }}
      >
        New Todo
      </Button>
    </main>
  );
}
