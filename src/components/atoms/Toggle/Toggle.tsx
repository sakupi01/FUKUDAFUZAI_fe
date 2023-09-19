'use client'
import { useState } from 'react'

import { css } from '../../../../styled-system/css'

// トグルボタンを実装
export type ToggleProps = {
  primary?: boolean
}

export const Toggle = ({ primary = false, ...props }: ToggleProps) => {
  const mode = primary ? 'primary' : 'secondary'
  const [toggleMode, setToggleMode] = useState(false)
  const toggle = () => {
    setToggleMode(!toggleMode)
  }

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <button
        id='toggle'
        onClick={toggle}
        className={css({
          width: '46px',
          height: '25.5px',
          position: 'relative',
          border: '1px solid #939393',
          borderRadius: '12px',
          backgroundColor: toggleMode ? 'primary' : '#BCBDBD',
          boxShadow: toggleMode
            ? '0 0 2px 2px rgba(255, 234, 0, 0.8)'
            : '' /* ネオン効果のための影 */,
          animation: toggleMode ? 'neonGlow 1.5s infinite alternate' : '',
          cursor: 'pointer',
          _after: {
            content: '""',
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '100%',
            left: '2px',
            top: '2px',
            background: '#FFFFFF',
            border: '1px solid #939393',
            transition: '0.3s',
            transform: `translateX(${toggleMode ? '100%' : '0%'})`,
          },
        })}
      ></button>
      <label
        htmlFor='toggle'
        className={css({
          color: '#1E2121',
          marginLeft: '12px',
          cursor: 'pointer',
        })}
      >
        ダークモード
      </label>
    </div>
  )
}
