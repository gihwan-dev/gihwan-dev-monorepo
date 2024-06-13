interface CheckBoxProps {
  isChecked: boolean;
}

export default function CheckBox({ isChecked }: CheckBoxProps) {
  if (isChecked) {
    return (
      <svg
        fill="none"
        height="32"
        viewBox="0 0 32 32"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="16"
          cy="16"
          fill="#FEFCE8"
          r="15"
          stroke="#0F172A"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" fill="#7C3AED" r="16" />
      <path
        d="M8 16.2857L13.8182 22L24 12"
        stroke="#FEFCE8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
}
