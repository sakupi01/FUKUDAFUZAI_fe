import { Button } from './Button'

import type { Meta, StoryObj } from '@storybook/react'

export type ButtonProps = {
  primary?: boolean
  neon?: boolean
  size?: 'small' | 'medium' | 'large'
  label?: string
}

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [
    (Story: React.FC<ButtonProps>) => (
      <div>
        <Story />
        <style>
          {`
            #storybook-root {
              background-color: #000 !important;
              width: 100%;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </div>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'secondary',
  },
}

export const enableNeon: Story = {
  args: {
    primary: true,
    neon: true,
    label: 'enable',
  },
}

export const disableNeon: Story = {
  args: {
    primary: true,
    neon: false,
    label: 'disable',
  },
}
