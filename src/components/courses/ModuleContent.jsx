import {
    Container,
    Typography,
    Paper,
    Box,
    Button,
    Breadcrumbs,
    Link,
    LinearProgress,
    Divider,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid
} from '@mui/material';
import {
    ArrowBack as ArrowBackIcon,
    PlayCircle as PlayIcon,
    Article as ArticleIcon,
    Code as CodeIcon,
    Assignment as AssignmentIcon,
    Check as CheckIcon,
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ModuleContent() {
    const { courseId, moduleId } = useParams();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    // Beispiel-Lerninhalte (später durch echte Daten ersetzen)
    const content = {
        theory: {
            title: "Theoretische Grundlagen",
            sections: [
                {
                    title: "Einführung",
                    content: `
                        <h2>Willkommen zum Modul!</h2>
                        <p>In diesem Modul lernen Sie die grundlegenden Konzepte der Programmierung kennen. Wir beginnen mit den wichtigsten Bausteinen und arbeiten uns Schritt für Schritt vor.</p>
                        
                        <h3>Lernziele</h3>
                        <ul>
                            <li>Verstehen der grundlegenden Programmierkonzepte</li>
                            <li>Praktische Anwendung der gelernten Konzepte</li>
                            <li>Entwicklung erster eigener Programme</li>
                        </ul>
                    `
                },
                {
                    title: "Hauptthema",
                    content: `
                        <h2>Hauptkonzepte</h2>
                        <p>Hier sind die wichtigsten Konzepte, die wir in diesem Modul behandeln werden:</p>
                        
                        <ol>
                            <li>
                                <h4>Variablen und Datentypen</h4>
                                <p>Lernen Sie, wie man Daten speichert und verarbeitet.</p>
                            </li>
                            <li>
                                <h4>Kontrollstrukturen</h4>
                                <p>Verstehen Sie, wie man den Programmablauf steuert.</p>
                            </li>
                            <li>
                                <h4>Funktionen</h4>
                                <p>Entwickeln Sie wiederverwendbare Codeblöcke.</p>
                            </li>
                        </ol>
                    `
                }
            ]
        },
        exercises: [
            {
                title: "Übung 1: Erste Schritte",
                description: "Erstellen Sie ein einfaches Programm zur Berechnung des Durchschnitts.",
                type: "code",
                completed: false
            },
            {
                title: "Übung 2: Debugging",
                description: "Finden und beheben Sie Fehler im vorgegebenen Code.",
                type: "code",
                completed: false
            },
            {
                title: "Quiz: Grundlagen",
                description: "Testen Sie Ihr Wissen über die Grundlagen.",
                type: "quiz",
                completed: false
            }
        ],
        resources: [
            {
                title: "Dokumentation",
                description: "Offizielle Dokumentation und Referenzen",
                type: "doc",
                url: "#"
            },
            {
                title: "Beispielcode",
                description: "Praktische Codebeispiele",
                type: "code",
                url: "#"
            },
            {
                title: "Video-Tutorial",
                description: "Schritt-für-Schritt Videoanleitungen",
                type: "video",
                url: "#"
            }
        ]
    };

    // Funktion zum Aktualisieren des Fortschritts
    const updateProgress = () => {
        const totalItems = content.exercises.length;
        const completedItems = content.exercises.filter(ex => ex.completed).length;
        setProgress((completedItems / totalItems) * 100);
    };

    const handleExerciseComplete = (index) => {
        content.exercises[index].completed = true;
        updateProgress();
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* Navigation */}
            <Box sx={{ mb: 3 }}>
                <Breadcrumbs>
                    <Link 
                        color="inherit" 
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/courses');
                        }}
                    >
                        Kurse
                    </Link>
                    <Link 
                        color="inherit"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`/course/${courseId}`);
                        }}
                    >
                        Kursdetails
                    </Link>
                    <Typography color="text.primary">Modul {moduleId} </Typography>
                </Breadcrumbs>
            </Box>  

            {/* Fortschritt */}
            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Modulfortschritt
                </Typography>
                <LinearProgress 
                    variant="determinate" 
                    value={progress} 
                    sx={{ height: 10, borderRadius: 5 }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {Math.round(progress)}% abgeschlossen
                </Typography>
            </Paper>

            {/* Theorie */}
            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h5" gutterBottom>
                    {content.theory.title}
                </Typography>
                {content.theory.sections.map((section, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            {section.title}
                        </Typography>
                        <Box 
                            dangerouslySetInnerHTML={{ __html: section.content }}
                            sx={{
                                '& h2': { fontSize: '1.5rem', mb: 2 },
                                '& h3': { fontSize: '1.3rem', mb: 2 },
                                '& h4': { fontSize: '1.1rem', mb: 1 },
                                '& p': { mb: 2 },
                                '& ul, & ol': { mb: 2, pl: 3 },
                                '& li': { mb: 1 }
                            }}
                        />
                        {index < content.theory.sections.length - 1 && (
                            <Divider sx={{ my: 3 }} />
                        )}
                    </Box>
                ))}
            </Paper>

            {/* Übungen */}
            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Übungen
                </Typography>
                <List>
                    {content.exercises.map((exercise, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                {exercise.completed ? (
                                    <CheckIcon color="success" />
                                ) : (
                                    exercise.type === 'code' ? (
                                        <CodeIcon />
                                    ) : (
                                        <AssignmentIcon />
                                    )
                                )}
                            </ListItemIcon>
                            <ListItemText 
                                primary={exercise.title}
                                secondary={exercise.description}
                            />
                            <Button 
                                variant="contained" 
                                color={exercise.completed ? "success" : "primary"}
                                onClick={() => handleExerciseComplete(index)}
                            >
                                {exercise.completed ? "Abgeschlossen" : "Starten"}
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Paper>

            {/* Ressourcen */}
            <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Zusätzliche Ressourcen
                </Typography>
                <Grid container spacing={3}>
                    {content.resources.map((resource, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {resource.title}
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {resource.description}
                                    </Typography>
                                    <Button 
                                        variant="outlined" 
                                        startIcon={
                                            resource.type === 'doc' ? <ArticleIcon /> :
                                            resource.type === 'code' ? <CodeIcon /> :
                                            <PlayIcon />
                                        }
                                        fullWidth
                                    >
                                        Öffnen
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    );
}

export default ModuleContent;