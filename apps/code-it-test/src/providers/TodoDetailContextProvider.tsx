'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import type { Todo } from '~/src/types/todo-type';

interface TodoDetailContextStatus {
  todoDetail: Todo;
  updateTodo: (newTodo: Partial<Todo>) => void;
}

const TodoDetailContext = createContext<TodoDetailContextStatus | null>(null);

interface TodoDetailContextProviderProps {
  children: ReactNode;
  todoDetail: Todo;
}

export function TodoDetailContextProvider({
  children,
  todoDetail,
}: TodoDetailContextProviderProps) {
  const [todoState, setTodoState] = useState<Todo>({ ...todoDetail });

  const updateTodo = (newTodo: Partial<Todo>) => {
    setTodoState((prev) => {
      return { ...prev, ...newTodo };
    });
  };

  return (
    <TodoDetailContext.Provider
      value={{
        todoDetail: todoState,
        updateTodo,
      }}
    >
      {children}
    </TodoDetailContext.Provider>
  );
}

export const useTodoDetailContext = () => {
  const context = useContext(TodoDetailContext);

  if (!context) {
    throw new Error(
      'useTodoDetailContext must be used within a TodoDetailContextProvider',
    );
  }

  return context;
};
