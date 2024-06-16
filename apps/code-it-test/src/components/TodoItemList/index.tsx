import TodoTagIcon from '~/src/assets/icon/TodoTagIcon';
import TodoListContent from '~/src/components/TodoItemList/TodoListContent';
import { TodoContextProvider } from '~/src/providers/TodoContextProvider';

export default function TodoItemList() {
  return (
    <ul className="mt-6 flex-1">
      <TodoContextProvider type="todo">
        <TodoTagIcon />
        <TodoListContent />
      </TodoContextProvider>
    </ul>
  );
}
