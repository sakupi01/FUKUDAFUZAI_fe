'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import useInterval from '@/utils/hooks/useInterval'
import { css } from 'styled-system/css'

export const Timer = () => {
  const [time, setTime] = useState(60)
  const router = useRouter()
  const onUpdate = () => {
    setTime((prev) => prev - 1)
  }
  useInterval(onUpdate, 1 * 1000)
  if (time == 0) {
    router.push(`/finish`)
  }
  return (
    <>
      <div
        className={css({
          backgroundColor: 'base',
          color: 'black',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          display: 'inline-block',
        })}
      >
        <p>Time Left:</p>
        <p
          className={css({
            textAlign: 'center',
          })}
          style={time <= 10 ? { color: 'red' } : {}}
        >
          {time}
        </p>
      </div>
    </>
  )
}
