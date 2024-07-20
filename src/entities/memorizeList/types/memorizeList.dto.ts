export interface MemorizationDto {
  id: number
  title : string
  mainText: string
  isMemorized: boolean
  createdAt: number
}

export interface UpdateIsMemorizedBodyDto {
  id: number
  isMemorized: boolean
}