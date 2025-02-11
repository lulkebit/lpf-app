import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Chip,
    LinearProgress,
    Tooltip,
} from '@mui/material';
import { 
    Lock as LockIcon,
    Info as InfoIcon 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function CourseCard({ course, completedCourses = [] }) {
    const navigate = useNavigate();
    const completedModules = course.modules.filter(
        (module) => module.completed
    ).length;
    const progress = (completedModules / course.modules.length) * 100;

    const hasRequirements = course.requirements && course.requirements.length > 0;
    const requirementsMet = hasRequirements 
        ? course.requirements.every(reqId => completedCourses.includes(reqId))
        : true;

    const getRequiredCourseTitles = () => {
        if (!hasRequirements) return [];
        const allCourses = {
            1: 'Python Grundlagen',
            2: 'Java Basics',
            3: 'Web Development Grundlagen',
            4: 'iOS Entwicklung mit Swift',
            5: 'Fortgeschrittene Web-Entwicklung',
            6: 'Full-Stack Web Development'
        };
        return course.requirements.map(id => allCourses[id]);
    };

    return (
        <Card sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            opacity: requirementsMet ? 1 : 0.7 
        }}>
            <CardContent sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                pb: 2 // Padding unten für den Button
            }}>
                {/* Titel und Beschreibung */}
                <Box>
                    <Typography variant='h5' component='h2' gutterBottom>
                        {course.title}
                    </Typography>
                    <Typography color='text.secondary'>
                        {course.description}
                    </Typography>
                </Box>

                {/* Flexbox zum Schieben der folgenden Elemente nach unten */}
                <Box sx={{ 
                    mt: 'auto',
                    pt: 2, // Abstand zum Content oben
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}>
                    {/* Tags */}
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip label={course.level} color='primary' size='small' />
                        <Chip label={course.duration} color='secondary' size='small' />
                        {hasRequirements && (
                            <Tooltip title={
                                requirementsMet 
                                    ? "Alle Voraussetzungen erfüllt" 
                                    : `Benötigte Kurse: ${getRequiredCourseTitles().join(', ')}`
                            }>
                                <Chip
                                    icon={requirementsMet ? <InfoIcon /> : <LockIcon />}
                                    label="Voraussetzungen"
                                    color={requirementsMet ? "success" : "error"}
                                    size="small"
                                />
                            </Tooltip>
                        )}
                    </Box>

                    {/* Fortschrittsanzeige */}
                    <Box>
                        <Typography variant='body2' color='text.secondary'>
                            Fortschritt: {Math.round(progress)}%
                        </Typography>
                        <LinearProgress
                            variant='determinate'
                            value={progress}
                            sx={{ mt: 1 }}
                        />
                    </Box>

                    {/* Button */}
                    <Button
                        variant='contained'
                        fullWidth
                        onClick={() => navigate(`/course/${course.id}`)}
                        disabled={!requirementsMet}
                    >
                        {requirementsMet ? 'Zum Kurs' : 'Voraussetzungen fehlen'}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default CourseCard;