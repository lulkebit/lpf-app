import {
    Container,
    Grid,
    Paper,
    Typography,
    Avatar,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
    LinearProgress,
} from '@mui/material';
import {
    School as SchoolIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    Business as BusinessIcon,
    Settings as SettingsIcon,
    DateRange as DateRangeIcon,
    Code as CodeIcon,
    EmojiEvents as TrophyIcon,
    Psychology as BrainIcon,
    GroupWork as TeamIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    
    // Demo-Daten (später durch echte Daten aus der Datenbank ersetzen)
    const [profileData] = useState({
        name: 'Max Mustermann',
        role: 'Praktikant',
        email: 'max.mustermann@fi-ts.de',
        phone: '+49 123 456789',
        department: 'Software-Entwicklung',
        school: 'Technisches Gymnasium Musterstadt',
        startDate: '2024-03-01',
        endDate: '2024-08-31',
        mentor: 'Sarah Schmidt',
    });

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('de-DE');
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {/* Profil-Header */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Avatar 
                            sx={{ 
                                width: 100, 
                                height: 100, 
                                bgcolor: 'primary.main',
                                fontSize: '2.5rem'
                            }}
                        >
                            {profileData.name.charAt(0)}
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h4">{profileData.name}</Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {profileData.role}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                                <Chip 
                                    icon={<SchoolIcon />} 
                                    label={profileData.school}
                                />
                                <Chip 
                                    icon={<CodeIcon />}
                                    label="Python Master"
                                    color="primary"
                                />
                                <Chip 
                                    icon={<TrophyIcon />}
                                    label="Git-Experte"
                                    color="secondary"
                                />
                                <Chip 
                                    icon={<TeamIcon />}
                                    label="Teamplayer"
                                    color="success"
                                />
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                {/* Persönliche Informationen */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>
                            Persönliche Informationen
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="E-Mail" 
                                    secondary={profileData.email} 
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PhoneIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Telefon" 
                                    secondary={profileData.phone} 
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <BusinessIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Abteilung" 
                                    secondary={profileData.department} 
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Mentor" 
                                    secondary={profileData.mentor} 
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <DateRangeIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Praktikumszeitraum" 
                                    secondary={`${formatDate(profileData.startDate)} - ${formatDate(profileData.endDate)}`} 
                                />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                {/* Lernfortschritt */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Lernfortschritt
                        </Typography>
                        <Box sx={{ mt: 3 }}>
                            {[
                                { language: 'Python', progress: 75, completed: 6, total: 8 },
                                { language: 'Java', progress: 45, completed: 3, total: 8 },
                                { language: 'HTML/CSS/JS', progress: 60, completed: 4, total: 6 }
                            ].map((item, index) => (
                                <Box key={index} sx={{ mb: 3 }}>
                                    <Box sx={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between',
                                        mb: 1 
                                    }}>
                                        <Typography variant="body1">
                                            {item.language}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.completed}/{item.total} Module
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: '100%', mr: 1 }}>
                                        <LinearProgress 
                                            variant="determinate" 
                                            value={item.progress}
                                            sx={{ height: 8, borderRadius: 4 }}
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>

                {/* Achievements */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <TrophyIcon color="primary" sx={{ fontSize: 40 }} />
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom>
                                        Level 2
                                    </Typography>
                                    <LinearProgress 
                                        variant="determinate" 
                                        value={65} 
                                        sx={{ height: 8, borderRadius: 4 }}
                                    />
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    265 / 300 Punkte
                                </Typography>
                            </Box>
                        </Box>
                        <Grid container spacing={2}>
                            {[
                                {
                                    title: 'Python Grundkurs',
                                    description: 'Erfolgreich abgeschlossen',
                                    date: '15.03.2024',
                                    points: 100,
                                    icon: <CodeIcon />,
                                },
                                {
                                    title: 'Erste Schritte',
                                    description: 'Git Basics gemeistert',
                                    date: '10.03.2024',
                                    points: 50,
                                    icon: <TrophyIcon />,
                                },
                                {
                                    title: 'Fleißige Biene',
                                    description: '7 Tage in Folge gelernt',
                                    date: '05.03.2024',
                                    points: 25,
                                    icon: <BrainIcon />,
                                }
                            ].map((achievement, index) => (
                                <Grid item xs={12} sm={4} key={index}>
                                    <Paper 
                                        sx={{ 
                                            p: 2,
                                            height: '100%',
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: 3
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                                            <Box sx={{ color: 'primary.main' }}>
                                                {achievement.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">
                                                    {achievement.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                                    {achievement.description}
                                                </Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {achievement.date}
                                                    </Typography>
                                                    <Typography variant="caption" color="primary" fontWeight="medium">
                                                        +{achievement.points} Punkte
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Profile;