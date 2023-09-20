import type { SensorPerInfo } from './SensorPerInfo'

export const sensorInfo = 'sensorInfo'
export const sensorInit = 'sensorInit'
export const shoot = 'shoot'
export const shootRes = 'shootRes'
export const userSetting = 'userSetting'
export const userSettingRes = 'userSettingRes'

export type Message = {
  type:
    | typeof sensorInfo
    | typeof sensorInit
    | typeof shoot
    | typeof shootRes
    | typeof userSetting
    | typeof userSettingRes
  data: SensorPerInfo | UserSetting | UserSettingRes | Shoot | ShootRes
}

export type UserSetting = {
  name: string
}

export const colors = ['FF0000', '0000FF', '008000', 'FFFF00', '808080']
export type UserSettingRes = {
  id: number
  name: string
  colorCode: string
}

export type Shoot = {
  sensorPerInfo: SensorPerInfo
}

export type ShootRes = {
  score: number | null
}
