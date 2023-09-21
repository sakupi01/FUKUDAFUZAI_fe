export type XY = {
  x: number
  y: number
}

export type User = {
  id: number
  name: string
  peerId: string
  positionGetter: (width: number, height: number) => XY
  iconColor: string
}
