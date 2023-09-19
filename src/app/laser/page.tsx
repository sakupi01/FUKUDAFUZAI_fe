'use client'
import { useState } from 'react'

import { PlayGroundForLaser } from '@/components/templates/PlayGroundForLaser'
import { WaitingComponent } from '@/components/templates/WaitingComponent'

export default function Home() {
  const [isWaitingRoom, setIsWaitingRoom] = useState(true)
  return (
    <>
      {isWaitingRoom && <WaitingComponent setIsWaitingRoom={setIsWaitingRoom} />}
      {!isWaitingRoom && <PlayGroundForLaser />}
    </>
  )
}
