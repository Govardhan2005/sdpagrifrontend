import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Box, Paper, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AdminHome() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogout = () => {
    console.log('Admin logged out');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#006747', // Dark Teal color
            color: 'white',
          },
        }}
      >
        <Box
          sx={{
            padding: '20px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Admin Dashboard
          </Typography>
        </Box>
        <List>
          <ListItem button onClick={() => navigate('/adminhome')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => navigate('/viewallfarmers')}>
            <ListItemText primary="Farmers" />
          </ListItem>
          <ListItem button onClick={() => navigate('/viewallcustomers')}>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, marginLeft: '240px', padding: '20px' }}>
        <Container>
          <Paper elevation={3} sx={{ padding: '30px', marginBottom: '20px' }}>
            <Typography variant="h4" gutterBottom>
              Welcome!!
            </Typography>
            
          </Paper>

          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Paper elevation={3} sx={{ padding: '20px', flex: 1, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Customers
              </Typography>
              <Typography variant="body2">View and manage user accounts.</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#006747', // Dark Teal color
                  color: 'white',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: '#004d38', // Slightly darker teal on hover
                  },
                }}
                onClick={() => navigate('/usermanagement')}
              >
                User Management
              </Button>
            </Paper>

            <Paper elevation={3} sx={{ padding: '20px', flex: 1, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Farmers
              </Typography>
              <Typography variant="body2">View and manage farmer accounts.</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#006747', // Dark Teal color
                  color: 'white',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: '#004d38', // Slightly darker teal on hover
                  },
                }}
                onClick={() => navigate('/farmermanagement')}
              >
                Farmer Management
              </Button>
            </Paper>

            <Paper elevation={3} sx={{ padding: '20px', flex: 1, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Products
              </Typography>
              <Typography variant="body2">Update product preferences.</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#006747', // Dark Teal color
                  color: 'white',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: '#004d38', // Slightly darker teal on hover
                  },
                }}
                onClick={() => navigate('/productmanagement')}
              >
                Product Management
              </Button>
            </Paper>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
