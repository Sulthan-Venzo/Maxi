import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const DropDown = (props) => {
    const [selected, setSelected] = React.useState("");

    const data = [
        {key:'1', value:'Mobiles', disabled:false},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:false},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]

    const {label} = props
  return (
    <View>
    <Text style={styles.headingText}>{label}</Text>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        placeholder=' '
        boxStyles={{borderWidth:1, backgroundColor:'#ffffff'}}
        dropdownStyles={{backgroundColor:'#ffffff'}}
        inputStyles={{fontFamily: 'Plus Jakarta Sans', fontSize:16, color: '#11182A'}}
        dropdownTextStyles={{ fontFamily: 'Plus Jakarta Sans', fontSize:17,  color: '#11182A'}}
        
        
    />
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 20,
        color: '#000000',
        paddingBottom:2,
    }
})
export default DropDown