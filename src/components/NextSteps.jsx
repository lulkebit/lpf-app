import {
    Paper,
    Typography,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Button,
    Box,
} from '@mui/material';

function NextSteps() {
    const steps = [
        {
            label: 'Grundlagen abschließen',
            description: 'Beende das Python Grundlagen Modul',
        },
        {
            label: 'Praktische Übung',
            description: 'Erstelle dein erstes eigenes Projekt',
        },
        {
            label: 'Fortgeschrittene Konzepte',
            description: 'Starte mit objektorientierter Programmierung',
        },
    ];

    return (
        <Paper sx={{ p: 2, mt: 3 }}>
            <Typography variant='h6' gutterBottom>
                Nächste Schritte
            </Typography>
            <Stepper orientation='vertical'>
                {steps.map((step, index) => (
                    <Step key={index} active={index === 0}>
                        <StepLabel>{step.label}</StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mt: 2 }}>
                                <Button variant='contained' size='small'>
                                    Starten
                                </Button>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Paper>
    );
}

export default NextSteps;
