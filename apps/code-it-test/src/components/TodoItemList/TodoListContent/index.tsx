import { Suspense } from 'react';
import TodoContent from '~/src/components/TodoItemList/TodoListContent/TodoContent';

export default function TodoListContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TodoContent />
    </Suspense>
  );
}
