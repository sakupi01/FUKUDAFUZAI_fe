import type { SensorPerInfo } from '@/types/SensorPerInfo'
import type { XY } from '@/types/User'

export const sensorPerInfoToPointer = (
  sensorPerInfo: SensorPerInfo,
  width: number,
  height: number,
): XY => {
  return {
    x: width - (width * sensorPerInfo.gyro.z + width / 2),
    y: height - (height * sensorPerInfo.gyro.x + height / 2),
  }
}
