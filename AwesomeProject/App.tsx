import React, { useEffect } from 'react';
import RNBootSplash from "react-native-bootsplash";

import {

  StyleSheet,
  View,
} from 'react-native';






function App(): JSX.Element {
  
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
 
     
        <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.middle} />
      <View style={styles.bottom} />
    </View>
     
   
    
  );
}

const styles = StyleSheet.create({
 
  container: {
    
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 10,
    width: '100%',
    height: '100%',
    
  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 5,
    
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
 
  },
});

export default App;
