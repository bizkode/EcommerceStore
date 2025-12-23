import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#10B981', // Emerald: confident, modern CTAs
            contrastText: '#0B0F14',
        },
        secondary: {
            main: '#6366F1', // Indigo accent: promos, highlights
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#F7F8FA', // Airy neutral background
            paper: '#FFFFFF',   // Product cards/surfaces
        },
        text: {
            primary: '#0B0F14', // Deep ink
            secondary: '#556070', // Subtle slate
        },
        divider: '#E6E8EB',
        success: { main: '#22C55E' },
        error: { main: '#EF4444' },
        warning: { main: '#F59E0B' },
        info: { main: '#3B82F6' },
        action: {
            hover: 'rgba(11, 15, 20, 0.06)',
            selected: 'rgba(11, 15, 20, 0.08)',
            disabledOpacity: 0.38,
        },
    },
    typography: {
        fontFamily: 'Inter, Roboto, Arial, sans-serif',
        h1: { fontWeight: 700, letterSpacing: '-0.02em' },
        h2: { fontWeight: 700, letterSpacing: '-0.02em' },
        h3: { fontWeight: 600 },
        button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { borderRadius: 10, paddingInline: 16 },
                containedPrimary: { boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.2)' },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: { borderRadius: 14, border: '1px solid #E6E8EB' },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: { borderRadius: 8 },
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4FC3F7',   // Softer blue for CTAs
        },
        secondary: {
            main: '#FFB74D',   // Warm amber accent for highlights
        },
        background: {
            default: '#121212', // Dark background
            paper: '#1E1E1E',   // Product cards
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B0B0B0',
        },
        success: {
            main: '#81C784',
        },
        error: {
            main: '#E57373',
        },
        warning: {
            main: '#FFB74D',
        },
        info: {
            main: '#64B5F6',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        button: { textTransform: 'none' },
    },
});