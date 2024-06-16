import React from 'react';
import { cn } from '~/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  className,
  children,
}: ContainerProps): React.JSX.Element {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-4 md:px-6 xl:p-0',
        className,
      )}
    >
      {children}
    </div>
  );
}
