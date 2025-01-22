import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Chip,
    LinearProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CourseCard({ course }) {
    const navigate = useNavigate();
    const completedModules = course.modules.filter(
        (module) => module.completed
    ).length;
    const progress = (completedModules / course.modules.length) * 100;

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Typography variant='h5' component='h2' gutterBottom>
                    {course.title}
                </Typography>
                <Typography color='text.secondary' gutterBottom>
                    {course.description}
                </Typography>
                <Box sx={{ mt: 2, mb: 2, display: 'flex', gap: 1 }}>
                    <Chip label={course.level} color='primary' size='small' />
                    <Chip
                        label={course.duration}
                        color='secondary'
                        size='small'
                    />
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant='body2' color='text.secondary'>
                        Fortschritt: {Math.round(progress)}%
                    </Typography>
                    <LinearProgress
                        variant='determinate'
                        value={progress}
                        sx={{ mt: 1 }}
                    />
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Button
                        variant='contained'
                        fullWidth
                        onClick={() => navigate(`/course/${course.id}`)}
                    >
                        Zum Kurs
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default CourseCard;
