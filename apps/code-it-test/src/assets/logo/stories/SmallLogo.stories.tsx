import type { Meta, StoryObj } from '@storybook/react';
import SmallLogo from '../SmallLogo';

const meta: Meta = {
  title: 'SmallLogo',
  component: SmallLogo,
};

export default meta;

export type Story = StoryObj<typeof SmallLogo>;

export const Default = {};
