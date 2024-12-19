import { recordDetailService } from '@/entities/recordDetail/api/recordDetail.service';

export const getRecordDetail = async (recordId: number) => {
  return await recordDetailService.getRecordDetail(recordId);
};
