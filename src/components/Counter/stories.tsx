import { Story, Meta } from "@storybook/react";

import { Counter } from ".";

export default {
  title: "Form/Counter",
  args: {
    options: [
      { value: "option-1", label: "Option 1" },
      { value: "option-2", label: "Option 2" },
      { value: "option-3", label: "Option 3" },
    ],
  },
  component: Counter,
} as Meta;

export const Default: Story = (args) => <Counter {...args} />;
