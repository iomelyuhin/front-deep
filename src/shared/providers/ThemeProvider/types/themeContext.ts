export enum Theme {
    NORMAL = 'normal',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';
