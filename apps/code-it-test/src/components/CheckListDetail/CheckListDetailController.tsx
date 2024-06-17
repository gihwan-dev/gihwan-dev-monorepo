'use client';

import CheckListDetailText from '~/src/components/CheckListDetail/CheckListDetailText';
import CheckListDetailContainer from '~/src/components/CheckListDetail/CheckListDetailContainer';
import useTodoDetail from '~/src/hooks/useTodoDetail';
import CheckBox from '../../assets/icon/CheckBox';

export default function CheckListDetailController() {
  const { todoDetail, changeTodoState } = useTodoDetail();

  return (
    <CheckListDetailContainer isChecked={todoDetail.isCompleted}>
      <CheckBox
        isChecked={todoDetail.isCompleted}
        onClick={() => {
          changeTodoState({
            ...todoDetail,
            isCompleted: !todoDetail.isCompleted,
          });
        }}
      />
      <CheckListDetailText
        isChecked={todoDetail.isCompleted}
        text={todoDetail.name}
      />
    </CheckListDetailContainer>
  );
}
