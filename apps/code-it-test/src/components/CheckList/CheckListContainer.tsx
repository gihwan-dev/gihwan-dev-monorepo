import React from 'react';
import { cn } from '~/lib/utils';

interface CheckListContainerProps {
  isChecked: boolean;
  children: React.ReactNode;
}

export default function CheckListContainer({
  isChecked,
  children,
}: CheckListContainerProps) {
  return (
    <li
      className={cn(
        'flex w-full flex-row items-center gap-4 rounded-full border-2 border-slate/900 px-3 py-[9px] transition-all',
        isChecked ? 'bg-violet/100' : 'bg-white',
      )}
    >
      {children}
    </li>
  );
}
