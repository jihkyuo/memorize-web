export interface RecordDto {
  id: number;
  memorizationId: number;
  title: string;
  transcript: string;
  createdAt: string; // 생성일
  diff?: object // todo: 아직 타입 미정
}

export interface CreateRecordBodyDto {
  memorizationId: number; // 본문 외래키
  title: string; // 제목
  transcript: string; // 녹음 내용
}
