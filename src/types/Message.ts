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

export const colors = [  "FF0000",  "00FF00",  "0000FF",  "FFFF00",  "FF00FF",  "00FFFF",  "FFFFFF",  "000000",  "800000",  "008000",  "000080",  "808000",  "800080",  "008080",  "C0C0C0",  "FFA500",  "A52A2A",  "8B4513",  "2E8B57",  "D2691E",  "CD5C5C",  "B0E0E6",  "32CD32",  "FA8072",  "E9967A",  "FFC0CB",  "DDA0DD",  "BDB76B",  "FFD700",  "20B2AA"]
export const LASER_COLORS = ['#89d3f0', '#f7fdab', '#f693f1', '#abf0bf', '#c29cff']
export type UserSettingRes = {
  id: number
  name: string
  colorCode: string
}

export type Shoot = {
  id: number
  charge: number
  sensorPerInfo: SensorPerInfo
}

export type ShootRes = {
  score: number | null
}
