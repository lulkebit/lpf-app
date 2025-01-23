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
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: 'Dashboard', path: '/' },
        { label: 'Kurse', path: '/courses' },
        { label: 'Übungen', path: '/exercises' },
        { label: 'Ressourcen', path: '/resources' },
        { label: 'Betreuer-Dashboard', path: '/mentor' },
    ];

    return (
        <AppBar position='static'>
            <Toolbar>
                <Avatar
                    src='/fi-logo.png'
                    alt='FI Logo'
                    sx={{ mr: 2, width: 40, height: 40, cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                />
                <Typography
                    variant='h6'
                    component='div'
                    sx={{ flexGrow: 0, mr: 4, cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                >
                    FI-Lernplattform
                </Typography>

                <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                    {navItems.map((item) => (
                        <Button
                            key={item.path}
                            color='inherit'
                            onClick={() => navigate(item.path)}
                            sx={{
                                borderBottom:
                                    location.pathname === item.path
                                        ? '2px solid white'
                                        : 'none',
                                borderRadius: 0,
                                '&:hover': {
                                    borderBottom: '2px solid white',
                                },
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                        color='inherit'
                        onClick={() => navigate('/notifications')}
                    >
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton
                        color='inherit'
                        onClick={() => navigate('/profile')}
                    >
                        <AccountIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
