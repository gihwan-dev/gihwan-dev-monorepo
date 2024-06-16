'use client';

import useTodoList from '~/src/hooks/useTodoList';
import TodoContent from './TodoContent';

export default function TodoListController() {
  return <TodoContent {...useTodoList()} />;
}
