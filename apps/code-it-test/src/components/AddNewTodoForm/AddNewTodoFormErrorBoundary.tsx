import React from 'react';
import type { ErrorComponent } from 'next/dist/client/components/error-boundary';

const AddNewTodoFormErrorBoundary: ErrorComponent = ({ error, reset }) => {
  return (
    <div className="flex h-[100px] flex-col items-center justify-center gap-4">
      <p>{error.message}</p>
      <button onClick={reset} type="button">
        다시 시도
      </button>
    </div>
  );
};

export default AddNewTodoFormErrorBoundary;
