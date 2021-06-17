import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ActivityIndicator } from 'react-native';
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
    setTimeout(() => {
      getTheme();
    }, 9000);
  }, []);

  if (loading) {
    return <ActivityIndicator color="red" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
