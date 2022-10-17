export interface Attributes {
    image:string,
    attribute:string
}

export type TimeType = 'Days' | 'Hours' | 'Minutes'| 'Seconds';

export interface TimeText {
    currentTime:string,
    timeType:TimeType
}