import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Dashboard from './src/screens/Dashboard';
import api from './src/services/api';

export default function App() {
  const [theme, setTheme] = useState();
  const [loading, setLoading] = useState(true);

  async function getTheme() {
    const { data } = await api.get('/theme');
    setTheme(data);
    setLoading(false);
  }

  useEffect(() => {
    getTheme();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
