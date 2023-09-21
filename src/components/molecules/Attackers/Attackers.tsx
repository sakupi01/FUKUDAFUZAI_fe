import React from 'react'

import { Attacker } from '@/components/atoms/Attacker'
import type { AttackerParam } from '@/components/atoms/Attacker/Attacker'

import type { Vector3ObjectBall } from '@/types/BallTypes'

export type AttackersProps = {
  attackerParams: Array<AttackerParam>
  setBalls: React.Dispatch<React.SetStateAction<Array<Vector3ObjectBall>>>
}

export const Attackers = ({ ...props }: AttackersProps) => {
  // const [attackers, setUsers] = useState(props.attackerParams)

  const MemoAttacker = React.memo(Attacker)
  return (
    <>
      {props.attackerParams.map((attacker, key) => (
        <MemoAttacker
          key={key}
          color={attacker.color}
          // color={'#89d3f0'}
          charge={attacker.charge}
          position={attacker.position}
          scoreSender={attacker.scoreSender}
          setBalls={props.setBalls}
        />
      ))}
    </>
  )
}
