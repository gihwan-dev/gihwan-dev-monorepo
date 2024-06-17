import type { Meta, StoryObj } from '@storybook/react';
import BackgroundGrayWrapper from '~/src/assets/icon/stories/wrapper/BackgroundGrayWrapper';
import PlusIcon from '../PlusIcon';

const meta: Meta = {
  title: 'PlusIcon',
  component: PlusIcon,
  render: (args) => {
    return (
      <BackgroundGrayWrapper>
        {/* @ts-expect-error -- ignore type system for storybook */}
        <PlusIcon {...args} />
      </BackgroundGrayWrapper>
    );
  },
};

export default meta;

export type Story = StoryObj<typeof PlusIcon>;

export const Default: StoryObj = {};
