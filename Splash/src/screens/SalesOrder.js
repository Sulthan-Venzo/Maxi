import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const SalesOrder = ({ navigation }) => {
  const onSaleNew = () => {
    navigation.navigate('New Sales Order');
  };

  const onSaleUpdate = () => {
    navigation.navigate('Production Unit');
  };
  return (
    <SafeAreaView style={{backgroundColor:'#ffffff', height:'100%'}}>
    <View style={{ marginHorizontal: 15, top: 40 }}>
     <View>
     <Pressable style={styles.button} onPress={onSaleNew}>
        <Text style={styles.SalesOrderText}>New Sales Order</Text>
      </Pressable>
     </View>

     <View style={{top: 30}}>
     <Pressable style={styles.button} onPress={onSaleUpdate}>
        <Text style={styles.SalesOrderText}>Update Sales Order</Text>
      </Pressable>
     </View>
      
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  
  button: {
    alignItems: 'center',
    backgroundColor: '#11182A',
    width: 368,
    height: 65,
    padding:20,
    borderRadius:5,
  },
  SalesOrderText: {
    fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
    color: '#FFFFFF',
  }
 
});

export default SalesOrder