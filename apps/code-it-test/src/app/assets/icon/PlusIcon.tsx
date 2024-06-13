import { cn } from '~/lib/utils';

const colorObj = {
  white: 'stroke-white',
  'slate/900': 'stroke-slate/900',
  'slate/500': 'stroke-slate/500',
};

const sizeObj = {
  small: 'h-[12px] w-[12px]',
  large: 'h-[18px] w-[18px]',
};

const strokeObj = {
  small: '2',
  large: '3',
};

interface PlusIconProps {
  color: 'white' | 'slate/900' | 'slate/500';
  size: 'small' | 'large';
}

export default function PlusIcon({ color, size }: PlusIconProps) {
  return (
    <svg
      className={cn(sizeObj[size])}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn(colorObj[color])}
        d="M2 8L14 8"
        strokeLinecap="round"
        strokeWidth={strokeObj[size]}
      />
      <path
        className={cn(colorObj[color])}
        d="M8 14L8 2"
        strokeLinecap="round"
        strokeWidth={strokeObj[size]}
      />
    </svg>
  );
}
