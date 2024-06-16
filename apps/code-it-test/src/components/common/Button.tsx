import React from 'react';
import { cn } from '~/lib/utils';

const textColorObj = {
  white: 'text-white',
  slate: 'text-slate/900',
};

const backgroundColorObj = {
  gray: 'bg-slate/200',
  rose: 'bg-rose/500',
  lime: 'bg-lime/300',
  violet: 'bg-violet/600',
};

interface ButtonProps {
  text?: string | undefined;
  icon: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  textColor?: 'white' | 'slate';
  backgroundColor: 'gray' | 'rose' | 'lime' | 'violet';
}

export default function Button({
  text,
  icon,
  type = 'button',
  onClick,
  textColor = 'white',
  backgroundColor,
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={cn(
        'box-border flex flex-none shrink-0 flex-row items-center justify-center gap-1 rounded-full border-2 border-slate/900 bg-white px-6 py-4 text-base font-bold shadow-button transition-all active:opacity-70',
        textColorObj[textColor],
        text !== undefined ? 'w-[168px] min-w-[168px]' : '',
        backgroundColorObj[backgroundColor],
      )}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type -- type not inferred
      type={type}
    >
      {icon}
      {text !== undefined ? <span className="mt-[1px]">{text}</span> : null}
    </button>
  );
}
