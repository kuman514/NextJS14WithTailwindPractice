import { TodoItemType } from '^/types';
import { useEffect, useState } from 'react';

export function useTodoList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch('/api/todos');
        const data: TodoItemType[] = (await response.json()).data;
        setTodoList(
          data.map((todoItem) => ({
            ...todoItem,
            createdAt: new Date(todoItem.createdAt),
            updatedAt: new Date(todoItem.updatedAt),
          }))
        );
      } catch (error) {
        console.error(error);
        setTodoList([]);
        setIsError(true);
      }

      setIsLoading(false);
    })();
  }, []);

  return {
    isLoading,
    isError,
    todoList,
  };
}
