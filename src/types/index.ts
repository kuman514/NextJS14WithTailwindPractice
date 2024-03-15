export interface TodoItemType {
  id: string;
  title: string;
  detail: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoItemApiAttributes {
  title: TodoItemType['title'];
  detail: TodoItemType['detail'];
}
