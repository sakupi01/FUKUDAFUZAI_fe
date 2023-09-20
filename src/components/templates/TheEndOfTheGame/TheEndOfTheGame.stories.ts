import { within } from '@storybook/testing-library'

import { TheEndOfTheGame } from './TheEndOfTheGame'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: "TheEndOfTheGame",
  component: TheEndOfTheGame,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} satisfies Meta<typeof TheEndOfTheGame>;


export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};