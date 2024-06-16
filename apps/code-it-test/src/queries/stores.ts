import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const stores = createQueryKeyStore({
  todo: {
    createOne: null,
    getAll: null,
    updateOne: (id: number) => ['todo', id],
    getOne: (id: number) => ['todo', id],
  },
});
