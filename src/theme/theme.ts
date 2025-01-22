import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF0000', // Sparkassen-Rot
            light: '#ff3333',
            dark: '#cc0000',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#333333', // Dunkelgrau
            light: '#666666',
            dark: '#1a1a1a',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f7f7f7',
            paper: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
        },
        error: {
            main: '#d32f2f',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#ffa726',
            contrastText: '#ffffff',
        },
        success: {
            main: '#2e7d32',
            contrastText: '#ffffff',
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#333333',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
            color: '#333333',
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            color: '#333333',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: 8,
                },
                bar: {
                    borderRadius: 8,
                    backgroundColor: '#ffffff',
                },
            },
        },
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
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
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
        MuiPaper: {
            styleOverrides: {
                root: {
                    '&[class*="primary"]': {
                        backgroundColor: '#FF0000',
                        color: '#ffffff',
                        '& .MuiLinearProgress-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#ffffff',
                        },
                    },
                },
            },
        },
    },
});
