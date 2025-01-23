import {
    Card,
    CardContent,
    Typography,
    Chip,
    Box,
    Button,
    Collapse,
    IconButton,
} from '@mui/material';
import { useState } from 'react';
import {
    ExpandMore as ExpandMoreIcon,
    Computer as ComputerIcon,
    Business as BusinessIcon,
    Settings as SettingsIcon,
} from '@mui/icons-material';

function KnowledgeBaseCard({ item }) {
    const [expanded, setExpanded] = useState(false);

    const getIcon = (type) => {
        switch (type) {
            case 'system':
                return <ComputerIcon />;
            case 'company':
                return <BusinessIcon />;
            case 'process':
                return <SettingsIcon />;
            default:
                return null;
        }
    };

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                    }}
                >
                    {getIcon(item.type)}
                    <Typography variant='h6'>{item.title}</Typography>
                </Box>
                <Typography color='text.secondary' paragraph>
                    {item.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    {item.topics.map((topic, index) => (
                        <Chip
                            key={index}
                            label={topic}
                            size='small'
                            color='primary'
                            variant='outlined'
                        />
                    ))}
                </Box>
                <Collapse in={expanded}>
                    <Typography paragraph>{item.content}</Typography>
                </Collapse>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        size='small'
                        onClick={() => setExpanded(!expanded)}
                        endIcon={
                            <IconButton size='small'>
                                <ExpandMoreIcon
                                    sx={{
                                        transform: expanded
                                            ? 'rotate(180deg)'
                                            : 'rotate(0)',
                                        transition: '0.3s',
                                    }}
                                />
                            </IconButton>
                        }
                    >
                        {expanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                    </Button>
                    <Button size='small' color='primary'>
                        Als Aufgabe verwenden
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default KnowledgeBaseCard;
