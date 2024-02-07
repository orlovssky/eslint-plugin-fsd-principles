import LAYER from 'constants/LAYER.ts'

export type Layer = (typeof LAYER)[keyof typeof LAYER]
