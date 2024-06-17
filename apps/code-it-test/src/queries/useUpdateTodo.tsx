import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { updateTodo } from '~/src/apis/todo-api';
import { stores } from '~/src/queries/stores';
import type { TodoOverview } from '~/src/types/todo-type';

export default function useUpdateTodo(id: number) {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: updateTodo,
    mutationKey: stores.todo.createOne.queryKey,
    // 낙관적 업데이트 진행
    onMutate: async (newTodo) => {
      // 진행되는 다른 쿼리를 취소합니다. 낙관적 업데이트가 덮어씌어지지 않도록 하기 위함 입니다.
      await queryClient.cancelQueries({
        queryKey: ['todo'],
      });

      // 이전 데이터의 스냅샷을 찍습니다.
      const previousData = queryClient.getQueryData<TodoOverview[]>(
        stores.todo.getOne(id).queryKey,
      );

      // 새로운 데이터로 detail 및 getAll 의 데이터를 업데이트 합니다.
      queryClient.setQueryData(stores.todo.getOne(id).queryKey, newTodo);
      queryClient.setQueryData(
        stores.todo.getAll.queryKey,
        (prev: TodoOverview[] | undefined) => {
          return prev?.map((todo) =>
            todo.id === id
              ? { name: newTodo.name, isCompleted: newTodo.isCompleted }
              : todo,
          );
        },
      );
      router.push('/');

      // 이전 데이터를 반환합니다.

      return { previousData, newTodo };
    },
    // 쿼리 실패시 이전 데이터로 복구합니다.
    onError: (err, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData(
        stores.todo.getOne(context.newTodo.id).queryKey,
        context.previousData,
      );
      queryClient.setQueryData(
        stores.todo.getAll.queryKey,
        (prev: TodoOverview[] | undefined) => {
          return prev?.map((todo) =>
            todo.id === id ? context.previousData : todo,
          );
        },
      );
    },
    // 쿼리 성공시 쿼리를 재요청해 서버 데이터와 동기화 합니다.
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: stores.todo.getAll.queryKey,
      });
      void queryClient.invalidateQueries({
        queryKey: stores.todo.getOne(id).queryKey,
      });
    },
  });
}
