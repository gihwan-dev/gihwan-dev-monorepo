import type { Meta, StoryObj } from '@storybook/react';
import EditIcon from '~/src/app/assets/icon/EditIcon';
import PlusIcon from '~/src/app/assets/icon/PlusIcon';
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
    // eslint-disable-next-line @typescript-eslint/no-empty-function -- just for story
    onClick: () => {},
    icon: <EditIcon />,
  },
};

export const Add: Story = {
  args: {
    variants: 'add',
    // eslint-disable-next-line @typescript-eslint/no-empty-function -- just for story
    onClick: () => {},
    icon: <PlusIcon color="slate/500" size="large" />,
  },
};
