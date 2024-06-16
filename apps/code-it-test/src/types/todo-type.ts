export interface Todo {
  isCompleted: boolean;
  imageUrl: string | null;
  memo: string | null;
  name: string;
  tenantId: string;
  id: number;
}

export type TodoOverview = Pick<Todo, 'name' | 'id' | 'isCompleted'>;
