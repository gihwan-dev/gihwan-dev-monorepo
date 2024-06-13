import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from '~/src/app/assets/icon/CheckBox';

const meta: Meta = {
  title: 'CheckBox',
  component: CheckBox,
};

export default meta;

export type Story = StoryObj<typeof CheckBox>;

export const Default = {};
