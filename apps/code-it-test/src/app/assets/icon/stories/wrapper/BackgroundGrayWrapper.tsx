import React from 'react';

export default function BackgroundGrayWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-200 p-8">{children}</div>;
}
