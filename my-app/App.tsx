import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './src/screens/Dashboard';
import TestScreen from './src/screens/TestScreen';
import api from './src/services/api';

export default function App() {
  const [theme, setTheme] = useState();
  const [loading, setLoading] = useState(true);

  const Stack = createStackNavigator();
  async function getTheme() {
    const { data } = await api.get('/theme');
    setTheme(data);
    setLoading(false);
  }

  useEffect(() => {
    getTheme();
  }, [theme]);

  if (loading) {
    return <ActivityIndicator color="red" />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="TestScreen" component={TestScreen} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
