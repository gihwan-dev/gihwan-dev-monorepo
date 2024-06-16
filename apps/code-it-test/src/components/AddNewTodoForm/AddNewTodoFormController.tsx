import React from 'react';
import { LoaderCircle } from 'lucide-react';
import AddNewTodoFormContainer from '~/src/components/AddNewTodoForm/AddNewTodoFormContainer';
import useAddNewTodo from '~/src/hooks/useAddNewTodo';
import { Button, Input } from '~/src/components/common';
import { PlusIcon } from '~/src/assets/icon';
import useWindowWidth from '~/src/hooks/useWindowWidth';

export default function AddNewTodoFormController() {
  const { onSubmit, handleChange, getColor, name, isPending } = useAddNewTodo();
  const { isMobile } = useWindowWidth();

  return (
    <AddNewTodoFormContainer onSubmit={onSubmit}>
      <Input onChange={handleChange} value={name} />
      <Button
        backgroundColor={getColor().backgroundColor}
        icon={
          isPending ? (
            <LoaderCircle className="animate-spin text-white" size={16} />
          ) : (
            <PlusIcon size="small" />
          )
        }
        text={isMobile() ? undefined : '추가하기'}
        textColor={getColor().textColor}
        type="submit"
      />
    </AddNewTodoFormContainer>
  );
}
