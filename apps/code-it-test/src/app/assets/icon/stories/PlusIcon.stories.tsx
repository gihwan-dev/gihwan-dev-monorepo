import type { Meta, StoryObj } from '@storybook/react';
import PlusIcon from '../PlusIcon';

const meta: Meta = {
  title: 'PlusIcon',
  component: PlusIcon,
  render: (args) => {
    return (
      <div className="h-full w-full bg-gray-300 p-8">
        {/* @ts-expect-error - TS doesn't like spreading the args */}
        <PlusIcon {...args} />
      </div>
    );
  },
};

export default meta;

export type Story = StoryObj<typeof PlusIcon>;

export const Default: StoryObj = {};
