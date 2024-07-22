import { memorizationListService } from '@/entities/memorizationList/api/memorizationList.service';
import { UpdateIsMemorizedBodyDto } from '../types/memorizationList.dto';

export const getMemorizationList = async () => {
  return await memorizationListService.getMemorizationList();
};

export const updateIsMemorized = async (body: UpdateIsMemorizedBodyDto) => {
  return await memorizationListService.updateIsMemorized(body);
};
