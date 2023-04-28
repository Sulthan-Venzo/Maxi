import { Text, View } from 'react-native'
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SalesOrder from '../screens/SalesOrder';
import ProductionUnit from '../screens/ProductionUnit';
import Dashboard from '../screens/Dashboard';

const Drawer = createDrawerNavigator();
export class Header extends Component {
  render() {
    return (
        <Drawer.Navigator
        initialRouteName="DashBoard"
        drawerPosition='left'
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor='#00000090'
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250
        }}
        screenOptions={{
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
            fontSize: 25,
            fontWeight: 'bold',
            color: '#FF7176'
          }
        }}
      >
       <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="SalesOrder"
          component={SalesOrder}
          options={{
            title: 'SalesOrder Title',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="ProductionUnit"
          component={ProductionUnit}
          options={{
            title: 'ProductionUnit Title',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    )
  }
}

export default Header