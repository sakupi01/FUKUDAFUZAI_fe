import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

import { Toggle } from './Toggle';

export type ToggleProps = {};

const meta = {
  title: "Toggle",
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} satisfies Meta<typeof Toggle>;


export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};