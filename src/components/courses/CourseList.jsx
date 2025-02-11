import {
    Grid,
    Typography,
    Container,
    TextField,
    Box,
    InputAdornment,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from '@mui/material';
import {
    Search as SearchIcon,
    FilterList as FilterIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import CourseCard from './CourseCard';

function CourseList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [selectedDuration, setSelectedDuration] = useState('all');

    const courses = [
        {
            id: 1,
            title: 'Python Grundlagen',
            description: 'Lerne die Grundlagen der Python-Programmierung',
            level: 'Anfänger',
            duration: '4 Wochen',
            tags: ['Python', 'Programmierung', 'Basics'],
            requirements: [], 
            modules: [
                { id: 1, title: 'Einführung in Python', completed: false },
                { id: 2, title: 'Variablen und Datentypen', completed: false },
                { id: 3, title: 'Kontrollstrukturen', completed: false },
                { id: 4, title: 'Funktionen', completed: false },
            ],
        },
        {
            id: 2,
            title: 'Java Basics',
            description: 'Starte mit der Java-Programmierung',
            level: 'Anfänger',
            duration: '6 Wochen',
            tags: ['Java', 'OOP', 'Backend'],
            requirements: [],
            modules: [
                { id: 1, title: 'Java Einführung', completed: false },
                { id: 2, title: 'OOP Grundlagen', completed: false },
                { id: 3, title: 'Arrays und Collections', completed: false },
                { id: 4, title: 'Exceptions', completed: false },
            ],
        },
        {
            id: 3,
            title: 'Web Development Grundlagen',
            description: 'HTML, CSS und JavaScript Grundlagen',
            level: 'Anfänger',
            duration: '5 Wochen',
            tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
            requirements: [],
            modules: [
                { id: 1, title: 'HTML Basics', completed: false },
                { id: 2, title: 'CSS Styling', completed: false },
                { id: 3, title: 'JavaScript Grundlagen', completed: false },
                { id: 4, title: 'DOM Manipulation', completed: false },
            ],
        },
        {
            id: 4,
            title: 'Swift Grundlagen',
            description: 'Erste Schritte in der iOS-Entwicklung mit Swift',
            level: 'Anfänger',
            duration: '4 Wochen',
            tags: ['iOS', 'Swift', 'Mobile'],
            requirements: [],
            modules: [
                { id: 1, title: 'Swift Syntax', completed: false },
                { id: 2, title: 'Datentypen & Variablen', completed: false },
                { id: 3, title: 'Kontrollstrukturen', completed: false },
                { id: 4, title: 'Funktionen & Closures', completed: false },
            ],
        },
        {
            id: 5,
            title: 'UI Development mit SwiftUI',
            description: 'Moderne UI-Entwicklung für iOS-Apps',
            level: 'Mittel',
            duration: '5 Wochen',
            tags: ['iOS', 'SwiftUI', 'UI/UX'],
            requirements: [4],  // Benötigt Swift Grundlagen
            modules: [
                { id: 1, title: 'SwiftUI Basics', completed: false },
                { id: 2, title: 'Layout & Stacks', completed: false },
                { id: 3, title: 'State Management', completed: false },
                { id: 4, title: 'Navigation', completed: false },
                { id: 5, title: 'Animationen', completed: false },
            ],
        },
        {
            id: 6,
            title: 'iOS App Architektur',
            description: 'Fortgeschrittene Konzepte der iOS-Entwicklung',
            level: 'Fortgeschritten',
            duration: '6 Wochen',
            tags: ['iOS', 'Swift', 'Architektur'],
            requirements: [4, 5],  // Benötigt Grundlagen und UI Development
            modules: [
                { id: 1, title: 'Design Patterns', completed: false },
                { id: 2, title: 'MVVM Architektur', completed: false },
                { id: 3, title: 'Dependency Injection', completed: false },
                { id: 4, title: 'Unit Testing', completed: false },
                { id: 5, title: 'Performance Optimierung', completed: false },
            ],
        },
        {
            id: 7,
            title: 'iOS Backend Integration',
            description: 'Anbindung von APIs und Datenbanken in iOS-Apps',
            level: 'Fortgeschritten',
            duration: '5 Wochen',
            tags: ['iOS', 'APIs', 'Datenbank'],
            requirements: [4, 5],  // Benötigt Grundlagen und UI Development
            modules: [
                { id: 1, title: 'RESTful APIs', completed: false },
                { id: 2, title: 'CoreData', completed: false },
                { id: 3, title: 'Networking', completed: false },
                { id: 4, title: 'Authentication', completed: false },
                { id: 5, title: 'CloudKit & iCloud', completed: false },
            ],
        },
        {
            id: 8,
            title: 'Fortgeschrittene Web-Entwicklung',
            description: 'Moderne Frontend-Entwicklung mit React',
            level: 'Fortgeschritten',
            duration: '6 Wochen',
            tags: ['React', 'Frontend', 'JavaScript'],
            requirements: [3],
            modules: [
                { id: 1, title: 'React Grundlagen', completed: false },
                { id: 2, title: 'Components & Props', completed: false },
                { id: 3, title: 'State Management', completed: false },
                { id: 4, title: 'Hooks', completed: false },
            ],
        },
        {
            id: 9,
            title: 'Full-Stack Web Development',
            description: 'Entwicklung kompletter Webanwendungen',
            level: 'Fortgeschritten',
            duration: '8 Wochen',
            tags: ['Backend', 'Frontend', 'Database'],
            requirements: [3, 8],
            modules: [
                { id: 1, title: 'Backend Basics', completed: false },
                { id: 2, title: 'REST APIs', completed: false },
                { id: 3, title: 'Datenbanken', completed: false },
                { id: 4, title: 'Authentication', completed: false },
                { id: 5, title: 'Deployment', completed: false },
            ],
        },
    ];

    const levels = ['Anfänger', 'Mittel', 'Fortgeschritten'];
    const durations = ['4 Wochen', '5 Wochen', '6 Wochen', '8 Wochen'];

    const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
    };

    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);
    };

    const handleResetFilters = () => {
        setSelectedLevel('all');
        setSelectedDuration('all');
        setSearchTerm('');
    };

    const filteredCourses = courses.filter((course) => {
        const matchesSearch =
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            );

        const matchesLevel =
            selectedLevel === 'all' || course.level === selectedLevel;
        const matchesDuration =
            selectedDuration === 'all' || course.duration === selectedDuration;

        return matchesSearch && matchesLevel && matchesDuration;
    });

    return (
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4,
                }}
            >
                <Typography variant='h4'>Verfügbare Kurse</Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            placeholder='Suche nach Kursen, Beschreibungen oder Tags...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FormControl fullWidth>
                            <InputLabel>Niveau</InputLabel>
                            <Select
                                value={selectedLevel}
                                label='Niveau'
                                onChange={handleLevelChange}
                            >
                                <MenuItem value='all'>Alle Niveaus</MenuItem>
                                {levels.map((level) => (
                                    <MenuItem key={level} value={level}>
                                        {level}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FormControl fullWidth>
                            <InputLabel>Dauer</InputLabel>
                            <Select
                                value={selectedDuration}
                                label='Dauer'
                                onChange={handleDurationChange}
                            >
                                <MenuItem value='all'>Alle Dauern</MenuItem>
                                {durations.map((duration) => (
                                    <MenuItem key={duration} value={duration}>
                                        {duration}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                {(selectedLevel !== 'all' ||
                    selectedDuration !== 'all' ||
                    searchTerm) && (
                    <Box
                        sx={{
                            mt: 2,
                            display: 'flex',
                            gap: 1,
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        {selectedLevel !== 'all' && (
                            <Chip
                                label={`Niveau: ${selectedLevel}`}
                                onDelete={() => setSelectedLevel('all')}
                            />
                        )}
                        {selectedDuration !== 'all' && (
                            <Chip
                                label={`Dauer: ${selectedDuration}`}
                                onDelete={() => setSelectedDuration('all')}
                            />
                        )}
                        {searchTerm && (
                            <Chip
                                label={`Suche: ${searchTerm}`}
                                onDelete={() => setSearchTerm('')}
                            />
                        )}
                        <Button size='small' onClick={handleResetFilters}>
                            Alle Filter zurücksetzen
                        </Button>
                    </Box>
                )}
            </Box>

            <Grid container spacing={3}>
                {filteredCourses.map((course) => (
                    <Grid item xs={12} md={4} key={course.id}>
                        <CourseCard course={course} />
                    </Grid>
                ))}
            </Grid>

            {filteredCourses.length === 0 && (
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant='h6' color='text.secondary'>
                        Keine Kurse gefunden
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Versuchen Sie es mit anderen Suchkriterien
                    </Typography>
                </Box>
            )}
        </Container>
    );
}

export default CourseList;