import type { MemorizationDto } from '@/entities/memorizeList/types/memorizeList.dto';
import { supabase } from '@/shared/api/baseApi';
import { DB_NAME } from '@/shared/api/db';
import { UpdateIsMemorizedBodyDto } from '../types/memorizeList.dto';

const getMemorizationList = async () => {
  return await supabase.from(DB_NAME.MEMORIZATION).select<'*', MemorizationDto>('*');
};

const updateIsMemorized = async ({ id, isMemorized }: UpdateIsMemorizedBodyDto) => {
  return await supabase.from(DB_NAME.MEMORIZATION).update({ isMemorized }).eq('id', id);
};

export const memorizeListService = {
  getMemorizationList,
  updateIsMemorized,
};
