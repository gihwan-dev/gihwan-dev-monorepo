'use client';

import { Suspense } from 'react';
import useTodoDetail from '~/src/hooks/useTodoDetail';

export default function DetailMemoInput() {
  const { todoDetail, changeTodoState } = useTodoDetail();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className="mt-4 flex h-80 w-full flex-col gap-4 overflow-hidden rounded-3xl bg-cover px-4 py-6"
        style={{
          backgroundImage: 'url(memo.jpg)',
        }}
      >
        <h3 className="text-center text-base font-extra-bold text-amber/800">
          Memo
        </h3>
        <div
          className="my-auto w-full resize-none overflow-auto bg-transparent text-center focus:outline-none"
          contentEditable
          onInput={(e) => {
            changeTodoState({ memo: e.currentTarget.textContent });
          }}
        >
          {todoDetail.memo ?? ''}
        </div>
      </div>
    </Suspense>
  );
}
