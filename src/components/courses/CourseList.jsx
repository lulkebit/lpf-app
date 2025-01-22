import { Grid, Typography, Container } from '@mui/material';
import CourseCard from './CourseCard';

function CourseList() {
    const courses = [
        {
            id: 1,
            title: 'Python Grundlagen',
            description: 'Lerne die Grundlagen der Python-Programmierung',
            level: 'Anfänger',
            duration: '4 Wochen',
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
            modules: [
                { id: 1, title: 'Java Einführung', completed: false },
                { id: 2, title: 'OOP Grundlagen', completed: false },
                { id: 3, title: 'Arrays und Collections', completed: false },
                { id: 4, title: 'Exceptions', completed: false },
            ],
        },
        {
            id: 3,
            title: 'Web Development',
            description: 'HTML, CSS und JavaScript Grundlagen',
            level: 'Anfänger',
            duration: '5 Wochen',
            modules: [
                { id: 1, title: 'HTML Basics', completed: false },
                { id: 2, title: 'CSS Styling', completed: false },
                { id: 3, title: 'JavaScript Grundlagen', completed: false },
                { id: 4, title: 'DOM Manipulation', completed: false },
            ],
        },
    ];

    return (
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Typography variant='h4' gutterBottom>
                Verfügbare Kurse
            </Typography>
            <Grid container spacing={3}>
                {courses.map((course) => (
                    <Grid item xs={12} md={4} key={course.id}>
                        <CourseCard course={course} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CourseList;
