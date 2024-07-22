import { memorizationDetailService } from './memorizationDetail.service';

export const getMemorizationDetail = async (id: number) => {
  return await memorizationDetailService.getMemorizationDetail(id);
};
