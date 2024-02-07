import SEGMENT from 'constants/SEGMENT.ts'

export type Segment = (typeof SEGMENT)[keyof typeof SEGMENT]
