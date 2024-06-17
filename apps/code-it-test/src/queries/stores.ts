import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const stores = createQueryKeyStore({
  todo: {
    createOne: null,
    getAll: null,
    updateOne: (id: number) => [id],
    getOne: (id: number) => [id],
    deleteOne: (id: number) => [id],
  },
});
