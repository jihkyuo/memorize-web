import type { MemorizationDto } from '@/entities/memorizeList/types/memorizeList.dto';
import { supabase } from '@/shared/api/baseApi';
import { DB_NAME } from '@/shared/api/db';

const getMemorizationList = async () => {
  return await supabase.from(DB_NAME.MEMORIZATION).select<'*', MemorizationDto>('*');
};

export const memorizeListService = {
  getMemorizationList,
};
