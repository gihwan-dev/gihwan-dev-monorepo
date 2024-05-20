import { createQueryKeyStore } from "@lukemorales/query-key-factory";

export const queries = createQueryKeyStore({
  // TODO: access token 쿼리 키 생성
  token: {
    get: null,
  },
});
