import { useMutation } from '@tanstack/react-query';
import { createTodo } from '~/src/apis/todo-api';
import { stores } from '~/src/queries/stores';

export default function useCreateTodo() {
  return useMutation({
    mutationFn: createTodo,
    mutationKey: stores.todo.createOne.queryKey,
  });
}
