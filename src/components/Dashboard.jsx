import {
    Grid,
    Card,
    CardContent,
    Typography,
    Container,
    Box,
    Button,
    Paper,
    LinearProgress,
} from '@mui/material';
import {
    Code as CodeIcon,
    School as SchoolIcon,
    Assignment as AssignmentIcon,
    Timeline as TimelineIcon,
    Star as StarIcon,
} from '@mui/icons-material';

function Dashboard() {
    const progress = 35; // Beispiel-Fortschritt

    const dashboardItems = [
        {
            title: 'Programmiersprachen',
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            description: 'Java, Python, JavaScript und mehr',
            color: 'primary.main',
            items: ['Java Basics', 'Python für Anfänger', 'Web-Entwicklung'],
        },
        {
            title: 'Lernfortschritt',
            icon: <TimelineIcon sx={{ fontSize: 40 }} />,
            description: 'Dein aktueller Lernstand',
            color: 'success.main',
            progress: progress,
        },
        {
            title: 'Aktuelle Übungen',
            icon: <AssignmentIcon sx={{ fontSize: 40 }} />,
            description: 'Praktische Aufgaben',
            color: 'warning.main',
            items: ['Arrays & Listen', 'Funktionen', 'Objektorientierung'],
        },
        {
            title: 'Tutorials',
            icon: <SchoolIcon sx={{ fontSize: 40 }} />,
            description: 'Geführte Lerneinheiten',
            color: 'secondary.main',
            items: ['Git Grundlagen', 'IDE Einführung', 'Best Practices'],
        },
    ];

    return (
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant='h4' gutterBottom>
                    Willkommen zurück!
                </Typography>
                <Paper
                    sx={{
                        p: 2,
                        mb: 3,
                        backgroundColor: 'primary.light',
                        color: 'white',
                    }}
                >
                    <Typography variant='h6'>Dein Lernfortschritt</Typography>
                    <LinearProgress
                        variant='determinate'
                        value={progress}
                        sx={{
                            mt: 1,
                            mb: 1,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: 'rgba(255,255,255,0.3)',
                        }}
                    />
                    <Typography variant='body2'>
                        {progress}% der Grundlagen abgeschlossen
                    </Typography>
                </Paper>
            </Box>

            <Grid container spacing={3}>
                {dashboardItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    transition: 'transform 0.3s ease-in-out',
                                },
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        mb: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: item.color,
                                            mb: 2,
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Typography
                                        variant='h6'
                                        component='h2'
                                        align='center'
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                    align='center'
                                    sx={{ mb: 2 }}
                                >
                                    {item.description}
                                </Typography>
                                {item.items && (
                                    <Box sx={{ mb: 2 }}>
                                        {item.items.map((subItem, idx) => (
                                            <Typography
                                                key={idx}
                                                variant='body2'
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    mb: 0.5,
                                                }}
                                            >
                                                <StarIcon
                                                    sx={{
                                                        fontSize: 16,
                                                        color: item.color,
                                                    }}
                                                />
                                                {subItem}
                                            </Typography>
                                        ))}
                                    </Box>
                                )}
                                <Box
                                    sx={{
                                        mt: 'auto',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Button variant='contained' color='primary'>
                                        Öffnen
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Dashboard;
