import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Avatar,
} from '@mui/material';
import {
    AccountCircle as AccountIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';

function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Avatar
                    src='/fi-logo.png'
                    alt='FI Logo'
                    sx={{ mr: 2, width: 40, height: 40 }}
                />
                <Typography
                    variant='h6'
                    component='div'
                    sx={{ flexGrow: 0, mr: 4 }}
                >
                    FI-Lernplattform
                </Typography>

                <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                    <Button color='inherit'>Dashboard</Button>
                    <Button color='inherit'>Kurse</Button>
                    <Button color='inherit'>Übungen</Button>
                    <Button color='inherit'>Ressourcen</Button>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton color='inherit'>
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton color='inherit'>
                        <AccountIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
