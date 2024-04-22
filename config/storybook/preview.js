import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/app/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/app/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/app/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.NORMAL));
addDecorator(RouterDecorator);
