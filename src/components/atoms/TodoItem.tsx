import { TodoItemType } from '^/types';
import { convertDateToString } from '^/utils/convert-date-to-string';

interface Props {
  todoItemData: TodoItemType;
  onClick(): void;
}

export function TodoItem({ todoItemData, onClick }: Props) {
  return (
    <li
      onClick={onClick}
      className="w-full p-4 border border-slate-600 rounded-lg flex flex-col gap-2 cursor-pointer hover:bg-lime-400"
    >
      <div className="flex flex-row justify-between">
        <span>{todoItemData.title}</span>
        <span>{convertDateToString(todoItemData.createdAt)}</span>
      </div>
      <span className="truncate">{todoItemData.detail}</span>
    </li>
  );
}
