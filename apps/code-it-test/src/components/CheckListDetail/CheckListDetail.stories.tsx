import type { Meta, StoryObj } from '@storybook/react';
import CheckListDetail from '~/src/components/CheckListDetail/index';

const meta: Meta = {
  title: 'CheckListDetail',
  component: CheckListDetail,
};

export default meta;

export type Story = StoryObj<typeof CheckListDetail>;

export const Default = {};
