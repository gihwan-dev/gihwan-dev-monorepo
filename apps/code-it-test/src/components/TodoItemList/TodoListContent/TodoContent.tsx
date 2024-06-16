import ContentSelector from '~/src/components/common/ContentSelector';
import type { Todo } from '~/src/types/todo-type';
import CheckList from '~/src/components/CheckList';

interface TodoContentProps {
  todoList: Pick<Todo, 'name' | 'id' | 'isCompleted'>[];
  navigateToDetailPage: (id: number) => void;
  emptyContent: React.ReactNode;
}

export default function TodoContent({
  todoList,
  navigateToDetailPage,
  emptyContent,
}: TodoContentProps) {
  return (
    <ContentSelector
      emptyContent={emptyContent}
      isEmpty={todoList.length === 0}
    >
      <div className="mt-4 flex w-full flex-col gap-4">
        {todoList.map((todo) => (
          <CheckList
            isChecked={todo.isCompleted}
            key={`todo-item-${todo.id}`}
            onClick={() => {
              navigateToDetailPage(todo.id);
            }}
            text={todo.name}
          />
        ))}
      </div>
    </ContentSelector>
  );
}
