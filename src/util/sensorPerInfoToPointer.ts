import type { SensorPerInfo } from '@/types/SensorPerInfo'
import type { XY } from '@/types/User'

export const sensorPerInfoToPointer = (sensorPerInfo: SensorPerInfo): XY => {
  return {
    x: 600 - (600 * sensorPerInfo.gyro.z + 600 / 2),
    y: 600 - (600 * sensorPerInfo.gyro.x + 600 / 2),
  }
}
