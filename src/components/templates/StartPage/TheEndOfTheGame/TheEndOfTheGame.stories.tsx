import { TheEndOfTheGame } from './TheEndOfTheGame'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'TheEndOfTheGame',
  component: TheEndOfTheGame,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    navigation: {
      pathname: '/',
    },
  },
  argTypes: {},
} satisfies Meta<typeof TheEndOfTheGame>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
