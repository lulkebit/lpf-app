import {
    Container,
    Typography,
    Paper,
    Box,
    Button,
    Chip,
    Divider,
    Tab,
    Tabs,
} from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import {
    PlayArrow as RunIcon,
    Save as SaveIcon,
    Check as SubmitIcon,
} from '@mui/icons-material';

function ExerciseDetail() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    const [code, setCode] = useState(`// Dein Code hier
public class Solution {
    public static void main(String[] args) {
        // Implementiere die Lösung
    }
}`);

    // Beispiel-Übung (später durch echte Daten ersetzen)
    const exercise = {
        id: 1,
        title: 'OSPlus API Integration',
        description: 'Entwickle eine einfache Integration mit der OSPlus API',
        difficulty: 'Fortgeschritten',
        instructions: `
1. Erstelle eine Verbindung zur OSPlus Test-API
2. Implementiere die grundlegende Authentifizierung
3. Rufe Kontodaten über die API ab
4. Behandle mögliche Fehlerfälle
        `,
        testCases: [
            {
                input: 'Testkonto-ID: 12345',
                expectedOutput: 'Kontostand: 1000€',
            },
        ],
        hints: [
            'Nutze die OSPlus-SDK Bibliothek',
            'Beachte die API-Dokumentation',
            'Implementiere Error-Handling',
        ],
    };

    const handleCodeChange = (value) => {
        setCode(value);
    };

    const handleRunCode = () => {
        // Hier Code-Ausführungslogik implementieren
        console.log('Code wird ausgeführt:', code);
    };

    const handleSubmit = () => {
        // Hier Abgabe-Logik implementieren
        console.log('Übung wird eingereicht');
    };

    return (
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant='h4' gutterBottom>
                    {exercise.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip label={exercise.difficulty} color='primary' />
                </Box>
                <Typography variant='body1' paragraph>
                    {exercise.description}
                </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
                <Tabs
                    value={activeTab}
                    onChange={(e, newValue) => setActiveTab(newValue)}
                >
                    <Tab label='Aufgabe' />
                    <Tab label='Hinweise' />
                    <Tab label='Tests' />
                </Tabs>
            </Box>

            <Box sx={{ mb: 4 }}>
                {activeTab === 0 && (
                    <Paper sx={{ p: 2 }}>
                        <Typography
                            variant='body1'
                            component='pre'
                            sx={{ whiteSpace: 'pre-wrap' }}
                        >
                            {exercise.instructions}
                        </Typography>
                    </Paper>
                )}
                {activeTab === 1 && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant='h6' gutterBottom>
                            Hilfreiche Hinweise
                        </Typography>
                        {exercise.hints.map((hint, index) => (
                            <Typography key={index} variant='body1' paragraph>
                                • {hint}
                            </Typography>
                        ))}
                    </Paper>
                )}
                {activeTab === 2 && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant='h6' gutterBottom>
                            Testfälle
                        </Typography>
                        {exercise.testCases.map((test, index) => (
                            <Box key={index}>
                                <Typography variant='body1'>
                                    Input: {test.input}
                                </Typography>
                                <Typography variant='body1'>
                                    Erwartete Ausgabe: {test.expectedOutput}
                                </Typography>
                            </Box>
                        ))}
                    </Paper>
                )}
            </Box>

            <Paper sx={{ mb: 4 }}>
                <Editor
                    height='400px'
                    defaultLanguage='java'
                    theme='vs-dark'
                    value={code}
                    onChange={handleCodeChange}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                    }}
                />
            </Paper>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<RunIcon />}
                    onClick={handleRunCode}
                >
                    Ausführen
                </Button>
                <Button
                    variant='contained'
                    color='success'
                    startIcon={<SubmitIcon />}
                    onClick={handleSubmit}
                >
                    Abgeben
                </Button>
            </Box>
        </Container>
    );
}

export default ExerciseDetail;
