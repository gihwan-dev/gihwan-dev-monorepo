import React from 'react';
import { cn } from '~/lib/utils';

const floatingButtonVariants = {
  edit: 'bg-opacity-50 border-2 bg-slate/900 border-slate/900 rounded-full',
  add: 'rounded-full bg-slate/200',
};

interface FloatingButtonProps {
  icon: React.ReactNode;
  variants: 'edit' | 'add';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function FloatingButton({
  icon,
  variants,
  onClick,
}: FloatingButtonProps) {
  return (
    <button
      className={cn(
        floatingButtonVariants[variants],
        'absolute bottom-4 right-4 z-10 flex h-16 w-16 items-center justify-center transition-all hover:opacity-70',
      )}
      onClick={onClick}
      type="button"
    >
      {icon}
    </button>
  );
}
