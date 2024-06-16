import TodoListContent from '~/src/components/TodoItemList/TodoListContent';
import { TodoContextProvider } from '~/src/providers/TodoContextProvider';
import DoneTagIcon from '~/src/assets/icon/DoneTagIcon';

export default function DoneItemList() {
  return (
    <ul className="mt-6 flex-1">
      <TodoContextProvider type="done">
        <DoneTagIcon />
        <TodoListContent />
      </TodoContextProvider>
    </ul>
  );
}
