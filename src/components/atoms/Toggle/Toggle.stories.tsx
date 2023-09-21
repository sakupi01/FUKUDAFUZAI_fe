import { Toggle } from './Toggle'

import type { StoryObj } from '@storybook/react'

export type ToggleProps = {
  primary?: boolean
}

const meta = {
  title: 'Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  decorators: [
    (Story: StoryObj) => (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}
      >
        <Toggle />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    primary: true,
  },
}
