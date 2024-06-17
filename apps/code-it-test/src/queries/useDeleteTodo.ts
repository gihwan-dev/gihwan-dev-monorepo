import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { stores } from '~/src/queries/stores';
import { deleteTodo } from '~/src/apis/todo-api';
import type { TodoOverview } from '~/src/types/todo-type';

export default function useDeleteTodo(id: number) {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: stores.todo.deleteOne(id).queryKey,
    mutationFn: deleteTodo,
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ['todo'],
      });

      const prevDataList = queryClient.getQueryData<TodoOverview[]>(
        stores.todo.getAll.queryKey,
      );

      queryClient.setQueryData(
        stores.todo.getAll.queryKey,
        prevDataList?.filter((todo) => todo.id !== id),
      );
      router.push('/');

      return { prevDataList };
    },
    onError: (err, _, context) => {
      if (!context) return;
      queryClient.setQueryData(
        stores.todo.getAll.queryKey,
        context.prevDataList,
      );
    },
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: stores.todo.getAll.queryKey,
      });
    },
  });
}
