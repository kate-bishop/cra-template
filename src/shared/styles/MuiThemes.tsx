import { PaletteMode } from '@mui/material';
import { palette } from '../utils/constants';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: { main: palette.primary },
                text: {
                    primary: palette.primary,
                    secondary: palette.primary,
                },
            }
            : {
                primary: { main: '#fff' },
                background: {
                    default: palette.primary,
                    paper: palette.primary,
                },
                text: {
                    primary: '#fff',
                    secondary: palette.secondary,
                },
            }),
    },
    typography: {
        fontFamily: [
            'Open Sans',
        ].join(','),
        h1: {
            fontSize: '9rem',
            fontWeight: 800,
            '@media (max-width:480px)': {
                fontSize: '3rem'
            },
        },
    },
});
