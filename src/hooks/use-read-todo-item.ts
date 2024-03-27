import { TodoItemType } from '^/types';
import { useEffect, useState } from 'react';

export function useReadTodoItem(todoItemId: TodoItemType['id']) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [todoItem, setTodoItem] = useState<TodoItemType | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(`/api/todos/${todoItemId}`);
        const data: TodoItemType = (await response.json()).data;
        setTodoItem({
          ...data,
          createdAt: new Date(data.createdAt),
          updatedAt: new Date(data.updatedAt),
        });
      } catch (error) {
        console.error(error);
        setTodoItem(null);
        setIsError(true);
      }

      setIsLoading(false);
    })();
  }, []);

  return {
    isLoading,
    isError,
    todoItem,
  };
}
