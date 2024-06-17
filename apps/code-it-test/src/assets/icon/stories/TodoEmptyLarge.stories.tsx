import type { Meta, StoryObj } from '@storybook/react';
import TodoEmptyLarge from '../TodoEmptyLarge';

const meta: Meta = {
  title: 'TodoEmptyLarge',
  component: TodoEmptyLarge,
};

export default meta;

export type Story = StoryObj<typeof TodoEmptyLarge>;

export const Default: StoryObj = {};
