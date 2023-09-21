import { StartPage } from './StartPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'StartPage',
  component: StartPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    navigation: {
      pathname: '/laser',
    },
  },
  argTypes: {},
} satisfies Meta<typeof StartPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
