import {
    Container,
    Typography,
    Paper,
    List,
    ListItem,
    Box,
    Button,
} from '@mui/material';
import { PlayCircle as PlayIcon } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const coursesContent = {
        "1": {
            title: 'Python Grundlagen',
            description: 'Lerne die Grundlagen der Python-Programmierung',
            modules: [
                {
                    id: 1,
                    title: 'Einführung in Python',
                    content: 'Erste Schritte in der Python-Programmierung',
                    duration: '1 Woche',
                    topics: [
                        'Installation und Setup',
                        'Erste Schritte mit Python',
                        'Variablen und Datentypen',
                        'Ein- und Ausgabe'
                    ]
                },
                {
                    id: 2,
                    title: 'Kontrollstrukturen',
                    content: 'Lernen Sie die grundlegenden Kontrollstrukturen in Python',
                    duration: '1 Woche',
                    topics: [
                        'if/else Bedingungen',
                        'for-Schleifen',
                        'while-Schleifen',
                        'Ausnahmebehandlung'
                    ]
                },
                {
                    id: 3,
                    title: 'Funktionen',
                    content: 'Funktionen und modulare Programmierung',
                    duration: '1 Woche',
                    topics: [
                        'Funktionsdefinition',
                        'Parameter und Rückgabewerte',
                        'Lokale und globale Variablen',
                        'Lambda-Funktionen'
                    ]
                }
            ]
        },
        "2": {
            title: 'Java Basics',
            description: 'Grundlagen der Java-Programmierung',
            modules: [
                {
                    id: 1,
                    title: 'Java Einführung',
                    content: 'Grundlegende Konzepte der Java-Programmierung',
                    duration: '1 Woche',
                    topics: [
                        'JDK Installation',
                        'Erste Java-Programme',
                        'Datentypen und Variablen',
                        'Operatoren'
                    ]
                },
                {
                    id: 2,
                    title: 'OOP Grundlagen',
                    content: 'Objektorientierte Programmierung in Java',
                    duration: '2 Wochen',
                    topics: [
                        'Klassen und Objekte',
                        'Vererbung',
                        'Polymorphismus',
                        'Interfaces'
                    ]
                },
                {
                    id: 3,
                    title: 'Collections',
                    content: 'Java Collections Framework',
                    duration: '1 Woche',
                    topics: [
                        'Listen',
                        'Sets',
                        'Maps',
                        'Iteratoren'
                    ]
                }
            ]
        },
        "3": {
            title: 'Web Development',
            description: 'HTML, CSS und JavaScript Grundlagen',
            modules: [
                {
                    id: 1,
                    title: 'HTML Grundlagen',
                    content: 'Einführung in HTML5',
                    duration: '1 Woche',
                    topics: [
                        'HTML-Struktur',
                        'Tags und Elemente',
                        'Formulare',
                        'Semantisches HTML'
                    ]
                },
                {
                    id: 2,
                    title: 'CSS Styling',
                    content: 'Gestaltung mit CSS',
                    duration: '2 Wochen',
                    topics: [
                        'Selektoren',
                        'Box-Modell',
                        'Flexbox',
                        'CSS Grid'
                    ]
                },
                {
                    id: 3,
                    title: 'JavaScript',
                    content: 'Interaktivität mit JavaScript',
                    duration: '2 Wochen',
                    topics: [
                        'Grundlagen',
                        'DOM-Manipulation',
                        'Events',
                        'AJAX'
                    ]
                }
            ]
        },
        "4": {
            title: 'iOS Entwicklung mit Swift',
            description: 'Lerne die Entwicklung moderner iOS Apps mit Swift und SwiftUI',
            modules: [
                {
                    id: 1,
                    title: 'Swift Grundlagen',
                    content: 'Einführung in die Swift-Programmiersprache',
                    duration: '2 Wochen',
                    topics: [
                        'Swift Syntax und Grundkonzepte',
                        'Variablen und Konstanten',
                        'Kontrollstrukturen und Schleifen',
                        'Funktionen und Closures',
                        'Klassen und Strukturen',
                        'Optionals und Error Handling'
                    ]
                },
                {
                    id: 2,
                    title: 'UIKit & SwiftUI',
                    content: 'UI-Design für iOS',
                    duration: '2 Wochen',
                    topics: [
                        'Einführung in UIKit',
                        'SwiftUI Grundlagen',
                        'Layout und Constraints',
                        'UI-Komponenten',
                        'Navigation',
                        'Animationen'
                    ]
                },
                {
                    id: 3,
                    title: 'iOS App Architektur',
                    content: 'Best Practices für iOS-Apps',
                    duration: '1 Woche',
                    topics: [
                        'MVC und MVVM',
                        'Dependency Injection',
                        'State Management',
                        'Unit Testing',
                        'Performance'
                    ]
                },
                {
                    id: 4,
                    title: 'Daten & Netzwerk',
                    content: 'Datenpersistenz und APIs',
                    duration: '1 Woche',
                    topics: [
                        'CoreData',
                        'REST APIs',
                        'JSON Parsing',
                        'Async/Await',
                        'Offline Support'
                    ]
                },
                {
                    id: 5,
                    title: 'iOS APIs & Services',
                    content: 'System-APIs und Dienste',
                    duration: '1 Woche',
                    topics: [
                        'Push Notifications',
                        'MapKit',
                        'Kamera und Fotos',
                        'Biometrie',
                        'iCloud'
                    ]
                },
                {
                    id: 6,
                    title: 'App Store & Deployment',
                    content: 'Veröffentlichung im App Store',
                    duration: '1 Woche',
                    topics: [
                        'App Store Guidelines',
                        'TestFlight',
                        'App Store Connect',
                        'Zertifikate',
                        'Release Management'
                    ]
                }
            ]
        }
    };

    const courseContent = coursesContent[id];

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                {courseContent.title}
            </Typography>
            <Typography variant="body1" paragraph>
                {courseContent.description}
            </Typography>

            <Paper sx={{ mt: 3, p: 2 }}>
                <List>
                    {courseContent.modules.map((module, index) => (
                        <ListItem
                            key={module.id}
                            sx={{
                                display: 'block',
                                mb: 2,
                                '&:not(:last-child)': {
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                    pb: 2
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <PlayIcon color="primary" sx={{ mr: 2 }} />
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6">
                                        Modul {index + 1}: {module.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {module.content}
                                    </Typography>
                                </Box>
                                <Button 
                                    variant="contained"
                                    onClick={() => navigate(`/course/${id}/module/${module.id}`)}
                                >
                                    Starten
                                </Button>
                            </Box>

                            <Box sx={{ pl: 6 }}>
                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                    Dauer: {module.duration}
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Themen in diesem Modul:
                                </Typography>
                                <ul style={{ margin: 0 }}>
                                    {module.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex}>
                                            <Typography variant="body2">{topic}</Typography>
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export default CourseDetail;