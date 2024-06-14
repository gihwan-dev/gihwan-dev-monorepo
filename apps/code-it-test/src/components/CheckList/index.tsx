'use client';

import React from 'react';
import CheckBox from '~/src/app/assets/icon/CheckBox';
import CheckListContainer from '~/src/components/CheckList/CheckListContainer';
import CheckListText from '~/src/components/CheckList/CheckListText';

interface CheckListProps {
  text: string;
  isChecked: boolean;
  onClick: () => void;
}

export default function CheckList({
  text,
  ...rest
}: CheckListProps): React.JSX.Element {
  return (
    <CheckListContainer isChecked={rest.isChecked}>
      <CheckBox {...rest} />
      <CheckListText isChecked={rest.isChecked} text={text} />
    </CheckListContainer>
  );
}
