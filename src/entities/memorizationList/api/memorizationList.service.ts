import type { MemorizationDto } from '@/entities/memorizationList/types/memorizationList.dto';
import { supabase } from '@/shared/api/baseApi';
import { DB_NAME } from '@/shared/api/db';
import { UpdateIsMemorizedBodyDto } from '../types/memorizationList.dto';

const getMemorizationList = async () => {
  const { data, error, status } = await supabase.from(DB_NAME.MEMORIZATION).select<'*', MemorizationDto>('*');
  if (error) {
    throw { error, status };
  }
  return data;
};

const updateIsMemorized = async ({ id, isMemorized }: UpdateIsMemorizedBodyDto) => {
  return await supabase.from(DB_NAME.MEMORIZATION).update({ isMemorized }).eq('id', id);
};

export const memorizationListService = {
  getMemorizationList,
  updateIsMemorized,
};
