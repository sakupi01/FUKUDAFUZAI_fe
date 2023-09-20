'use client'
import { Peer, DataConnection } from 'peerjs'
import { useEffect, useState } from 'react'

import { PlayGroundForLaser } from '@/components/templates/PlayGroundForLaser'
import { WaitingComponent } from '@/components/templates/WaitingComponent'

import {
  sensorInfo,
  type Message,
  userSetting,
  type UserSetting,
  type UserSettingRes,
} from '@/types/Message'
import type { SensorPerInfo } from '@/types/SensorPerInfo'
import type { User } from '@/types/User'

import { sensorPerInfoToPointer } from '@/util/sensorPerInfoToPointer'

export default function Home() {
  const [isWaitingRoom, setIsWaitingRoom] = useState(true)

  const [thisId, setThisId] = useState<string | null>(null)
  const [sensorPerInfo, setSensorPerInfo] = useState<SensorPerInfo | null>(null)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const id = self.crypto.randomUUID()
      setThisId(id)
      const peer = new Peer(id)

      peer.on('connection', (conn) => {
        conn.on('data', (data) => {
          const recieved: Message = data as Message

          // Message.type handling
          if (recieved.type === sensorInfo) {
            setUsers((prev) => {
              let u: User | undefined
              prev.forEach((user, index) => {
                if (user.peerId === conn.peer) {
                  u = user
                  prev.splice(index, 1)
                }
              })

              const user: User | undefined = u
                ? {
                    id: u.id,
                    peerId: u.peerId,
                    name: u.name,
                    positionGetter: (width: number, height: number) =>
                      sensorPerInfoToPointer(
                        recieved.data as SensorPerInfo,
                        width,
                        height,
                      ),
                    iconColor: u.iconColor,
                  }
                : u
              const newUsers = user ? [...prev, user] : prev
              // sort by id
              newUsers.sort((a, b) => {
                if (a.id < b.id) return -1
                if (a.id > b.id) return 1
                return 0
              })
              return newUsers
            })
            setSensorPerInfo(recieved.data as SensorPerInfo)
          } else if (recieved.type === userSetting) {
            setUsers((prev) => {
              console.log(prev)

              const user: User = {
                id: prev.length + 1,
                peerId: conn.peer,
                name: (recieved.data as UserSetting).name,
                positionGetter: () => {
                  return { x: 0, y: 0 }
                },
                iconColor: ['red', 'blue', 'green', 'yellow', 'grey'][
                  prev.length
                ] as string,
              }
              const res: Message = {
                type: userSetting,
                data: {
                  id: user.id,
                  name: user.name,
                } as UserSettingRes,
              }
              send(res, conn)
              return [...prev, user]
            })
          } else if (recieved.type === 'shoot') {
            console.log('shoot')

            // TODO: shoot

            // const shoot: Shoot = recieved.data as Shoot
            // let hit: Target | null = null
            // setTargets((prev) => {
            //   console.log(prev)
            //   if (!prev) return null

            //   for (let i = 0; i < prev.length; i++) {
            //     hit = targetHit(prev[i], sensorPerInfoToPointer(shoot.sensorPerInfo))
            //     if (hit) {
            //       prev!.splice(i, 1)
            //       break
            //     }
            //   }
            //   console.log(sensorPerInfoToPointer(shoot.sensorPerInfo))

            //   const res: Message = {
            //     type: 'shootRes',
            //     data: {
            //       score: hit ? hit.score : null,
            //     } as ShootRes,
            //   }
            // send(res, conn)
            // return prev
            // })
          }
        })
        conn.on('open', () => {})
      })
    }
  }, [])

  const send = (msg: unknown, conn: DataConnection) => {
    // Json to ArrayBuffer
    const ab = new TextEncoder().encode(JSON.stringify(msg)).buffer
    conn.send(new Uint8Array(ab))
  }
  return (
    <>
      {isWaitingRoom && (
        <WaitingComponent
          setIsWaitingRoom={setIsWaitingRoom}
          setUsers={setUsers}
          users={users}
          id={thisId}
        />
      )}
      {!isWaitingRoom && <PlayGroundForLaser users={users} />}
    </>
  )
}
