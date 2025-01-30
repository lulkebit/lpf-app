import {
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    LinearProgress,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Divider,
    Card,
    CardContent,
} from '@mui/material';
import {
    PlayCircle as PlayIcon,
    CheckCircle as CheckIcon,
    Person as PersonIcon,
    Timer as TimerIcon,
    School as SchoolIcon,
    LibraryBooks as LibraryIcon,
    Assignment as AssignmentIcon,
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Beispieldaten für verschiedene Kurse
    const coursesData = {
        "1": {
            title: 'Python Grundlagen',
            description: 'Lerne die Grundlagen der Python-Programmierung',
            level: 'Anfänger',
            duration: '4 Wochen',
            instructor: 'Michael Weber',
            progress: 0,
            lastActivity: null,
            learningGoals: [
                'Verstehen der grundlegenden Programmierkonzepte',
                'Beherrschung der Python-Syntax',
                'Arbeiten mit Variablen und Datentypen',
                'Implementierung von Kontrollstrukturen',
                'Erstellen und Verwenden von Funktionen'
            ],
            requirements: [
                'Keine Vorkenntnisse erforderlich',
                'Computer mit Python-Installation'
            ],
            modules: [
                {
                    id: 1,
                    title: 'Einführung in Python',
                    description: 'Erste Schritte in der Python-Programmierung',
                    duration: '1 Woche',
                    status: 'in-progress',
                    contentType: ['video', 'text'],
                },
                {
                    id: 2,
                    title: 'Variablen und Datentypen',
                    description: 'Grundlegende Datentypen und deren Verwendung',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'practice'],
                },
                {
                    id: 3,
                    title: 'Kontrollstrukturen',
                    description: 'If-Statements, Schleifen und bedingte Ausführung',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'text'],
                },
                {
                    id: 4,
                    title: 'Funktionen',
                    description: 'Definition und Verwendung von Funktionen',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'practice'],
                }
            ],
            materials: [
                {
                    title: 'Python Documentation',
                    type: 'documentation',
                    description: 'Offizielle Python Dokumentation'
                },
                {
                    title: 'Python Setup Guide',
                    type: 'guide',
                    description: 'Installationsanleitung für Python'
                },
                {
                    title: 'Python Cheatsheet',
                    type: 'resource',
                    description: 'Übersicht der wichtigsten Python-Befehle'
                }
            ]
        },
        "4": {
            title: 'Swift Grundlagen',
            description: 'Erste Schritte in der iOS-Entwicklung mit Swift',
            level: 'Anfänger',
            duration: '4 Wochen',
            instructor: 'Sarah Schmidt',
            progress: 0,
            lastActivity: null,
            learningGoals: [
                'Verstehen der Swift-Syntax',
                'Arbeiten mit Variablen und Konstanten',
                'Beherrschung von Kontrollstrukturen',
                'Verwendung von Funktionen und Closures',
                'Grundlagen der objektorientierten Programmierung'
            ],
            requirements: [
                'Keine Programmierkenntnisse erforderlich',
                'Mac mit aktueller macOS Version',
                'Xcode (aktuelle Version)'
            ],
            modules: [
                {
                    id: 1,
                    title: 'Swift Syntax',
                    description: 'Einführung in die Grundlagen der Swift-Programmiersprache',
                    duration: '1 Woche',
                    status: 'in-progress',
                    contentType: ['video', 'text'],
                },
                {
                    id: 2,
                    title: 'Datentypen & Variablen',
                    description: 'Verwendung von Datentypen, Variablen und Konstanten',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'practice'],
                },
                {
                    id: 3,
                    title: 'Kontrollstrukturen',
                    description: 'If-Statements, Schleifen und Switch-Cases',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'text'],
                },
                {
                    id: 4,
                    title: 'Funktionen & Closures',
                    description: 'Definition und Verwendung von Funktionen und Closures',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'practice'],
                }
            ],
            materials: [
                {
                    title: 'Swift Documentation',
                    type: 'documentation',
                    description: 'Offizielle Swift Dokumentation'
                },
                {
                    title: 'Xcode Setup Guide',
                    type: 'guide',
                    description: 'Installationsanleitung für Xcode'
                },
                {
                    title: 'Swift Basics Cheatsheet',
                    type: 'resource',
                    description: 'Übersicht der wichtigsten Swift-Grundlagen'
                }
            ]
        },
        "5": {
            title: 'UI Development mit SwiftUI',
            description: 'Moderne UI-Entwicklung für iOS-Apps',
            level: 'Mittel',
            duration: '5 Wochen',
            instructor: 'Sarah Schmidt',
            progress: 0,
            lastActivity: null,
            learningGoals: [
                'Verstehen der SwiftUI-Grundlagen',
                'Implementierung von UI-Layouts',
                'Arbeiten mit State Management',
                'Erstellung von Navigationsstrukturen',
                'Implementierung von Animationen'
            ],
            requirements: [
                'Abgeschlossener Swift Grundlagen Kurs',
                'Grundlegendes Verständnis von UI/UX',
                'Mac mit aktueller macOS Version',
                'Xcode (aktuelle Version)'
            ],
            modules: [
                {
                    id: 1,
                    title: 'SwiftUI Basics',
                    description: 'Einführung in die Grundlagen von SwiftUI',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'text'],
                },
                {
                    id: 2,
                    title: 'Layout & Stacks',
                    description: 'Arbeiten mit verschiedenen Layout-Optionen',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'practice'],
                },
                {
                    id: 3,
                    title: 'State Management',
                    description: 'Verwaltung von Zuständen in SwiftUI',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'text'],
                },
                {
                    id: 4,
                    title: 'Navigation',
                    description: 'Implementation von Navigationsstrukturen',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'practice'],
                },
                {
                    id: 5,
                    title: 'Animationen',
                    description: 'Erstellung von Animationen und Übergängen',
                    duration: '1 Woche',
                    status: 'locked',
                    contentType: ['video', 'practice'],
                }
            ],
            materials: [
                {
                    title: 'SwiftUI Documentation',
                    type: 'documentation',
                    description: 'Offizielle SwiftUI Dokumentation'
                },
                {
                    title: 'UI Design Guidelines',
                    type: 'guide',
                    description: 'iOS Design Guidelines und Best Practices'
                },
                {
                    title: 'SwiftUI Components',
                    type: 'resource',
                    description: 'Übersicht der wichtigsten SwiftUI-Komponenten'
                }
            ]
        }
    };

    const courseData = coursesData[id] || {
        title: 'Kurs nicht gefunden',
        description: 'Der angeforderte Kurs existiert nicht.',
        modules: []
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'success';
            case 'in-progress':
                return 'primary';
            case 'locked':
                return 'default';
            default:
                return 'default';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return <CheckIcon color="success" />;
            case 'in-progress':
                return <PlayIcon color="primary" />;
            default:
                return <PlayIcon color="disabled" />;
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'completed':
                return 'Abgeschlossen';
            case 'in-progress':
                return 'In Bearbeitung';
            case 'locked':
                return 'Noch nicht verfügbar';
            default:
                return 'Nicht begonnen';
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* Header Bereich */}
            <Paper sx={{ p: 3, mb: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" gutterBottom>
                            {courseData.title}
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            {courseData.description}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                            <Chip icon={<SchoolIcon />} label={courseData.level} />
                            <Chip icon={<TimerIcon />} label={courseData.duration} />
                            <Chip icon={<PersonIcon />} label={courseData.instructor} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Kursfortschritt
                            </Typography>
                            <LinearProgress 
                                variant="determinate" 
                                value={courseData.progress} 
                                sx={{ height: 10, borderRadius: 5, mb: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                {courseData.progress}% abgeschlossen
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Letzte Aktivität: {courseData.lastActivity}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            {/* Hauptinhalt */}
            <Grid container spacing={3}>
                {/* Linke Spalte - Module */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Kursmodule
                        </Typography>
                        <List>
                            {courseData.modules.map((module, index) => (
                                <ListItem 
                                    key={module.id}
                                    sx={{
                                        mb: 2,
                                        display: 'block',
                                        bgcolor: module.status === 'in-progress' ? 'action.hover' : 'transparent',
                                        borderRadius: 1
                                    }}
                                >
                                    <Box sx={{ display: 'flex', mb: 1 }}>
                                        <ListItemIcon>
                                            {getStatusIcon(module.status)}
                                        </ListItemIcon>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="h6">
                                                {module.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {module.description}
                                            </Typography>
                                        </Box>
                                        <Button 
                                            variant="contained"
                                            disabled={module.status === 'locked'}
                                            sx={{ ml: 2 }}
                                            onClick={() => navigate(`/course/${id}/module/${module.id}`)}
                                        >
                                            {module.status === 'completed' ? 'Wiederholen' : 'Starten'}
                                        </Button>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1, ml: 8 }}>
                                        <Chip 
                                            label={getStatusText(module.status)}
                                            color={getStatusColor(module.status)}
                                            size="small"
                                        />
                                        <Chip 
                                            icon={<TimerIcon />} 
                                            label={module.duration}
                                            size="small"
                                        />
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>

                    {/* Lernziele */}
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Lernziele
                        </Typography>
                        <List>
                            {courseData.learningGoals.map((goal, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <SchoolIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary={goal} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                {/* Rechte Spalte - Zusatzinfos */}
                <Grid item xs={12} md={4}>
                    {/* Voraussetzungen */}
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Voraussetzungen
                        </Typography>
                        <List>
                            {courseData.requirements.map((req, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <CheckIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary={req} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>

                    {/* Zusätzliche Materialien */}
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Materialien
                        </Typography>
                        <Grid container spacing={2}>
                            {courseData.materials.map((material, index) => (
                                <Grid item xs={12} key={index}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                <LibraryIcon sx={{ mr: 1 }} />
                                                <Typography variant="subtitle1">
                                                    {material.title}
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" color="text.secondary">
                                                {material.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CourseDetail;