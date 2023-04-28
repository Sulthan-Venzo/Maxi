import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DividerHeader = (props) => {
    const {label} = props
  return (
    <View style={styles.HeadDividerColor}>
        <Text style={styles.HeadDividerTitle}>{label}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    HeadDividerColor: {
      backgroundColor: '#11182A',
      // width: 368,
      padding:20,
      // borderRadius:4,
      borderTopLeftRadius:4,
      borderTopRightRadius:4,
      // borderBottomStartRadius:0,
             
    },
  
    HeadDividerTitle: {
      fontFamily: 'Plus Jakarta Sans',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 16,
      textAlign: 'left',
      color:'#fff',
    },
    
  })
    
export default DividerHeader