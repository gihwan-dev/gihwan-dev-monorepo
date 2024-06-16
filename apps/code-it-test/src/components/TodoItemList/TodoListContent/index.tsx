import { Suspense } from 'react';
import TodoListController from '~/src/components/TodoItemList/TodoListContent/TodoListController';

export default function TodoListContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TodoListController />
    </Suspense>
  );
}
