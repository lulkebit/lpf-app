import {
    Box,
    Typography,
    Grid,
    LinearProgress,
    Paper,
} from '@mui/material';
import {
    EmojiEvents as TrophyIcon,
    Psychology as BrainIcon,
    Code as CodeIcon,
    Build as BuildIcon,
    Speed as SpeedIcon,
    LibraryBooks as LibraryIcon,
} from '@mui/icons-material';
import { useState } from 'react';

function Achievements() {
    const [achievements] = useState([
        {
            id: 1,
            title: 'Git-Experte',
            icon: <BuildIcon sx={{ fontSize: 40 }} />,
            description: 'Git & GitHub Zertifizierung abgeschlossen',
            date: '15.03.2024',
            points: 100,
            type: 'Zertifizierung'
        },
        {
            id: 2,
            title: 'Erste Schritte',
            icon: <LibraryIcon sx={{ fontSize: 40 }} />,
            description: 'Ersten Kurs erfolgreich abgeschlossen',
            date: '10.03.2024',
            points: 50,
            type: 'Meilenstein'
        },
        {
            id: 3,
            title: 'Python Master',
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            description: 'Python Grundkurs erfolgreich abgeschlossen',
            date: '05.03.2024',
            points: 75,
            type: 'Zertifizierung'
        },
        {
            id: 4,
            title: 'Schnelle Auffassungsgabe',
            icon: <BrainIcon sx={{ fontSize: 40 }} />,
            description: '5 Übungen in einer Woche gelöst',
            date: '01.03.2024',
            points: 50,
            type: 'Leistung'
        },
        {
            id: 5,
            title: 'Lernstreak',
            icon: <SpeedIcon sx={{ fontSize: 40 }} />,
            description: '7 Tage in Folge gelernt',
            date: '28.02.2024',
            points: 25,
            type: 'Streak'
        }
    ]);

    const totalPoints = achievements.reduce((sum, achievement) => sum + achievement.points, 0);
    const nextLevel = Math.ceil(totalPoints / 100) * 100;
    const currentLevel = Math.floor(totalPoints / 100);
    const levelProgress = (totalPoints % 100);

    return (
        <>
            {/* Level-Fortschritt */}
            <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <TrophyIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>
                            Level {currentLevel}
                        </Typography>
                        <LinearProgress 
                            variant="determinate" 
                            value={levelProgress} 
                            sx={{ height: 8, borderRadius: 4 }}
                        />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {totalPoints} / {nextLevel} Punkte
                    </Typography>
                </Box>
            </Box>

            {/* Achievements */}
            <Typography variant="h6" gutterBottom>
                Errungenschaften
            </Typography>
            <Grid container spacing={2}>
                {achievements.map((achievement) => (
                    <Grid item xs={12} sm={4} key={achievement.id}>
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
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="body1" fontWeight="medium">
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
        </>
    );
}

export default Achievements;