import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({
  children,
}: ContainerProps): React.JSX.Element {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6 xl:p-0">
      {children}
    </div>
  );
}
