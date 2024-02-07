import React from 'react';

import { TodoItemType } from '^/types';

function convertDateToString(date: Date) {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

interface Props {
  todoItemData: TodoItemType;
}

export function TodoItem({ todoItemData }: Props) {
  return (
    <li className="w-full p-4 border border-slate-600 rounded-lg flex flex-col gap-2 cursor-pointer hover:bg-lime-400">
      <div className="flex flex-row justify-between">
        <span>{todoItemData.title}</span>
        <span>{convertDateToString(todoItemData.createdAt)}</span>
      </div>
      <span className="truncate">{todoItemData.detail}</span>
    </li>
  );
}
