import React from 'react'

import { css } from '../../../../styled-system/css'

export type UserItemProps = {
  label?: string
  iconColor?: string
}

export const UserItem: React.FC<UserItemProps> = ({
  label,
  iconColor,
  ...props
}: UserItemProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        padding: '5px 50px 5px 5px',
        alignItems: 'center',
        borderRadius: '50px',
        gap: '35px',
        border: '1px solid var(--Grey, #DEDEDE)',
        background: 'var(--Icon-Text-Secondary, #FFF)',
      })}
    >
      <div
        className={css({
          width: '35px',
          height: '35px',
          minWidth: '35px',
          minHeight: '35px',
          borderRadius: '50%',
        })}
        style={{ backgroundColor: `#${iconColor}` }}
      ></div>
      <p
        className={css({
          fontSize: '14px',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        })}
      >
        {label}
      </p>
    </div>
  )
}
