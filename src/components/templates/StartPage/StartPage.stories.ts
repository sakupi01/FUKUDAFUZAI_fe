import { StartPage } from './StartPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'StartPage',
  component: StartPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof StartPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
