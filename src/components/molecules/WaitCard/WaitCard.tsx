import Image from 'next/image'
import React, { type Key } from 'react'
import { useState } from 'react'

import { Button } from '@/components/atoms/Button'
import { UserItem } from '@/components/atoms/UserItem/UserItem'

import { css } from '../../../../styled-system/css'

export type WaitCardProps = {}

export type User = {
  key?: Key | null | undefined
  user: string
  iconColor: string
}

export const mockUser: User[] = [
  {
    user: 'user1',
    iconColor: 'red',
  },
  {
    user: 'user2',
    iconColor: 'blue',
  },
  {
    user: 'user3',
    iconColor: 'green',
  },
  {
    user: 'user4',
    iconColor: 'yellow',
  },
  {
    user: 'user5',
    iconColor: 'grey',
  },
]

export const WaitCard = ({ ...props }: WaitCardProps) => {
  // 待機人数をstateで管理
  const [people, setPeople] = useState('0')
  return (
    <div
      className={css({
        width: '100%',
        height: '100%',
        padding: '20px',
        color: 'black',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <p className={css({ fontSize: '20px', fontWeight: 'bold' })}>Waiting Room</p>
      <p className={css({ fontSize: '20px', marginTop: '14px' })}>{people} / 5</p>
      <div
        className={css({
          marginTop: '14px',
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <div
          className={css({
            width: '50%',
            padding: '10px 20px',
            marginTop: '20px',
          })}
        >
          <Image
            src='https://picsum.photos/seed/picsum/200/200'
            alt=''
            width={200}
            height={200}
          />
          <p
            className={css({
              fontSize: '14px',
              marginTop: '20px',
              textAlign: 'center',
            })}
          >
            このQRコードを<br></br>
            スマホで読み取ってください
          </p>
        </div>
        <div
          className={css({
            width: '50%',
            padding: '10px 20px',
            '& > *': {
              marginTop: '10px',
            },
          })}
        >
          {mockUser.map((user) => (
            <UserItem key={user.key} label={user.user} iconColor={user.iconColor} />
          ))}
        </div>
      </div>
      <div className={css({ marginTop: '20px' })}>
        <Button label='Start' primary={true} />
      </div>
    </div>
  )
}
