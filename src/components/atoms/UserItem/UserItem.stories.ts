import { UserItem } from './UserItem'

import type { Meta, StoryObj } from '@storybook/react'

export type UserItemProps = {
  label?: string
  iconColor?: string
}

const meta = {
  title: 'UserItem',
  component: UserItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof UserItem>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'User1',
    iconColor: '#000',
  },
}
