'use client';

import Image from 'next/image';
import { Suspense } from 'react';
import useTodoDetail from '~/src/hooks/useTodoDetail';
import { FloatingButton } from '~/src/components/common';
import { EditIcon, PlusIcon } from '~/src/assets/icon';
import EmptyImageView from '~/src/components/DetailImageInput/EmptyImageView';
import { isValidImage } from '~/src/utils/todo-utils';

export default function DetailImageInput() {
  const { todoDetail, changeImage } = useTodoDetail();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative mt-4 h-80 w-full overflow-hidden rounded-3xl xl:w-[495px]">
        {isValidImage(todoDetail.imageUrl) ? (
          <Image
            alt="todo-detail-image-input"
            className="object-cover"
            fill
            src={todoDetail.imageUrl}
          />
        ) : (
          <EmptyImageView />
        )}
        <FloatingButton
          icon={
            isValidImage(todoDetail.imageUrl) ? (
              <EditIcon />
            ) : (
              <PlusIcon size="large" />
            )
          }
          onChange={(e) => {
            void changeImage(e);
          }}
          variants={isValidImage(todoDetail.imageUrl) ? 'edit' : 'add'}
        />
      </div>
    </Suspense>
  );
}
