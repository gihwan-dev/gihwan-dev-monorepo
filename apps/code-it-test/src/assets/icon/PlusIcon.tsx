interface PlusIconProps {
  size: 'small' | 'large';
}

export default function PlusIcon({ size }: PlusIconProps) {
  return size === 'small' ? <PlusSmall /> : <PlusLarge />;
}

function PlusLarge() {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12L21 12"
        stroke="#64748B"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M12 21L12 3"
        stroke="#64748B"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
}

function PlusSmall() {
  return (
    <svg
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8L14 8"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M8 14L8 2"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}
