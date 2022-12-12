import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';
import {
    MD3DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme
} from 'react-native-paper';

const customColors = {
    light: {
        primary: '#ffbd11',
        primaryLight: '#fff4e6',
        accent: '#ffe511',
        text: '#231f20',
        background: '#f8e4cc',
        darkerGray: '#231f20',
        darkGray: '#888888',
        mediumGrayAlt: '#aaa',
        mediumGray: '#cccccc',
        lightGray: '#f9f9f9',
        lightGrayAlt: '#e2e2e2',
        success: '#00a000',
        danger: '#f04c34',
        dangerLight: '#ffe0e0'
    },
    dark: {}
};


/**
 * Default app theme based on the RN paper and navigator
 */

export const AppDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    roundness: 7,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        ...customColors.light
    }
}

/**
 * Default app dark theme based on RN paper and navigator
 */
export const AppDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    roundness: 7,
    colors: {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors,
        ...customColors.dark
    }
};
