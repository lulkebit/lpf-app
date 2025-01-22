import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF0000', // Sparkassen-Rot
            light: '#ff3333',
            dark: '#cc0000',
        },
        secondary: {
            main: '#333333', // Dunkelgrau für sekundäre Elemente
            light: '#666666',
            dark: '#1a1a1a',
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5',
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
        },
        error: {
            main: '#d32f2f',
        },
        warning: {
            main: '#ffa726',
        },
        success: {
            main: '#2e7d32',
        },
    },
    typography: {
        fontFamily: '"Source Sans Pro", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
            color: '#333333',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            color: '#333333',
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#333333',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    textTransform: 'none',
                    fontWeight: 600,
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
                },
            },
        },
    },
});
