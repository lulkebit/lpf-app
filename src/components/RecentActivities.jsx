import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material';
import {
    CheckCircle as CheckIcon,
    PlayCircle as PlayIcon,
    Book as BookIcon,
} from '@mui/icons-material';

function RecentActivities() {
    const activities = [
        {
            type: 'completed',
            text: 'Python Grundlagen Modul abgeschlossen',
            date: '15.03.2024',
            icon: <CheckIcon color='success' />,
        },
        {
            type: 'inProgress',
            text: 'Java Arrays & Collections gestartet',
            date: '14.03.2024',
            icon: <PlayIcon color='primary' />,
        },
        {
            type: 'material',
            text: 'Git-Tutorial durchgelesen',
            date: '13.03.2024',
            icon: <BookIcon color='secondary' />,
        },
    ];

    return (
        <Paper sx={{ p: 2, mt: 3 }}>
            <Typography variant='h6' gutterBottom>
                Letzte Aktivitäten
            </Typography>
            <List>
                {activities.map((activity, index) => (
                    <>
                        <ListItem key={index}>
                            <ListItemIcon>{activity.icon}</ListItemIcon>
                            <ListItemText
                                primary={activity.text}
                                secondary={activity.date}
                            />
                        </ListItem>
                        {index < activities.length - 1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default RecentActivities;
