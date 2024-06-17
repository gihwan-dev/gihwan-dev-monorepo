'use client';

import React from 'react';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import AddNewTodoFormController from '~/src/components/AddNewTodoForm/AddNewTodoFormController';
import AddNewTodoFormErrorBoundary from '~/src/components/AddNewTodoForm/AddNewTodoFormErrorBoundary';

export default function AddNewTodoForm() {
  return (
    // TODO: 에러 바운더리 수정하기
    <ErrorBoundary errorComponent={AddNewTodoFormErrorBoundary}>
      <AddNewTodoFormController />
    </ErrorBoundary>
  );
}
