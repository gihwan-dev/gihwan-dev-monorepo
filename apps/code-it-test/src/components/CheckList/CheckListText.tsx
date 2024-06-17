import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';

interface CheckListTextProps {
  text: string;
  isChecked: boolean;
}

export default function CheckListText({ text, isChecked }: CheckListTextProps) {
  return (
    <div
      className={cn(
        'relative line-clamp-1 w-fit text-base font-normal text-slate/800',
      )}
    >
      {text}
      {isChecked ? (
        <motion.hr
          animate={{ width: '100%' }}
          className="absolute top-1/2 w-full -translate-y-1/2 border-slate/800"
          initial={{ width: 0 }}
          transition={{ duration: 0.5 }}
        />
      ) : null}
    </div>
  );
}
