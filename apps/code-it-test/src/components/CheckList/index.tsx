'use client';

import React from 'react';
import CheckBox from '~/src/assets/icon/CheckBox';
import CheckListContainer from '~/src/components/CheckList/CheckListContainer';
import CheckListText from '~/src/components/CheckList/CheckListText';

interface CheckListProps {
  text: string;
  isChecked: boolean;
  src: string;
}

export default function CheckList({
  text,
  isChecked,
  src,
}: CheckListProps): React.JSX.Element {
  return (
    <CheckListContainer isChecked={isChecked} src={src}>
      <CheckBox isChecked={isChecked} />
      <CheckListText isChecked={isChecked} text={text} />
    </CheckListContainer>
  );
}
