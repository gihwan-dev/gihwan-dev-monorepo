import type { Meta, StoryObj } from '@storybook/react';
import CheckList from './index';

const meta: Meta = {
  title: 'CheckList',
  component: CheckList,
};

export default meta;

export type Story = StoryObj<typeof CheckList>;

export const Default = {};
