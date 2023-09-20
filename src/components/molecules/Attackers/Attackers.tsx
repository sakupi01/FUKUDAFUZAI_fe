import React, { useState } from 'react'

import { Attacker } from '@/components/atoms/Attacker'

import type { User } from '@/types/User'

export type AttackersProps = {
  users: Array<User>
}

export const Attackers = ({ ...props }: AttackersProps) => {
  const [users, setUsers] = useState(props.users)
  const LASER_COLORS = ['#89d3f0', '#f7fdab', '#f693f1', '#abf0bf', '#c29cff']

  const MemoAttacker = React.memo(Attacker)
  return (
    <>
      {users.map((user, key) => (
        <MemoAttacker
          key={user.id}
          color={LASER_COLORS[user.id] || '#89d3f0'}
          position={user.positionGetter(innerWidth, innerHeight)}
          setUsers={setUsers}
        />
      ))}
    </>
  )
}
