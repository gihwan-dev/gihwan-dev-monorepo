import { useSuspenseQuery } from '@tanstack/react-query';
import { stores } from '~/src/queries/stores';
import { getTodoDetail } from '~/src/apis/todo-api';

export default function useGetTodoDetail(id: number) {
  return useSuspenseQuery({
    queryKey: stores.todo.getOne(id).queryKey,
    queryFn: () => getTodoDetail(id),
  });
}
