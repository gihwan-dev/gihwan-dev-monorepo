import type React from 'react';

interface ContentSelectorProps {
  emptyContent: React.ReactNode;
  children: React.ReactNode;
  isEmpty: boolean;
}

export default function ContentSelector({
  emptyContent,
  isEmpty,
  children,
}: ContentSelectorProps) {
  if (isEmpty) {
    return emptyContent;
  }

  return children;
}
