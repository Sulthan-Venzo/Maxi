import { View, Text, Image, TextInput, StyleSheet, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function Login({ navigation }) {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const submit = () => {
      //console.warn('hi');
      navigation.replace('Dashboard');
    }
  return (
    <SafeAreaView style={{backgroundColor:'#CECECE', height:'100%'}}>
      <View> 
        <View style={{marginTop: 100, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Image source={require('../assets/images/logo.png')} />
        </View>
        <View>
          <Text style={styles.inputSignIn}>Sign In</Text>
            <View style={styles.textUnderLine}></View>
        </View>
      
        <View style={{marginHorizontal: 30, top: 20 }}>
          <Text style={styles.inputLabel}>Employee ID</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="default"
              />
      
          <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="default"
              />
        <View style={{marginHorizontal: 12, top:20 }}>
          <Button title='Sign In'  style={styles.loginButton} onPress={submit} color='#EB1E26' />
        </View>

        <View style={{marginHorizontal: 12, top:20 }}>
            <Text style={styles.agreeLabel}>By Signing in you agree to the Terms of Service and Privacy Policy</Text>
        </View>
      
      </View>
     
     
      </View>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      backgroundColor: '#f8f8ff',
      paddingHorizontal: 15,
      borderRadius: 5,
      borderColor:'#CDCDCD',
      borderStyle:'solid',
    },
    inputSignIn:{
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 35,
        lineHeight: 44,
        paddingTop: 20,
        paddingBottom:20,
        /* identical to box height */
        color: '#0D1A2E',
        left: 42,
        // textDecorationLine: 'underline',
        // textDecorationColor: 'red',
        // textDecorationStyle
    },
    inputLabel:{
        width: 84,
        height: 18,
        left:12,
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 18,
        color: '#0D1A2E',
    },
    loginButton: {
      borderRadius: 5,
      top: 200,
    },
    agreeLabel:{
        top:20,
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 17,
        color: '#999999',
    },
    textUnderLine:{
        borderBottomWidth:4,
        borderBottomColor:'red',
        width: 60,
        marginHorizontal: 30,
        left:12,
        bottom:15,
        borderBottomStartRadius: 3.5,
        borderBottomEndRadius: 3.5,   
    },
    
  });