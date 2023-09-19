import type { SensorPerInfo } from './SensorPerInfo'

export const sensorInfo = 'sensorInfo'
export const sensorInit = 'sensorInit'
export const shoot = 'shoot'
export const shootRes = 'shootRes'
export const userSetting = 'userSetting'

export type Message = {
  type:
    | typeof sensorInfo
    | typeof sensorInit
    | typeof shoot
    | typeof shootRes
    | typeof userSetting
  data: SensorPerInfo | UserSetting | UserSettingRes | Shoot | ShootRes
}

export type UserSetting = {
  name: string
}

export type UserSettingRes = {
  id: number
  name: string
}

export type Shoot = {
  sensorPerInfo: SensorPerInfo
}

export type ShootRes = {
  score: number | null
}
