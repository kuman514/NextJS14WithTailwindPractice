import React from 'react';

import { TodoList } from '^/components/molecules/TodoList';

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center overflow-scroll">
      <TodoList
        todoItemDataArray={[
          {
            id: 1,
            title: 'koishi',
            detail: 'Koishi is an adorable baby!',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            title: 'hoshino',
            detail:
              'Hoshino is also an adorable baby! She is from Abydos High School, Kivotos. Yarn Lorem Ipsum.',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]}
      />
    </main>
  );
}
