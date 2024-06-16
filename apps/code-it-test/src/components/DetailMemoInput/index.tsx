'use client';

import useTodoDetail from '~/src/hooks/useTodoDetail';

interface DetailMemoInputProps {
  id: number;
}

export default function DetailMemoInput({ id }: DetailMemoInputProps) {
  const { todoDetail, changeTodoState } = useTodoDetail(id);

  return (
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
        defaultValue={todoDetail.memo ?? ''}
        onInput={(e) => {
          changeTodoState({ memo: e.currentTarget.textContent });
        }}
      />
    </div>
  );
}
