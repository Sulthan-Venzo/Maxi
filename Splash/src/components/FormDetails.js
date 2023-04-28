import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FormDetails = () => {
  return (
            <View style={styles.HeadDividerFullWidth}>
                        <View style={styles.HeadDividerColor}></View>
                        <View style={styles.DetailsView}>
                            <Text style={styles.HeadText}>Name</Text>
                            <Text style={styles.SalesPersonDetails}>Vishnu</Text>
                        </View>
                        <View style={styles.DetailsView}>
                            <Text style={styles.HeadText}>Address</Text>
                            <Text style={styles.SalesPersonDetails}>21, Sabari Street, Nesapakkam, K.K. Nagar West, Chennai.</Text>
                        </View>
                        <View style={styles.DetailsView}>
                            <Text style={styles.HeadText}>Country</Text>
                            <Text style={styles.SalesPersonDetails}>India</Text>
                        </View>
                        <View style={styles.DetailsView}>
                            <Text style={styles.HeadText}>State</Text>
                            <Text style={styles.SalesPersonDetails}>Tamil Nadu</Text>
                        </View>
                        <View style={styles.DetailsView}>
                            <Text style={styles.HeadText}>PinCode</Text>
                            <Text style={styles.SalesPersonDetails}>600 078</Text>
                        </View>
                        <View style={styles.DetailsView}>
                            <Text style={styles.HeadText}>GSTIN</Text>
                            <Text style={styles.SalesPersonDetails}>987656783424567</Text>
                        </View>
                        <View style={styles.DetailsView}>
                            <Text style={styles.HeadText}>Contact Person</Text>
                            <Text style={styles.SalesPersonDetails}>Vishnu</Text>
                        </View>
                        <View style={styles.DetailsView}>
                            <Text style={styles.HeadText}>Contact Number</Text>
                            <Text style={styles.SalesPersonDetails}>+91 98776 54324</Text>
                        </View>
        </View>
  )
}

const styles = StyleSheet.create({
    HeadText: {
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 16,
        color: '#5E5E5E',
        left:12,
        width:170,
    },
    SalesPersonDetails: {
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 19,
        color: '#11182A',
        // padding:15,
        // left:10,,
        right: 10,
        // flexGrow: 1,
        // flexShrink: 1,
        flexWrap: 'nowrap',
        width:150, 
      },
      DetailsView:{
        flexDirection:'row',
        padding:15,
      },
      HeadDividerColor: {
        backgroundColor: '#11182A',
        // width: 368,
        padding:20,
        // borderRadius:4,
        borderTopLeftRadius:4,
        borderTopRightRadius:4,
        // borderBottomStartRadius:0,
               
      },
      HeadDividerFullWidth: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#F9F9F9',
        backgroundColor: '#F9F9F9',
        top: 30,
      },
      
  });
export default FormDetails