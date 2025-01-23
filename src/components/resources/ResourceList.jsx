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
} from '@mui/material';
import {
    Search as SearchIcon,
    Book as BookIcon,
    VideoLibrary as VideoIcon,
    Code as CodeIcon,
    Description as DocIcon,
} from '@mui/icons-material';
import { useState } from 'react';

function ResourceList() {
    const [searchTerm, setSearchTerm] = useState('');

    const resources = [
        {
            id: 1,
            title: 'OSPlus Dokumentation',
            type: 'documentation',
            description: 'Umfassende Dokumentation des OSPlus Systems',
            icon: <DocIcon sx={{ fontSize: 40 }} />,
            tags: ['OSPlus', 'System', 'Dokumentation'],
            link: '#',
        },
        {
            id: 2,
            title: 'Git & GitHub Tutorial',
            type: 'video',
            description: 'Einführung in die Versionskontrolle mit Git',
            icon: <VideoIcon sx={{ fontSize: 40 }} />,
            tags: ['Git', 'Entwicklung', 'Tutorial'],
            link: '#',
        },
        {
            id: 3,
            title: 'FI Entwicklungsrichtlinien',
            type: 'document',
            description: 'Best Practices und Coding Standards der FI',
            icon: <BookIcon sx={{ fontSize: 40 }} />,
            tags: ['Guidelines', 'Entwicklung'],
            link: '#',
        },
        {
            id: 4,
            title: 'Java Code Beispiele',
            type: 'code',
            description: 'Praktische Beispiele für Java-Entwicklung',
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            tags: ['Java', 'Beispiele', 'Code'],
            link: '#',
        },
    ];

    const getTypeColor = (type) => {
        switch (type) {
            case 'documentation':
                return 'primary';
            case 'video':
                return 'secondary';
            case 'document':
                return 'success';
            case 'code':
                return 'warning';
            default:
                return 'default';
        }
    };

    const filteredResources = resources.filter(
        (resource) =>
            resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            resource.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    return (
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Typography variant='h4' gutterBottom>
                Ressourcen & Dokumentation
            </Typography>

            <TextField
                fullWidth
                placeholder='Suche nach Ressourcen...'
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
                {filteredResources.map((resource) => (
                    <Grid item xs={12} md={6} key={resource.id}>
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
                                        alignItems: 'center',
                                        mb: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: `${getTypeColor(
                                                resource.type
                                            )}.main`,
                                            mr: 2,
                                        }}
                                    >
                                        {resource.icon}
                                    </Box>
                                    <Box>
                                        <Typography variant='h6' component='h2'>
                                            {resource.title}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                        >
                                            {resource.description}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        mb: 2,
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {resource.tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            label={tag}
                                            size='small'
                                            color={getTypeColor(resource.type)}
                                            variant='outlined'
                                        />
                                    ))}
                                </Box>

                                <Box sx={{ mt: 'auto' }}>
                                    <Button
                                        variant='contained'
                                        color={getTypeColor(resource.type)}
                                        fullWidth
                                    >
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

export default ResourceList;
