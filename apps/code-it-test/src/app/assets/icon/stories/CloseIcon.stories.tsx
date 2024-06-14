import type { Meta, StoryObj } from '@storybook/react';
import BackgroundGrayWrapper from '~/src/app/assets/icon/stories/wrapper/BackgroundGrayWrapper';
import CloseIcon from '../CloseIcon';

const meta: Meta = {
  title: 'CloseIcon',
  component: () => {
    return (
      <BackgroundGrayWrapper>
        <CloseIcon />
      </BackgroundGrayWrapper>
    );
  },
};

export default meta;

export type Story = StoryObj<typeof CloseIcon>;

export const Default = {};
