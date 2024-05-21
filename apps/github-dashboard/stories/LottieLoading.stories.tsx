import type { Meta, StoryObj } from "@storybook/react";
import LottieLoading from "~/components/LottieLoading";

const meta: Meta = {
  title: "LottieLoading",
  component: LottieLoading,
};

export default meta;

export type Story = StoryObj<typeof LottieLoading>;

export const Default = {};
