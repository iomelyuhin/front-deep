import { StateSchema } from '@/shared/providers/StoreProvider/config/StateSchema';

export const getCounter = (state: StateSchema) => state.counter;
