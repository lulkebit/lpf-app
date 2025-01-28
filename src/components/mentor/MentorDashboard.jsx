import {
    Container,
    Grid,
    Typography,
    Paper,
    TextField,
    InputAdornment,
    Box,
    Chip,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import KnowledgeBaseCard from './KnowledgeBaseCard';
import TaskSuggestions from './TaskSuggestions';
import InternManagement from './InternManagement';

function MentorDashboard() {
    const knowledgeBase = [
        {
            id: 1,
            title: 'OSPlus',
            description: 'Das Kernbanksystem der Sparkassen-Finanzgruppe',
            topics: ['Architektur', 'Module', 'Entwicklung'],
            content: 'OSPlus ist die zentrale Bankanwendung...',
            type: 'system',
        },
        {
            id: 2,
            title: 'Entwicklungsprozesse',
            description: 'Software-Entwicklung in der FI',
            topics: ['Agile', 'DevOps', 'CI/CD'],
            content: 'Die FI nutzt moderne Entwicklungsmethoden...',
            type: 'process',
        },
        {
            id: 3,
            title: 'Finanz Informatik',
            description: 'IT-Dienstleister der Sparkassen-Finanzgruppe',
            topics: ['Organisation', 'Geschichte', 'Produkte'],
            content: 'Die Finanz Informatik ist...',
            type: 'company',
        },
    ];

    return (
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Typography variant='h4' gutterBottom>
                Betreuer-Dashboard
            </Typography>

            <Paper sx={{ p: 3, mb: 4 }}>
                <InternManagement />
            </Paper>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Typography variant='h5' gutterBottom>
                        Wissensdatenbank
                    </Typography>
                    {knowledgeBase.map((item) => (
                        <KnowledgeBaseCard key={item.id} item={item} />
                    ))}
                </Grid>
                <Grid item xs={12} md={4}>
                    <TaskSuggestions />
                </Grid>
            </Grid>
        </Container>
    );
}

export default MentorDashboard;
