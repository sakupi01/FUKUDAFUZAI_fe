import React from 'react'

import { Attacker } from '@/components/atoms/Attacker'
import type { AttackerParam } from '@/components/atoms/Attacker/Attacker'

export type AttackersProps = {
  attackerParams: Array<AttackerParam>
}

export const Attackers = ({ ...props }: AttackersProps) => {
  // const [attackers, setUsers] = useState(props.attackerParams)
  const LASER_COLORS = ['#89d3f0', '#f7fdab', '#f693f1', '#abf0bf', '#c29cff']

  const MemoAttacker = React.memo(Attacker)
  return (
    <>
      {props.attackerParams.map((attacker, key) => (
        <MemoAttacker
          key={key}
          color={LASER_COLORS[attacker.id] || '#89d3f0'}
          position={attacker.position}
          scoreSender={attacker.scoreSender}
        />
      ))}
    </>
  )
}
