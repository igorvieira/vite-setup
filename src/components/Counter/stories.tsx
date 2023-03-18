import { Story, Meta } from "@storybook/react";

import { Counter } from ".";

export default {
  title: "Form/Counter",
  component: Counter,
} as Meta;

export const Default: Story = (args) => <Counter {...args} />;
