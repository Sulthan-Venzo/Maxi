import React, { useState, useEffect } from 'react';
//import { View, Text } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
//import Login from './src/screens/Login';
//import Dashboard from './src/screens/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
//import Header from './src/components/Header';
import ScreenNavigation from './src/components/ScreenNavigation';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <ScreenNavigation />
      </NavigationContainer>
  );
};

export default App;