import { memorizeListService } from './memorizeList.service';

export const getMemorizationList = async () => {
  return (await memorizeListService.getMemorizationList()).data;
};
