import type { Meta, StoryObj } from '@storybook/react';
import PlusIcon from '~/src/app/assets/icon/PlusIcon';
import Button from '~/src/components/common/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: 'button',
    // eslint-disable-next-line @typescript-eslint/no-empty-function -- just for story
    onClick: () => {},
    icon: <PlusIcon color="white" size="small" />,
    text: '추가 하기',
  },
};

export const OnlyICon: Story = {
  args: {
    type: 'button',
    // eslint-disable-next-line @typescript-eslint/no-empty-function -- just for story
    onClick: () => {},
    icon: <PlusIcon color="white" size="small" />,
  },
};
