import type { ChangeEvent } from 'react';

export const getImage = (e: ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files) throw Error('파일이 존재하지 않습니다.');

  for (const file of e.target.files) {
    if (file instanceof File) {
      if (file.size > 1024 * 1024 * 5) {
        throw Error('파일의 크기는 5MB 이하여야 합니다.');
      }
      return file;
    }
  }

  throw Error('파일이 존재하지 않습니다.');
};
