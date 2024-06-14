import type { Meta, StoryObj } from '@storybook/react';
import AppBar from '../AppBar';

const meta: Meta = {
  title: 'AppBar',
  component: AppBar,
};

export default meta;

export type Story = StoryObj<typeof AppBar>;

export const Default = {};
