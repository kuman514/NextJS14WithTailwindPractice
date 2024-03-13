import { TodoItemType } from '^/types';
import { useState } from 'react';

export function useDeleteTodoItem(todoItemId: TodoItemType['id']) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  async function sendRequest() {
    setIsLoading(true);
    setIsError(false);

    try {
      await fetch(`/api/todos/${todoItemId}`, {
        method: 'DELETE',
      });
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }

    setIsLoading(false);
  }

  return {
    isLoading,
    isError,
    isSuccess,
    sendRequest,
  };
}
