import { View, Text, Pressable, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react';



const Dashboard = ({ navigation }) => {
      const onSalesOrder = () => {
        navigation.navigate('Sales Order');
      }

      const onProductionUnit = () => {
        navigation.navigate('Production Unit');
      }

      const onGoodNote = () => {
        navigation.navigate('Good Receipt Note');
      }
  return (
    <SafeAreaView style={{backgroundColor:'#ffffff', height:'100%'}}>
    <View style={{marginHorizontal: 15, top: 30 }}>
   
      <View style={{flex:1, flexDirection:'row', flexWrap: 'wrap'}}>
        <Pressable
          onPress={onSalesOrder}
        >

            <View style={styles.imageView}><Image style={styles.imageSize} source={require('../assets/images/png/SalesOrder.png')} />
              <Text style={styles.OrderSales}>Sales Order</Text>
            </View>

        </Pressable>

        <Pressable
          onPress={onProductionUnit}
        >
            <View style={styles.imageView}><Image style={styles.imageSize} source={require('../assets/images/png/ProductionUnit.png')} />
              <Text style={styles.OrderUnit}>Production Unit</Text>
            </View>

        </Pressable>

        <Pressable
          onPress={onGoodNote}
        >

            <View style={styles.imageView}><Image style={styles.imageSize} source={require('../assets/images/png/GoodNote.png')} />
              <Text style={styles.OrderReceiptNote}>Good Receipts Note</Text>
            </View>

        </Pressable>
       
        
      </View>
     
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageView: {
      backgroundColor: '#F9F9F9',
      margin: 5,
      padding: 35,
      width: 170,
      height: 180,
      // textAlignVertical: 'center',
      // textAlign: 'center',
      borderRadius: 12,
  },
  OrderSales: {
    fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    top: 10,
    color: '#11182A',
  },
  OrderUnit: {
    fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'left',
    textAlignVertical: 'center',
    top: 10,
    color: '#11182A',
    width:170, 
  },
  OrderReceiptNote: {
    width:170, 
    textAlign:'left', 
    right:15,
    lineHeight: 20, 
    top: 10, 
    fontSize: 15, 
    fontFamily: 'Plus Jakarta Sans', 
    fontWeight: 600,
    fontStyle: 'normal', 
    color: '#11182A',
},
  imageSize: {
    width: 60,
    height: 60,
    left:15,
  },
})
export default Dashboard