import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CourseList from './components/courses/CourseList';
import CourseDetail from './components/courses/CourseDetail';

// Platzhalter-Komponenten für die anderen Routen
const Exercises = () => <div>Übungen (In Entwicklung)</div>;
const Resources = () => <div>Ressourcen (In Entwicklung)</div>;
const Profile = () => <div>Profil (In Entwicklung)</div>;
const Notifications = () => <div>Benachrichtigungen (In Entwicklung)</div>;

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='App'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/courses' element={<CourseList />} />
                        <Route path='/course/:id' element={<CourseDetail />} />
                        <Route path='/exercises' element={<Exercises />} />
                        <Route path='/resources' element={<Resources />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route
                            path='/notifications'
                            element={<Notifications />}
                        />
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
