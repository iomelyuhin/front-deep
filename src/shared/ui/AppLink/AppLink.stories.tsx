import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';
import { AppLink, AppLinkThemes } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    children: 'Text',
    theme: AppLinkThemes.PRIMARY,
};
export const Inverted = Template.bind({});

Inverted.args = {
    children: 'Text',
    theme: AppLinkThemes.INVERTED,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Text',
    theme: AppLinkThemes.PRIMARY,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
