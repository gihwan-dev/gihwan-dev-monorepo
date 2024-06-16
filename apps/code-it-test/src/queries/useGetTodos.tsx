import { useSuspenseQuery } from '@tanstack/react-query';
import { stores } from '~/src/queries/stores';
import { getTodos } from '~/src/apis/todo-api';

export default function useGetTodos() {
  return useSuspenseQuery({
    queryKey: stores.todo.getAll.queryKey,
    queryFn: getTodos,
  });
}
