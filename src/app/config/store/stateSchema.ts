//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { UserStateSchema } from '@/entities/users/types/userTypes';

export interface StateSchema {
  [jsonPlaceholderAPI.reducerPath]: ReturnType<
    typeof jsonPlaceholderAPI.reducer
  >;
  user: UserStateSchema;
}
