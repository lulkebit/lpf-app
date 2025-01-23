import {
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    Button,
    Box,
    Chip,
    TextField,
    InputAdornment,
    LinearProgress,
    IconButton,
    Tooltip,
} from '@mui/material';
import {
    Search as SearchIcon,
    FilterList as FilterIcon,
    Code as CodeIcon,
    Assignment as AssignmentIcon,
    Star as StarIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ExerciseList() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const exercises = [
        {
            id: 1,
            title: 'OSPlus API Integration',
            difficulty: 'Fortgeschritten',
            category: 'Backend',
            description:
                'Entwickle eine einfache Integration mit der OSPlus API',
            progress: 0,
            tags: ['Java', 'API', 'OSPlus'],
            estimatedTime: '4 Stunden',
        },
        {
            id: 2,
            title: 'Git Workflow Übung',
            difficulty: 'Anfänger',
            category: 'DevOps',
            description: 'Lerne den FI Git Workflow kennen',
            progress: 30,
            tags: ['Git', 'DevOps'],
            estimatedTime: '2 Stunden',
        },
        {
            id: 3,
            title: 'React Component Testing',
            difficulty: 'Mittel',
            category: 'Frontend',
            description: 'Schreibe Tests für React Komponenten',
            progress: 0,
            tags: ['React', 'Testing', 'Jest'],
            estimatedTime: '3 Stunden',
        },
        {
            id: 4,
            title: 'Datenbank Design',
            difficulty: 'Mittel',
            category: 'Datenbank',
            description:
                'Erstelle ein Datenbankschema für eine Banking-Anwendung',
            progress: 60,
            tags: ['SQL', 'Datenbank'],
            estimatedTime: '5 Stunden',
        },
    ];

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Anfänger':
                return 'success';
            case 'Mittel':
                return 'warning';
            case 'Fortgeschritten':
                return 'error';
            default:
                return 'default';
        }
    };

    const filteredExercises = exercises.filter(
        (exercise) =>
            exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            exercise.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            exercise.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

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
                <Typography variant='h4'>Praktische Übungen</Typography>
                <Tooltip title='Filter'>
                    <IconButton>
                        <FilterIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            <TextField
                fullWidth
                placeholder='Suche nach Übungen...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mb: 4 }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <Grid container spacing={3}>
                {filteredExercises.map((exercise) => (
                    <Grid item xs={12} md={6} key={exercise.id}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    transition: 'transform 0.3s ease-in-out',
                                    boxShadow: 3,
                                },
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        mb: 2,
                                    }}
                                >
                                    <Typography variant='h6' component='h2'>
                                        {exercise.title}
                                    </Typography>
                                    <Chip
                                        label={exercise.difficulty}
                                        color={getDifficultyColor(
                                            exercise.difficulty
                                        )}
                                        size='small'
                                    />
                                </Box>

                                <Typography color='text.secondary' paragraph>
                                    {exercise.description}
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        mb: 2,
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {exercise.tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            label={tag}
                                            size='small'
                                            variant='outlined'
                                        />
                                    ))}
                                </Box>

                                {exercise.progress > 0 && (
                                    <Box sx={{ mb: 2 }}>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                        >
                                            Fortschritt: {exercise.progress}%
                                        </Typography>
                                        <LinearProgress
                                            variant='determinate'
                                            value={exercise.progress}
                                            sx={{ mt: 1 }}
                                        />
                                    </Box>
                                )}

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mt: 'auto',
                                    }}
                                >
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        {exercise.estimatedTime}
                                    </Typography>
                                    <Button
                                        variant='contained'
                                        onClick={() =>
                                            navigate(`/exercise/${exercise.id}`)
                                        }
                                    >
                                        {exercise.progress > 0
                                            ? 'Fortsetzen'
                                            : 'Starten'}
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

export default ExerciseList;
