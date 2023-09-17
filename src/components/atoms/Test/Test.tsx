import { css } from 'styled-system/css'

import { useHooks } from './hooks'
export type TestProps = {}

export const Test = ({ ...props }: TestProps) => {
  const hook = useHooks(props)

  return (
    <>
      <p
        className={css({
          color: 'blue',
        })}
      >
        this is react template
      </p>
    </>
  )
}
