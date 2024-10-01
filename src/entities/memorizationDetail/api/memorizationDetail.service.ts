import type { CreateRecordBodyDto, RecordDto } from '@/entities/memorizationDetail/types/memorizationDetail.dto';
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

const getRecordList = async (memorizationId: number) => {
  const { data, error, status } = await supabase
    .from(DB_NAME.RECORD)
    .select<'*', RecordDto>('*')
    .eq('memorizationId', memorizationId);

  if (error) {
    throw { error, status };
  }

  return data;
};

const createRecord = async ({ memorizationId, title, transcript }: CreateRecordBodyDto) => {
  const { data, error, status } = await supabase
    .from(DB_NAME.RECORD)
    .insert({
      memorizationId,
      title,
      transcript,
    })
    .select()
    .single();

  if (error) {
    throw { error, status };
  }

  return data;
};

export const memorizationDetailService = {
  getMemorizationDetail,
  getRecordList,
  createRecord,
};
