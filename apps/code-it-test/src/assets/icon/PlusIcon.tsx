import { cn } from '~/lib/utils';

interface PlusIconProps {
  size: 'small' | 'large';
  color?: 'white' | 'black' | 'gray';
}

const iconColor = {
  white: 'stroke-white',
  black: 'stroke-slate/900',
  gray: 'stroke-slate/500',
};

export default function PlusIcon({ size, color }: PlusIconProps) {
  return size === 'small' ? (
    <PlusSmall color={color} />
  ) : (
    <PlusLarge color={color} />
  );
}

function PlusLarge({ color = 'gray' }: Pick<PlusIconProps, 'color'>) {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn(iconColor[color])}
        d="M3 12L21 12"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        className={cn(iconColor[color])}
        d="M12 21L12 3"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
}

function PlusSmall({ color = 'white' }: Pick<PlusIconProps, 'color'>) {
  return (
    <svg
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn(iconColor[color])}
        d="M2 8L14 8"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        className={cn(iconColor[color])}
        d="M8 14L8 2"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}
