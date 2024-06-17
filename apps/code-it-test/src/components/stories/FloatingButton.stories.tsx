import type { Meta, StoryObj } from '@storybook/react';
import EditIcon from '~/src/assets/icon/EditIcon';
import PlusIcon from '~/src/assets/icon/PlusIcon';
import FloatingButton from '../common/FoatingButton';

const meta: Meta = {
  title: 'FloatingButton',
  component: FloatingButton,
};

export default meta;

export type Story = StoryObj<typeof FloatingButton>;

export const Edit: Story = {
  args: {
    variants: 'edit',
    icon: <EditIcon />,
  },
};

export const Add: Story = {
  args: {
    variants: 'add',
    icon: <PlusIcon size="large" />,
  },
};
