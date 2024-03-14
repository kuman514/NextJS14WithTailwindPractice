'use client';

import { useRouter } from 'next/navigation';

import { Button } from '^/components/atoms/Button';
import { TodoForm } from '^/components/organisms/TodoForm';
import { useDeleteTodoItem } from '^/hooks/use-delete-todo-item';
import { useTodoItem } from '^/hooks/use-todo-item';
import { convertDateToString } from '^/utils/convert-date-to-string';
import { useEffect, useState } from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default function ReadTodo({ params }: Props) {
  const { todoItem } = useTodoItem(params.id);
  const router = useRouter();
  const {
    isLoading,
    isSuccess,
    sendRequest: sendDeleteRequest,
  } = useDeleteTodoItem(params.id);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      router.back();
    }
  }, [isSuccess]);

  const renderContent = (() => {
    if (!todoItem) {
      return null;
    }

    return isEditMode ? (
      <TodoForm
        initTitle={todoItem.title}
        initDetail={todoItem.detail}
        submitButtonLabel="Modify"
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

            const response = await fetch(`/api/todos/${todoItem.id}`, {
              method: 'PATCH',
              body: JSON.stringify({
                ...todoItem,
                title: event.target.todoTitle.value,
                detail: event.target.todoDetail.value,
                updatedAt: new Date(),
              }),
            });

            if (response.ok) {
              router.push('/');
            }
          })();
        }}
      />
    ) : (
      <>
        <h1>{todoItem.title}</h1>
        <span>생성일자: {convertDateToString(todoItem.createdAt)}</span>
        <span>수정일자: {convertDateToString(todoItem.updatedAt)}</span>
        <span>{todoItem.detail}</span>
        <div className="flex flex-row justify-centers gap-4">
          <Button
            isDisabled={isLoading}
            onClick={() => {
              router.back();
            }}
          >
            이전
          </Button>
          <Button
            isDisabled={isLoading}
            onClick={() => {
              setIsEditMode(true);
            }}
          >
            수정하기
          </Button>
          <Button
            isDisabled={isLoading}
            onClick={() => {
              sendDeleteRequest();
            }}
          >
            삭제하기
          </Button>
        </div>
      </>
    );
  })();

  return todoItem ? (
    <main className="w-full h-full flex flex-col justify-center items-center overflow-auto pt-4 gap-4">
      {renderContent}
    </main>
  ) : null;
}
