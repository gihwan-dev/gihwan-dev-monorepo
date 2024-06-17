import type { ChangeEvent } from 'react';
import useUpdateTodo from '~/src/queries/useUpdateTodo';
import { getImage } from '~/src/utils/input-utils';
import { uploadImage } from '~/src/apis/todo-api';
import { useTodoDetailContext } from '~/src/providers/TodoDetailContextProvider';
import useDeleteTodo from '../queries/useDeleteTodo';

export default function useTodoDetail() {
  const { todoDetail, updateTodo: changeTodoState } = useTodoDetailContext();
  const { mutate: requestUpdate } = useUpdateTodo(todoDetail.id);
  const { mutate: requestDelete } = useDeleteTodo(todoDetail.id);

  const updateTodo = () => {
    requestUpdate(todoDetail);
  };

  const deleteTodo = () => {
    requestDelete(todoDetail.id);
  };

  const changeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = getImage(e);

    // 이미지 url 생성해서 낙관적 업데이트
    changeTodoState({ imageUrl: URL.createObjectURL(image) });

    const formData = new FormData();

    formData.append('image', image);

    const result = await uploadImage(formData);

    changeTodoState({ imageUrl: result.url });
  };

  return {
    todoDetail,
    updateTodo,
    changeTodoState,
    changeImage,
    deleteTodo,
  };
}
