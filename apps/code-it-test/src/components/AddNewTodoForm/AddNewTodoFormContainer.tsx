import React from 'react';

interface AddNewTodoFormContainerProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function AddNewTodoFormContainer({
  onSubmit,
  children,
}: AddNewTodoFormContainerProps) {
  return (
    <form
      className="mt-6 flex w-full flex-row flex-wrap gap-2"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
