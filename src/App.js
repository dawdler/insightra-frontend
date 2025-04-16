import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  CircularProgress
} from '@mui/material';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/')
      .then(response => {
        setMessage(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data from backend:', error);
        setMessage('Error fetching data from backend');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Enlightnr - AI Agent For Insights
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Card>
            <CardContent>
              {loading ? (
                <Box display="flex" justifyContent="center">
                  <CircularProgress />
                </Box>
              ) : (
                <Typography variant="h5" component="div">
                  Backend Response: {message}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default App;