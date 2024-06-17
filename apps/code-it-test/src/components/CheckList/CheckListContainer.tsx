import React from 'react';
import Link from 'next/link';
import { cn } from '~/lib/utils';

interface CheckListContainerProps {
  isChecked: boolean;
  children: React.ReactNode;
  src: string;
}

export default function CheckListContainer({
  isChecked,
  children,
  src,
}: CheckListContainerProps) {
  return (
    <Link
      className={cn(
        'flex w-full cursor-pointer flex-row items-center gap-4 rounded-full border-2 border-slate/900 px-3 py-[9px] transition-all active:opacity-50 xl:hover:opacity-70',
        isChecked ? 'bg-violet/100' : 'bg-white',
      )}
      href={src}
    >
      {children}
    </Link>
  );
}
