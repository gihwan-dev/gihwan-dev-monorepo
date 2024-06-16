'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useRef } from 'react';

const TodoContext = createContext<'todo' | 'done'>('todo');

export function TodoContextProvider({
  children,
  type,
}: {
  children: ReactNode;
  type: 'todo' | 'done';
}) {
  const value = useRef<'todo' | 'done'>(type);

  return (
    <TodoContext.Provider value={value.current}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
