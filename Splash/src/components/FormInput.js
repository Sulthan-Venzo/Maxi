import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const FormInput = (props) => {
    const {label} = props
  return (
    
    <View style={{paddingTop:25}}>
     <Text style={styles.SalesText}>{label}</Text>
                    <TextInput
                        {...props} 
                        style={styles.input}
                    /> 
    </View>
    
  )
}
const styles = StyleSheet.create({
    input: {
    //   height: 40,
    //   margin: 12,
    //   borderWidth: 1,
    // width: 368,
height: 45,
top:3,



backgroundColor: '#FFFFFF',
borderWidth: 1,
borderStyle: 'solid',
borderColor:'#000',
borderRadius: 4,
      
    },
    SalesText:{
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 20,
        color: '#000000',
    }
  });
export default FormInput