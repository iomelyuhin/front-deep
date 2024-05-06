import { FC, useMemo, useState } from 'react';
import { ThemeContext } from '../lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '../types/themeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL;

interface ThemeProviderProps {
    initialTheme?: Theme;
}
export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme,
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme, setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
