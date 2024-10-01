import type { CreateRecordBodyDto } from '@/entities/memorizationDetail/types/memorizationDetail.dto';
import { memorizationDetailService } from './memorizationDetail.service';

export const getMemorizationDetail = async (id: number) => {
  return await memorizationDetailService.getMemorizationDetail(id);
};

export const getRecordList = async (memorizationId: number) => {
  return await memorizationDetailService.getRecordList(memorizationId);
};

export const createRecord = async (body: CreateRecordBodyDto) => {
  return await memorizationDetailService.createRecord(body);
};
