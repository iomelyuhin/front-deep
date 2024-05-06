import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import { StateSchema } from '@/shared/providers/StoreProvider/config/StateSchema';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 1 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 1 });
    });
});
