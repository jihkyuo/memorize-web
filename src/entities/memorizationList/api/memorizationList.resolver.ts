import { UpdateIsMemorizedBodyDto } from '../types/memorizationList.dto';
import { memorizationListService } from './memorizationList.service';

export const getMemorizationList = async () => {
  return await memorizationListService.getMemorizationList();
};

export const getMemorizationDetail = async (id: number) => {
  return await memorizationListService.getMemorizationDetail(id);
};

export const updateIsMemorized = async (body: UpdateIsMemorizedBodyDto) => {
  return await memorizationListService.updateIsMemorized(body);
};
