import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Link, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CustomerLogin() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '16px' };

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Make the API call for login, but do not check for success
    fetch(`http://localhost:1000/customer/login?name=${name}&password=${password}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('Login attempted:', result);
        // Navigate to the customer home page regardless of login success
        navigate('/customerhome'); // Redirect to CustomerHome component upon any result
      })
      .catch((err) => {
        console.error('Login failed:', err);
        setErrorMessage('An error occurred. Please try again.');
        // Still navigate to the customer home page in case of error
        navigate('/customerhome');
      });
  };

  return (
    <div>
      {/* AppBar with left-aligned navigation buttons */}
      <AppBar position="static" sx={{ backgroundColor: '#006747' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button sx={{ color: 'white' }} onClick={() => navigate('/')}>Home</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ color: '#006747' }}>
            <u>Customer Login</u>
          </h1>

          <form style={formStyle} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Customer Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: '#006747' } }}
            />
            <TextField
              id="password"
              label="Customer Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: '#006747' } }}
            />
            <Button variant="contained" sx={{ backgroundColor: '#006747', color: 'white' }} onClick={handleLogin}>
              Login
            </Button>

            {errorMessage && (
              <Typography color="error" style={{ marginTop: '10px', textAlign: 'center' }}>
                {errorMessage}
              </Typography>
            )}

            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <span>Don't have an account? </span>
              <Link href="" onClick={() => navigate('/customer')} style={{ color: '#006747', fontWeight: 'bold' }}>
                Register
              </Link>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
