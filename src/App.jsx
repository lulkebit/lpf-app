import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import Header from './components/Header';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className='App'>
                <Header />
            </div>
        </ThemeProvider>
    );
}

export default App;
