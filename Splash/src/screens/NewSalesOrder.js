import { View,  SafeAreaView, Text, ScrollView, StyleSheet,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FormInput from '../components/FormInput';
import FormDetails from '../components/FormDetails';
import AccordionList from '../components/AccodianList';
import DividerHeader from '../components/DividerHeader';
import DropDown from '../components/DropDown';
import TextArea from '../components/TextArea';
const NewSalesOrder = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#ffffff'}}>
        <ScrollView>
            <View style={{flex:1, marginHorizontal: 20}}>
                <FormInput label="Sales Order Number"/>
                <FormInput label="Date"/>
                <FormInput label="Customer"/>
                <View style={{ flex: 1 }}>
                    <FormDetails />
                </View>
                <View style={{ paddingTop: 70, }}>
                <AccordionList />

                </View>
                
              

                <View style={styles.HeadDividerFullWidth}>
                    <DividerHeader label="Other Details" />
                    <View style={{marginHorizontal: 20, paddingBottom:30}}>
                        <FormInput label="Expected Date Of Delivery"/>
                        <FormInput label="Payment Terms"/>
                        <FormInput label="Due Date"/>
                        <FormInput label="Fright Charges Paid by"/>
                    </View>
                    
                </View>

                <View style={styles.HeadDividerFullWidth}>
                  <DividerHeader label="Transporter Details"/>
                  <View style={{paddingTop: 20, paddingBottom:20, marginHorizontal: 20}}>
                      <DropDown label="Party Type" />
                  </View>
                   
                </View>

                <View style={styles.HeadDividerFullWidth}>
                    <DividerHeader label="Vehicle Details" />
                    <View style={{marginHorizontal: 20, paddingBottom:30}}>
                        <FormInput label="Vehicle Type"/>
                        <FormInput label="Vehicle Number"/>
                    </View>
                    
                </View>

                <View style={styles.HeadDividerFullWidth}>
                    <DividerHeader label="Comments" />
                    <View style={{marginHorizontal: 20, paddingTop: 20, paddingBottom:30}}>
                        <TextArea label="Comment"/>
                    </View>
                    
                </View>

                <View style={styles.buttonBackGroundWidth}>
                  <View style={styles.UpdateButtons}>
                      <TouchableOpacity
                        style={{
                          // backgroundColor: '#4CAF50',
                          padding: 10,
                          marginTop: 10,
                        }}
                      >
                        <Text style={{ color: '#FF7176' }}>Exit</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FF7176',
                          padding: 10,
                          marginTop: 10,
                          left:10,
                          width:98,
                          height:37,
                          borderRadius:4,
                        }}
                      >
                        <Text style={styles.buttonText}>Submit</Text>
                      </TouchableOpacity>
                  </View>
                    
                </View>
                
                
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  
  HeadDividerFullWidth: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F9F9F9',
    backgroundColor: '#F9F9F9',
    // top: 30,
    
    marginVertical:20
    
    
  },
  buttonBackGroundWidth: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F9F9F9',
    // backgroundColor: '#ddd',
    // top: 30,
    
    marginVertical:20
    
    
  },
  buttonText: {
    fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 19,
    color: '#ffffff',
    textAlign:'center'
},
UpdateButtons: {
  flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  //   paddingVertical: 20,
  //   paddingHorizontal: 20,
    // backgroundColor: '#ddd',
  //   padding:50,
  //   borderWidth:1,
  paddingBottom: 20,
  
},
 
 
  
})
  
export default NewSalesOrder