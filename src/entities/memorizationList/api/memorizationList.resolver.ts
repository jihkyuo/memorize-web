import { memorizationListService } from '@/entities/memorizationList/api/memorizationList.service';
import type {
  AddMemorizationBodyDto,
  UpdateIsMemorizedBodyDto,
} from '@/entities/memorizationList/types/memorizationList.dto';

export const getMemorizationList = async () => {
  return await memorizationListService.getMemorizationList();
};

export const updateIsMemorized = async (body: UpdateIsMemorizedBodyDto) => {
  return await memorizationListService.updateIsMemorized(body);
};

export const addMemorization = async (body: AddMemorizationBodyDto) => {
  return await memorizationListService.addMemorization(body);
};
