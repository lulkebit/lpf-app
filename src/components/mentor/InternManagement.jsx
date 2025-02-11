import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Box,
    Chip,
    Avatar,
} from '@mui/material';
import {
    Edit as EditIcon,
    Person as PersonIcon,
    School as SchoolIcon,
    DateRange as DateRangeIcon,
} from '@mui/icons-material';
import { useState } from 'react';

function InternManagement() {
    const [interns, setInterns] = useState([
        {
            id: 1,
            name: 'Max Mustermann',
            email: 'max.mustermann@fi-ts.de',
            phone: '+49 123 456789',
            department: 'Software-Entwicklung',
            school: 'Technisches Gymnasium Musterstadt',
            startDate: '2024-03-01',
            endDate: '2024-08-31',
            mentor: 'Sarah Schmidt',
            progress: 65,
        },
        {
            id: 2,
            name: 'Lisa Schmidt',
            email: 'lisa.schmidt@fi-ts.de',
            phone: '+49 123 456790',
            department: 'Software-Entwicklung',
            school: 'Berufliches Gymnasium Technik',
            startDate: '2024-02-01',
            endDate: '2024-07-31',
            mentor: 'Sarah Schmidt',
            progress: 45,
        },
    ]);

    const [selectedIntern, setSelectedIntern] = useState(null);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editedData, setEditedData] = useState(null);

    const handleEdit = (intern) => {
        setSelectedIntern(intern);
        setEditedData({...intern});
        setEditDialogOpen(true);
    };

    const handleSave = () => {
        setInterns(interns.map(intern => 
            intern.id === editedData.id ? editedData : intern
        ));
        setEditDialogOpen(false);
    };

    const handleChange = (field) => (event) => {
        setEditedData({
            ...editedData,
            [field]: event.target.value
        });
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('de-DE');
    };

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Praktikanten verwalten
            </Typography>
            <List>
                {interns.map((intern) => (
                    <Paper key={intern.id} sx={{ mb: 2 }}>
                        <ListItem
                            secondaryAction={
                                <IconButton 
                                    edge="end" 
                                    onClick={() => handleEdit(intern)}
                                >
                                    <EditIcon />
                                </IconButton>
                            }
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
                                <Avatar sx={{ bgcolor: 'primary.main' }}>
                                    {intern.name.charAt(0)}
                                </Avatar>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="h6">
                                            {intern.name}
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Chip 
                                                size="small"
                                                icon={<SchoolIcon />}
                                                label={intern.school}
                                            />
                                            <Chip 
                                                size="small"
                                                icon={<DateRangeIcon />}
                                                label={`${formatDate(intern.startDate)} - ${formatDate(intern.endDate)}`}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary', mt: 1 }}>
                                        <Typography variant="body2">
                                            {intern.email}
                                        </Typography>
                                        <Typography variant="body2">
                                            {intern.department}
                                        </Typography>
                                        <Typography variant="body2">
                                            Fortschritt: {intern.progress}%
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </ListItem>
                    </Paper>
                ))}
            </List>

            <Dialog 
                open={editDialogOpen} 
                onClose={() => setEditDialogOpen(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>Praktikant bearbeiten</DialogTitle>
                <DialogContent>
                    {editedData && (
                        <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Name"
                                fullWidth
                                value={editedData.name}
                                onChange={handleChange('name')}
                            />
                            <TextField
                                label="E-Mail"
                                fullWidth
                                value={editedData.email}
                                onChange={handleChange('email')}
                            />
                            <TextField
                                label="Telefon"
                                fullWidth
                                value={editedData.phone}
                                onChange={handleChange('phone')}
                            />
                            <TextField
                                label="Schule"
                                fullWidth
                                value={editedData.school}
                                onChange={handleChange('school')}
                            />
                            <TextField
                                label="Abteilung"
                                fullWidth
                                value={editedData.department}
                                onChange={handleChange('department')}
                            />
                            <TextField
                                label="Praktikumsbeginn"
                                type="date"
                                fullWidth
                                value={editedData.startDate}
                                onChange={handleChange('startDate')}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                label="Praktikumsende"
                                type="date"
                                fullWidth
                                value={editedData.endDate}
                                onChange={handleChange('endDate')}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditDialogOpen(false)}>
                        Abbrechen
                    </Button>
                    <Button onClick={handleSave} variant="contained" color="primary">
                        Speichern
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default InternManagement;