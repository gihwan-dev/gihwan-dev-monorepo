"use client";

import {motion} from 'framer-motion';
import {draw} from "~/src/app/const/framer-variants";

interface CheckBoxProps {
  isChecked: boolean;
  onClick: () => void;
}

export default function CheckBox({ isChecked, onClick }: CheckBoxProps) {
  return (
      <button className="w-fit h-fit bg-none border-none" onClick={onClick} type="button"  >
        <motion.svg
            animate="visible"
            fill="none"
            height="32"
            initial="hidden"
            viewBox="0 0 32 32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
        >
          <circle
              className={"transition-all duration-100 ease-in-out"}
              cx="16"
              cy="16"
              fill={isChecked ? '#7C3AED' : '#FEFCE8'}
              r={isChecked ? '16' : '15'}
              stroke={isChecked ? '' : '#0F172A'}
              strokeWidth={isChecked ? '' : '2'}
          />
          {isChecked ? (
              <motion.path
                  d="M8 16.2857L13.8182 22L24 12"
                  stroke="#FEFCE8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  variants={draw}
              />
          ) : null}
        </motion.svg>
      </button>
  );
}
