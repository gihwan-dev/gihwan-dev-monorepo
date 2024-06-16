import type { ChangeEvent } from 'react';
import { useState } from 'react';
import useGetTodoDetail from '~/src/queries/useGetTodoDetail';
import useUpdateTodo from '~/src/queries/useUpdateTodo';
import type { Todo } from '~/src/types/todo-type';
import { getImage } from '~/src/utils/input-utils';
import { uploadImage } from '~/src/apis/todo-api';

export default function useTodoDetail(id: number) {
  const { mutate } = useUpdateTodo(id);

  const { data: todoDetail } = useGetTodoDetail(id);

  const [todoState, setTodoState] = useState<Todo>(todoDetail);

  const changeTodoState = (newTodoState: Partial<Todo>) => {
    setTodoState((prev) => ({ ...prev, ...newTodoState }));
  };

  const updateTodo = (newTodoState: Todo) => {
    mutate(newTodoState);
  };

  const changeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = getImage(e);

    // 이미지 url 생성해서 낙관적 업데이트
    changeTodoState({ ...todoState, imageUrl: URL.createObjectURL(image) });

    const formData = new FormData();

    formData.append('image', image);

    const result = await uploadImage(formData);

    setTodoState((prev) => ({ ...prev, imageUrl: result.url }));
  };

  return {
    todoDetail: todoState,
    updateTodo,
    changeTodoState,
    changeImage,
  };
}
