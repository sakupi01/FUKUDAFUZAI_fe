import { css } from 'styled-system/css'

export type TestProps = {}

export const Test = ({ ...props }: TestProps) => {
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
