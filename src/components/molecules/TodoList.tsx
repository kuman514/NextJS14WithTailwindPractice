import React from 'react';

import { TodoItem } from '^/components/atoms/TodoItem';
import { TodoItemType } from '^/types';

interface Props {
  todoItemDataArray: TodoItemType[];
}

export function TodoList({ todoItemDataArray }: Props) {
  return (
    <ul className="w-full flex flex-col gap-2">
      {todoItemDataArray.map((todoItemData) => (
        <TodoItem key={todoItemData.id} todoItemData={todoItemData} />
      ))}
    </ul>
  );
}
