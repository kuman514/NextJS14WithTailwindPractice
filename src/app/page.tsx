'use client';

import { Button } from '^/components/atoms/Button';
import { TodoList } from '^/components/molecules/TodoList';
import { useTodoList } from '^/hooks/use-todo-list';

export default function Home() {
  const { todoList } = useTodoList();

  return (
    <main className="w-full h-full flex flex-col justify-center items-center overflow-scroll pt-4 gap-4">
      <div className="w-full h-full flex flex-col items-center overflow-scroll">
        <TodoList todoItemDataArray={todoList} />
      </div>
      <Button
        onClick={() => {
          /**
           * @todo
           * Link to create-todo
           */
        }}
      >
        New Todo
      </Button>
    </main>
  );
}
