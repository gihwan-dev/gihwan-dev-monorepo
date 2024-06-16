import { motion } from 'framer-motion';
import React from 'react';
import { cn } from '~/lib/utils';

interface CheckListDetailProps {
  text: string;
  isChecked: boolean;
}

export default function CheckListDetailText({
  text,
  isChecked,
}: CheckListDetailProps) {
  return (
    <div
      className={cn(
        'relative line-clamp-1 w-fit max-w-full text-large font-bold text-slate/900',
      )}
    >
      {text}
      {isChecked ? (
        <motion.hr
          animate={{ width: '100%' }}
          className="absolute bottom-1 w-full border-slate/800"
          initial={{ width: 0 }}
          transition={{ duration: 0.5 }}
        />
      ) : null}
    </div>
  );
}
