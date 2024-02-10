'use client';

import { Button } from '^/components/atoms/Button';
import { TodoList } from '^/components/molecules/TodoList';

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center overflow-scroll pt-4 gap-4">
      <div className="w-full h-full flex flex-col items-center overflow-scroll">
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
            {
              id: 3,
              title: 'koishi',
              detail: 'Koishi is an adorable baby!',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 4,
              title: 'hoshino',
              detail:
                'Hoshino is also an adorable baby! She is from Abydos High School, Kivotos. Yarn Lorem Ipsum.',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 5,
              title: 'koishi',
              detail: 'Koishi is an adorable baby!',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 6,
              title: 'hoshino',
              detail:
                'Hoshino is also an adorable baby! She is from Abydos High School, Kivotos. Yarn Lorem Ipsum.',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 7,
              title: 'koishi',
              detail: 'Koishi is an adorable baby!',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 8,
              title: 'hoshino',
              detail:
                'Hoshino is also an adorable baby! She is from Abydos High School, Kivotos. Yarn Lorem Ipsum.',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]}
        />
      </div>
      <Button
        onClick={() => {
          /**
           * @todo
           * Link to create-todo
           */
        }}
      >
        New Todo
      </Button>
    </main>
  );
}
