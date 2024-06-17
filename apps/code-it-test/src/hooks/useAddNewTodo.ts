import type React from 'react';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import useCreateTodo from '~/src/queries/useCreateTodo';
import { stores } from '~/src/queries/stores';
import type { TodoOverview } from '~/src/types/todo-type';

export default function useAddNewTodo() {
  const [name, setName] = useState('');

  const { mutate, isPending } = useCreateTodo();

  const queryClient = useQueryClient();

  const handleChange = (value: string) => {
    setName(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(name, {
      onSuccess: (data) => {
        setName('');
        queryClient.setQueryData(
          stores.todo.getAll.queryKey,
          (prev: TodoOverview[]) => {
            return [...prev, data];
          },
        );
      },
    });
  };

  const getColor = (): {
    backgroundColor: 'violet' | 'gray';
    textColor: 'white' | 'slate';
    iconColor: 'slate/900' | 'white';
  } => {
    if (name.trim().length === 0) {
      return {
        backgroundColor: 'gray',
        textColor: 'slate',
        iconColor: 'slate/900',
      };
    }

    return {
      backgroundColor: 'violet',
      textColor: 'white',
      iconColor: 'white',
    };
  };

  return {
    name,
    handleChange,
    onSubmit,
    getColor,
    isPending,
  };
}
