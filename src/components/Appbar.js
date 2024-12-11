import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#00695c' }}> {/* New Color (Teal) */}
        <Toolbar>
          
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
          <Button color="inherit" onClick={() => navigate('/about')}>About</Button>

          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
             {/* Add title if needed */}
          </Typography>

          {/* Separate buttons for each user role */}
          <Button color="inherit" onClick={() => navigate('/farmerlogin')}>Farmer</Button>
          <Button color="inherit" onClick={() => navigate('/customerlogin')}>Customer</Button>
          <Button color="inherit" onClick={() => navigate('/adminlogin')}>Admin</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
