import { Story, Meta } from '@storybook/react'

import { Counter } from '.'

export default {
  title: 'Counter',
  component: Counter
} as Meta

export const Defult: Story = (args) => <Counter {...args} />
