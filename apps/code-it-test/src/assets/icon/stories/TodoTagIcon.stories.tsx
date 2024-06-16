import type { Meta, StoryObj } from '@storybook/react';
import TodoTagIcon from '~/src/assets/icon/TodoTagIcon';

const meta: Meta = {
  title: 'TodoTagIcon',
  component: TodoTagIcon,
};

export default meta;

export type Story = StoryObj<typeof TodoTagIcon>;

export const Default: StoryObj = {};
