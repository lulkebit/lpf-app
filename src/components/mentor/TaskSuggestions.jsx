import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Chip,
    Box,
    Tooltip,
} from '@mui/material';
import {
    Assignment as TaskIcon,
    Code as CodeIcon,
    Business as BusinessIcon,
    Storage as DatabaseIcon,
} from '@mui/icons-material';

function TaskSuggestions() {
    const tasks = [
        {
            id: 1,
            title: 'OSPlus Einführung',
            description: 'Grundlegende Architektur und Module von OSPlus',
            category: 'System',
            duration: '2 Stunden',
            icon: <DatabaseIcon color='primary' />,
            difficulty: 'Einfach',
        },
        {
            id: 2,
            title: 'Git Workflow',
            description: 'Praktische Übung mit dem FI Git-Workflow',
            category: 'Entwicklung',
            duration: '3 Stunden',
            icon: <CodeIcon color='secondary' />,
            difficulty: 'Mittel',
        },
        {
            id: 3,
            title: 'Sparkassen-Finanzgruppe',
            description: 'Überblick über die Organisationsstruktur',
            category: 'Organisation',
            icon: <BusinessIcon color='success' />,
            duration: '1 Stunde',
            difficulty: 'Einfach',
        },
    ];

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Einfach':
                return 'success';
            case 'Mittel':
                return 'warning';
            case 'Schwer':
                return 'error';
            default:
                return 'default';
        }
    };

    return (
        <Paper sx={{ p: 2 }}>
            <Typography variant='h6' gutterBottom>
                Vorgeschlagene Aufgaben
            </Typography>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton sx={{ borderRadius: 1 }}>
                            <ListItemIcon>{task.icon}</ListItemIcon>
                            <ListItemText
                                primary={
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                        }}
                                    >
                                        {task.title}
                                        <Tooltip
                                            title={`Schwierigkeit: ${task.difficulty}`}
                                        >
                                            <Chip
                                                label={task.difficulty}
                                                size='small'
                                                color={getDifficultyColor(
                                                    task.difficulty
                                                )}
                                                sx={{ ml: 1 }}
                                            />
                                        </Tooltip>
                                    </Box>
                                }
                                secondary={
                                    <>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                        >
                                            {task.description}
                                        </Typography>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                gap: 1,
                                            }}
                                        >
                                            <Chip
                                                label={task.category}
                                                size='small'
                                                variant='outlined'
                                            />
                                            <Chip
                                                label={task.duration}
                                                size='small'
                                                variant='outlined'
                                            />
                                        </Box>
                                    </>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default TaskSuggestions;
