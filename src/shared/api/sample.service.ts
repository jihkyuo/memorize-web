import { supabase } from '@/shared/api/baseApi';

export const getSamples = async () => {
  return await supabase.from('sample').select('*');
};
