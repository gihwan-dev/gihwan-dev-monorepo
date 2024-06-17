import type { Meta, StoryObj } from '@storybook/react';
import TodoEmptySmall from '../TodoEmptySmall';

const meta: Meta = {
  title: 'TodoEmptySmall',
  component: TodoEmptySmall,
};

export default meta;

export type Story = StoryObj<typeof TodoEmptySmall>;

export const Default: StoryObj = {};
