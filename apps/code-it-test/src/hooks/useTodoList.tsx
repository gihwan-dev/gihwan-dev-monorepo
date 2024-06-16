import { useRouter } from 'next/navigation';
import useGetTodos from '~/src/queries/useGetTodos';
import { useTodoContext } from '~/src/providers/TodoContextProvider';
import TodoEmptyContent from '~/src/components/TodoItemList/TodoListContent/TodoEmptyContent';
import DoneEmptyContent from '~/src/components/TodoItemList/TodoListContent/DoneEmptyContent';

export default function useTodoList() {
  const { data } = useGetTodos();
  const type = useTodoContext();

  const router = useRouter();

  const todoList = data.filter((todo) => !todo.isCompleted);
  const doneList = data.filter((todo) => todo.isCompleted);

  const navigateToDetailPage = (id: number) => {
    router.push(`/${id}`);
  };

  return {
    todoList: type === 'todo' ? todoList : doneList,
    navigateToDetailPage,
    emptyContent: type === 'todo' ? <TodoEmptyContent /> : <DoneEmptyContent />,
  };
}
