import React from 'react';
import { cn } from '~/lib/utils';

interface CheckListDetailContainerProps {
  isChecked: boolean;
  children: React.ReactNode;
}

export default function CheckListDetailContainer({
  isChecked,
  children,
}: CheckListDetailContainerProps) {
  return (
    <li
      className={cn(
        'mt-4 flex w-full flex-row items-center justify-center gap-4 overflow-visible rounded-full border-2 border-slate/900 py-[9px] pl-3 pr-7 transition-all xl:mt-6',
        isChecked ? 'bg-violet/100' : 'bg-white',
      )}
    >
      {children}
    </li>
  );
}
