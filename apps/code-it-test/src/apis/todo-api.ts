import type { Todo, TodoOverview } from '~/src/types/todo-type';

export async function createTodo(name: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    throw new Error('Failed to create');
  }

  return (await res.json()) as TodoOverview;
}

export async function getTodos() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return (await response.json()) as Pick<Todo, 'id' | 'name' | 'isCompleted'>[];
}

export async function updateTodo(
  todo: Pick<Todo, 'name' | 'memo' | 'imageUrl' | 'id' | 'isCompleted'>,
) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items/${todo.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: todo.name,
      memo: todo.memo ?? '',
      imageUrl: todo.imageUrl ?? '',
      isCompleted: todo.isCompleted,
    }),
  });
}

export async function getTodoDetail(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return (await response.json()) as Todo;
}

export async function uploadImage(formData: FormData) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/images/upload`,
    {
      method: 'POST',
      body: formData,
    },
  );

  if (!response.ok) {
    throw new Error('Failed to upload');
  }

  return (await response.json()) as { url: string };
}

export function deleteTodo(id: number) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`, {
    method: 'DELETE',
  });
}
