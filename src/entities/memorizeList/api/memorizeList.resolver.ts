import { UpdateIsMemorizedBodyDto } from '../types/memorizeList.dto';
import { memorizeListService } from './memorizeList.service';

export const getMemorizationList = async () => {
  return (await memorizeListService.getMemorizationList()).data;
};

export const updateIsMemorized = async (body: UpdateIsMemorizedBodyDto) => {
  return await memorizeListService.updateIsMemorized(body);
};
