import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
//import image from '../assets/images/logo';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;