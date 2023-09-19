'use client'
import { useState } from 'react'

import { PlayGroundForLaser } from '@/components/templates/PlayGroundForLaser'
import { WaitingComponent } from '@/components/templates/WaitingComponent'

import type { SensorPerInfo } from '@/types/SensorPerInfo'
import type { User } from '@/types/User'

export default function Home() {
  const [isWaitingRoom, setIsWaitingRoom] = useState(true)

  const [thisId, setThisId] = useState<string | null>(null)
  const [sensorPerInfo, setSensorPerInfo] = useState<SensorPerInfo | null>(null)
  const [users, setUsers] = useState<User[]>([])

  return (
    <>
      {isWaitingRoom && (
        <WaitingComponent
          setIsWaitingRoom={setIsWaitingRoom}
          setUsers={setUsers}
          users={users}
        />
      )}
      {!isWaitingRoom && <PlayGroundForLaser />}
    </>
  )
}
