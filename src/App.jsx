import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className='App'>
                <Header />
                <Dashboard />
            </div>
        </ThemeProvider>
    );
}

export default App;
