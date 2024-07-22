import type { MemorizationDto } from '@/entities/memorizationList/types/memorizationList.dto';
import { supabase } from '@/shared/api/baseApi';
import { DB_NAME } from '@/shared/api/db';

const getMemorizationDetail = async (id: number) => {
  const { data, error, status } = await supabase
    .from(DB_NAME.MEMORIZATION)
    .select<'*', MemorizationDto>('*')
    .eq('id', id)
    .single();

  if (error) {
    throw { error, status };
  }

  return data;
};

export const memorizationDetailService = {
  getMemorizationDetail,
};
