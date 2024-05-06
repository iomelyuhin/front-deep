import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';
import { StateSchema } from '@/shared/providers/StoreProvider/config/StateSchema';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 1 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(1);
    });
});
