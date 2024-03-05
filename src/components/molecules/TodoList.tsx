import { TodoItem } from '^/components/atoms/TodoItem';
import { TodoItemType } from '^/types';

interface Props {
  todoItemDataArray: TodoItemType[];
  onClickTodoItem(todoItemId: TodoItemType['id']): void;
}

export function TodoList({ todoItemDataArray, onClickTodoItem }: Props) {
  return (
    <ul className="w-full flex flex-col gap-2">
      {todoItemDataArray.map((todoItemData) => (
        <TodoItem
          key={todoItemData.id}
          todoItemData={todoItemData}
          onClick={() => {
            onClickTodoItem(todoItemData.id);
          }}
        />
      ))}
    </ul>
  );
}
