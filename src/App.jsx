import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Profile from './components/profile/Profile';
import CourseList from './components/courses/CourseList';
import CourseDetail from './components/courses/CourseDetail';
import ModuleContent from './components/courses/ModuleContent';
import MentorDashboard from './components/mentor/MentorDashboard';
import ResourceList from './components/resources/ResourceList';
import ExerciseList from './components/exercises/ExerciseList';
import ExerciseDetail from './components/exercises/ExerciseDetail';

// Platzhalter-Komponenten für die anderen Routen
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
                        <Route path='/course/:courseId/module/:moduleId' element={<ModuleContent />} />
                        <Route path='/exercises' element={<ExerciseList />} />
                        <Route path='/resources' element={<ResourceList />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route
                            path='/notifications'
                            element={<Notifications />}
                        />
                        <Route path='/mentor' element={<MentorDashboard />} />
                        <Route
                            path='/exercise/:id'
                            element={<ExerciseDetail />}
                        />
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
