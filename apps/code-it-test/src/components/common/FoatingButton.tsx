import React from 'react';
import { cn } from '~/lib/utils';

const floatingButtonVariants = {
  edit: 'bg-opacity-50 border-2 bg-slate/900 border-slate/900 rounded-full',
  add: 'rounded-full bg-slate/200',
};

interface FloatingButtonProps {
  icon: React.ReactNode;
  variants: 'edit' | 'add';
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function FloatingButton({
  icon,
  variants,
  onChange,
}: FloatingButtonProps) {
  return (
    <label
      className={cn(
        floatingButtonVariants[variants],
        'absolute bottom-4 right-4 z-20 flex h-16 w-16 cursor-pointer items-center justify-center transition-all hover:opacity-70',
      )}
      htmlFor="todo-detail-image-input"
    >
      <input
        alt="todo-detail-image-input"
        className="hidden"
        id="todo-detail-image-input"
        onChange={onChange}
        size={5}
        type="file"
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {icon}
      </span>
    </label>
  );
}
