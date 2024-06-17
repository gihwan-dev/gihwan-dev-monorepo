'use client';

import { Suspense } from 'react';
import { Button } from '~/src/components/common';
import { CheckIcon, CloseIcon } from '~/src/assets/icon';
import useTodoDetail from '~/src/hooks/useTodoDetail';

export default function DetailActions() {
  const { deleteTodo, updateTodo, todoDetail } = useTodoDetail();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="my-6 flex w-full flex-row items-center justify-center gap-2 xl:justify-end">
        <Button
          backgroundColor="lime"
          icon={<CheckIcon />}
          onClick={() => {
            updateTodo();
          }}
          text="수정 완료"
          textColor="slate"
          type="button"
        />
        <Button
          backgroundColor="rose"
          icon={<CloseIcon />}
          onClick={() => {
            deleteTodo();
          }}
          text="삭제 하기"
          textColor="white"
          type="button"
        />
      </div>
    </Suspense>
  );
}
