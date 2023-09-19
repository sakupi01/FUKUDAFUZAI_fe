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
        padding: '8px 50px 8px 8px',
        alignItems: 'center',
        borderRadius: '50px',
        gap: '35px',
        border: '1px solid var(--Grey, #DEDEDE)',
        background: 'var(--Icon-Text-Secondary, #FFF)',
      })}
    >
      <div
        className={css({
          width: '40px',
          height: '40px',
          minWidth: '40px',
          minHeight: '40px',
          borderRadius: '50%',
        })}
        style={{ backgroundColor: iconColor }}
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
