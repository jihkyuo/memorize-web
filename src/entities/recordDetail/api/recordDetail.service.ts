import type { RecordDto } from '@/entities/memorizationDetail/types/memorizationDetail.dto';
import { supabase } from '@/shared/api/baseApi';
import { DB_NAME } from '@/shared/api/db';

export const getRecordDetail = async (recordId: number) => {
  const { data, error, status } = await supabase
    .from(DB_NAME.RECORD)
    .select<'*', RecordDto>('*')
    .eq('id', recordId)
    .single();

  if (error) {
    throw { error, status };
  }

  return data;
};

export const recordDetailService = {
  getRecordDetail,
};
