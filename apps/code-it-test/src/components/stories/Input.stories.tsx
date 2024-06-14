import type { Meta, StoryObj } from '@storybook/react';
import Input from '../common/Input';

const meta: Meta = {
  title: 'Input',
  component: Input,
};

export default meta;

export type Story = StoryObj<typeof Input>;

export const Default: Story = {};
