'use client'
// @ts-ignore
import { Peer, DataConnection } from 'peerjs'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import type { AttackerParam } from '@/components/atoms/Attacker/Attacker'
import { PlayGroundForLaser } from '@/components/templates/PlayGroundForLaser'
import { WaitingComponent } from '@/components/templates/WaitingComponent'

import type { Vector3ObjectBall } from '@/types/BallTypes'
import {
  sensorInfo,
  type Message,
  userSetting,
  type UserSetting,
  type UserSettingRes,
  colors,
  userSettingRes,
  type Shoot,
  type ShootRes,
} from '@/types/Message'
import type { SensorPerInfo } from '@/types/SensorPerInfo'
import type { User } from '@/types/User'

import { sensorPerInfoToPointer } from '@/utils/sensorPerInfoToPointer'

export default function Laser() {
  const [isWaitingRoom, setIsWaitingRoom] = useState(true)

  const [thisId, setThisId] = useState<string | null>(null)
  const [sensorPerInfo, setSensorPerInfo] = useState<SensorPerInfo | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null)
  const [targets, setTargets] = useState<Array<Vector3ObjectBall>>([])
  const [attackerParams, setAttackerParams] = useState<Array<AttackerParam>>([])

  const boxRef = useRef<THREE.Mesh>(null)

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
              const user: User = {
                id: prev.length + 1,
                peerId: conn.peer,
                name: (recieved.data as UserSetting).name,
                positionGetter: () => {
                  return { x: 0, y: 0 }
                },
                iconColor: colors[prev.length] as string,
              }
              const res: Message = {
                type: userSettingRes,
                data: {
                  id: user.id,
                  name: user.name,
                  colorCode: user.iconColor,
                } as UserSettingRes,
              }
              send(res, conn)
              return [...prev, user]
            })
          } else if (recieved.type === 'shoot') {
            console.log('shoot')
            setCamera((prev) => {
              if (!prev) return prev
              const shoot: Shoot = recieved.data as Shoot

              let { x, y } = sensorPerInfoToPointer(
                shoot.sensorPerInfo,
                window.innerWidth,
                window.innerHeight,
              )

              x = (x / window.innerWidth) * 2 - 1
              y = -(y / window.innerHeight) * 2 + 1
              const pos = new THREE.Vector3(x, -y, 1)
              // pos.unproject(prev)
              const raycaster = new THREE.Raycaster(
                prev.position,
                pos.sub(prev.position).normalize(),
              )
              const charge = shoot.charge
              console.log('charge')
              console.log(charge)
              console.log(pos)
              // if (boxRef.current) {
              //   boxRef.current.position.set(pos.x, pos.y, pos.z)
              // }
              // return prev

              // const v = new THREE.Vector2(x, y)

              // const raycaster = new THREE.Raycaster()
              // raycaster.setFromCamera(v, prev)

              // setTargets((prev) => {
              // const ob3d: THREE.Object3D[] = []
              // prev.forEach((ball) => {
              //   const object3D = new THREE.Object3D()
              //   object3D.position.copy(new THREE.Vector3(ball.x, ball.y, ball.z))
              //   ob3d.push(object3D)
              // })
              // console.log(ob3d)
              // const hits = raycaster.intersectObjects(targets, false)
              // console.log(`hits.length: ${hits.length}`)
              // if (hits.length > 0) {
              //   const pos = hits[0]!.object.position
              //   console.log(pos)
              setAttackerParams((prev) => {
                const attackerParam: AttackerParam = {
                  id: prev.length + 1,
                  // color: '#89d3f0',
                  color: `#${colors[shoot.id - 1]}`,
                  // color: LASER_COLORS[shoot.id - 1]!,
                  // position: new THREE.Vector3(pos.x, pos.y, pos.z + 15),
                  // position: new THREE.Vector3(v.x, v.y, 0),
                  charge: charge,
                  position: new THREE.Vector3(x * -8, y * 5, 0),


                  scoreSender: (score) => {
                    const res: Message = {
                      type: 'shootRes',
                      data: {
                        score: score,
                      } as ShootRes,
                    }
                    send(res, conn)
                  },
                }
                return [...prev, attackerParam]
              })
              // }
              return prev
              // })
              // return prev
            })

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
        conn.on('open', () => {
          console.log('open')
        })
      })
    }
  }, [])

  const send = (msg: unknown, conn: DataConnection) => {
    // Json to ArrayBuffer
    const ab = new TextEncoder().encode(JSON.stringify(msg)).buffer
    conn.send(new Uint8Array(ab))
  }

  const drawPointer = (
    ctx: CanvasRenderingContext2D,
    user: User,
    width: number,
    height: number,
  ) => {
    const { x, y } = user.positionGetter(width, height)
    ctx.beginPath()
    ctx.arc(x, y, 10, 0, Math.PI * 2, true)
    ctx.fillStyle = `#${user.iconColor}`
    ctx.fill()
    ctx.stroke()
    ctx.font = 'bold 14px Arial'
    ctx.fillStyle = 'gray'
    ctx.fillText(user.name, x - 10, y - 20)
  }
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const width = canvasRef.current!.width
    const height = canvasRef.current!.height
    ctx.clearRect(0, 0, width, height)
    ctx.fill()

    users.forEach((user) => {
      drawPointer(ctx, user, width, height)
    })
  }, [sensorPerInfo, users])

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
      {!isWaitingRoom && (
        <>
          <PlayGroundForLaser
            users={users}
            camera={camera}
            setCamera={setCamera}
            attackerParams={attackerParams}
            setTargets={setTargets}
          />
          <canvas
            width={innerWidth}
            height={innerHeight}
            ref={canvasRef}
            style={{
              display: 'flex',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 100,
              backgroundColor: 'transparent',
            }}
          />
        </>
      )}
    </>
  )
}
