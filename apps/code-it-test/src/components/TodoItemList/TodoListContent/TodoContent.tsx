'use client';

import ContentSelector from '~/src/components/common/ContentSelector';
import CheckList from '~/src/components/CheckList';
import useTodoList from '~/src/hooks/useTodoList';

export default function TodoContent() {
  const { todoList, emptyContent } = useTodoList();
  return (
    <ContentSelector
      emptyContent={emptyContent}
      isEmpty={todoList.length === 0}
    >
      <div className="mt-4 flex w-full flex-col gap-4">
        {todoList.map((todo) => {
          return (
            <CheckList
              isChecked={todo.isCompleted}
              key={`todo-item-${todo.id}`}
              src={`/${todo.id}`}
              text={todo.name}
            />
          );
        })}
      </div>
    </ContentSelector>
  );
}
