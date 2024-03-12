'use client';

import { useRouter } from 'next/navigation';

import { Button } from '^/components/atoms/Button';
import { useTodoItem } from '^/hooks/use-todo-item';
import { convertDateToString } from '^/utils/convert-date-to-string';

interface Props {
  params: {
    id: string;
  };
}

export default function ReadTodo({ params }: Props) {
  const { todoItem } = useTodoItem(params.id);
  const router = useRouter();

  return todoItem ? (
    <main className="w-full h-full flex flex-col justify-center items-center overflow-auto pt-4 gap-4">
      <h1>{todoItem.title}</h1>
      <span>생성일자: {convertDateToString(todoItem.createdAt)}</span>
      <span>수정일자: {convertDateToString(todoItem.updatedAt)}</span>
      <span>{todoItem.detail}</span>
      <div className="flex flex-row justify-centers gap-4">
        <Button
          onClick={() => {
            router.back();
          }}
        >
          이전
        </Button>
        <Button onClick={() => {}}>수정하기</Button>
        <Button onClick={() => {}}>삭제하기</Button>
      </div>
    </main>
  ) : null;
}
