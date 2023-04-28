import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SalesOrder from '../screens/SalesOrder';
import ProductionUnit from '../screens/ProductionUnit';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import GoodReceiptNote from '../screens/GoodReceiptNote';
import NewSalesOrder from '../screens/NewSalesOrder';


const Stack = createNativeStackNavigator();


const ScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: true,
        swipeEnabled: true,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        
        headerStyle: {
          backgroundColor: '#ffffff'
        },
        headerTintColor: {
            color: '#000000',
            
        },
        headerTitleStyle: {
          fontSize: 22,
          color: '#FF7176',
          lineHeight: 28,
        }
      }}>
          <Stack.Screen name=" " component={Login} options={{ header: () => null }} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Sales Order" component={SalesOrder} />
          <Stack.Screen name="Production Unit" component={ProductionUnit} />
          <Stack.Screen name="Good Receipt Note" component={GoodReceiptNote} />
          <Stack.Screen name="New Sales Order" component={NewSalesOrder} />
      </Stack.Navigator>
  )
}

export default ScreenNavigation