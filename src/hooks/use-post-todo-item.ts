import { useState } from 'react';

import { TodoItemType } from '^/types';

interface PostTodoItemAttributes {
  title: TodoItemType['title'];
  detail: TodoItemType['detail'];
}

export function usePostTodoItem() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  async function sendRequest(newTodoItemValues: PostTodoItemAttributes) {
    setIsLoading(true);
    setIsError(false);

    try {
      await fetch('/api/todos/', {
        method: 'POST',
        body: JSON.stringify({
          ...newTodoItemValues,
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
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
