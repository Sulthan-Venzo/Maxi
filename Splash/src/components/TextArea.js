import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const TextArea = (props) => {
    const {label} = props
  return (
    <View>
    <Text style={styles.SalesText}>{label}</Text>
       <View style={styles.commentsBox}>
            <TextInput
                editable
                multiline
                numberOfLines={10} 
                style={styles.commentsText}
            />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    commentsText:{
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        // fontWeight: 600,
        fontSize: 16,
        lineHeight: 20,
        color: '#000000',
        padding:10,
        backgroundColor:'#ffffff'
    },
    commentsBox:{
        borderColor: '#E4E4E4',
        borderWidth: 1,
        paddingTop:3,
    },
    SalesText:{
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 20,
        color: '#000000',
        
    }
})
export default TextArea