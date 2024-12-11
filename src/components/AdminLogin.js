import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Link, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const paperStyle = { padding: '60px 30px', width: 600, margin: '20px auto' };
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '16px' };

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Directly navigate to /adminhome without checking credentials
    navigate('/adminhome');
  };

  return (
    <div>
      {/* AppBar with left-aligned navigation buttons */}
      <AppBar position="static" style={{ backgroundColor: '#006747' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button color="inherit" onClick={() => navigate('/')} style={{ color: 'white' }}>Home</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ color: '#006747' }}>
            <u>Admin Login</u>
          </h1>

          <form style={formStyle} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Admin Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: '16px' }}
            />
            <TextField
              id="password"
              label="Admin Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '16px' }}
            />
            <Button
              variant="contained"
              color="success"
              onClick={handleLogin}
              style={{ backgroundColor: '#006747', color: 'white' }}
            >
              Login
            </Button>

            {errorMessage && (
              <Typography color="error" style={{ marginTop: '10px', textAlign: 'center' }}>
                {errorMessage}
              </Typography>
            )}
          </form>
        </Paper>
      </Container>
    </div>
  );
}
