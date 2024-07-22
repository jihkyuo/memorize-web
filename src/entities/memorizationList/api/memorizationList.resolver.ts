import { UpdateIsMemorizedBodyDto } from '../types/memorizeList.dto';
import { memorizeListService } from './memorizationList.service';

export const getMemorizationList = async () => {
  return await memorizeListService.getMemorizationList();
};

export const getMemorizationDetail = async (id: number) => {
  return await memorizeListService.getMemorizationDetail(id);
};

export const updateIsMemorized = async (body: UpdateIsMemorizedBodyDto) => {
  return await memorizeListService.updateIsMemorized(body);
};
