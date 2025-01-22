import {
    Container,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Button,
    Box,
} from '@mui/material';
import { PlayCircle as PlayIcon } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

function CourseDetail() {
    const { id } = useParams();

    // Platzhalter-Daten (später durch echte Daten ersetzen)
    const courseContent = {
        title: 'Kursinhalt',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        modules: [
            {
                title: 'Modul 1: Einführung',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                title: 'Modul 2: Grundlagen',
                content:
                    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                title: 'Modul 3: Fortgeschritten',
                content:
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            },
        ],
    };

    return (
        <Container maxWidth='lg' sx={{ mt: 4 }}>
            <Typography variant='h4' gutterBottom>
                {courseContent.title}
            </Typography>
            <Typography variant='body1' paragraph>
                {courseContent.description}
            </Typography>

            <Paper sx={{ mt: 3, p: 2 }}>
                <List>
                    {courseContent.modules.map((module, index) => (
                        <ListItem
                            key={index}
                            divider={index < courseContent.modules.length - 1}
                        >
                            <ListItemIcon>
                                <PlayIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText
                                primary={module.title}
                                secondary={module.content}
                            />
                            <Box>
                                <Button variant='contained' size='small'>
                                    Starten
                                </Button>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export default CourseDetail;
