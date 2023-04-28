import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';

const AccordionList = () => {
  const [listData, setListData] = useState([
    {
      id: 1,
      title: 'Item 1',
      content: 'Content of Item 1',
      ProductName: 'Cooker',
      ProductType: 'Semi-Finished',
      MeasureMentUnit: 'cm',
      Quantity: 12,
      QuantityReceived: 13,

      expanded: false,
    },
    {
      id: 2,
      title: 'Item 2',
      content: 'Content of Item 2',
      ProductName: 'Cooker',
      ProductType: 'Semi-Finished',
      MeasureMentUnit: 'cm',
      Quantity: 12,
      QuantityReceived: 13,
      expanded: false,
    },
    {
      id: 3,
      title: 'Item 3',
      content: 'Content of Item 3',
      ProductName: 'Cooker',
      ProductType: 'Semi-Finished',
      MeasureMentUnit: 'cm',
      Quantity: 12,
      QuantityReceived: 13,
      expanded: false,
    },
  ]);

  const toggleAccordion = (index) => {
    setListData(
      listData.map((item, i) =>
        i === index ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  const getArrowImage = (expanded) =>
    expanded
      ? require('../assets/images/png/ArrowUp.png')
      : require('../assets/images/png/ArrowDown.png');

  const renderItem = ({ item, index }) => {
    const { title, content, expanded, ProductName, ProductType,MeasureMentUnit,Quantity,QuantityReceived  } = item;

    return (
        
      <Pressable onPress={() => toggleAccordion(index)}>
        <View style={styles.AccordianHeader}>
        <Text style={styles.ListText}>Product Name</Text>
        <Text style={styles.ListTextCategory}>{ProductName}</Text>
          <Image
            source={getArrowImage(expanded)}
            style={{ width: 20, height: 20}}
          />
          
        </View>

        {expanded && (
          <View>
            <View style={styles.AccordianList}>
                <Text style={styles.ListText}>Product Type</Text>
                <Text style={styles.ListTextCategory}>{ProductType}</Text> 
                       
            </View>
            <View style={styles.AccordianList}>
                <Text style={styles.ListText}>MeasureMent Unit</Text>
                <Text style={styles.ListTextCategory}>{MeasureMentUnit}</Text>
                          
            </View>
            <View style={styles.AccordianList}>
                <Text style={styles.ListText}>Quantity</Text>
                <Text style={styles.ListTextCategory}>{Quantity}</Text> 
                           
            </View>
            <View style={styles.AccordianList}>
                <Text style={styles.ListText}>Quantity Received</Text>
                <Text style={styles.ListTextCategory}>{QuantityReceived}</Text>
                          
            </View>
            <View style={styles.UpdateButtons}>
            <TouchableOpacity
              style={{
                // backgroundColor: '#4CAF50',
                padding: 10,
                marginTop: 10,
              }}
            >
              <Text style={{ color: '#FF7176' }}>Edit</Text>
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
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            </View>
           
          </View>
        )}
      </Pressable>
    );
  };

  return (
    <View>
    <View style={styles.HeadDividerColor}></View>
      {listData.map((item, index) => (
        <View key={item.id}>{renderItem({ item, index })}</View>
      ))}
      <View>
      <TouchableOpacity
              style={{
                
                backgroundColor: '#0D1A2E',
                padding: 10,
                marginTop: 15,
                left:130,
                width:98,
                height:37,
                borderRadius:4,
                
              }}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
    AccordianHeader: {
        flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: '#ddd',
          //padding:20,
          borderWidth:0.2, 
    },
    AccordianList: {
        flexDirection: 'row',
        //    justifyContent: 'flex-start',
          alignItems: 'center',
        //   paddingVertical: 20,
        //   paddingHorizontal: 20,
          backgroundColor: '#ddd',
          padding:20,
          
        //   borderWidth:1,
        
    },
    UpdateButtons: {
        flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        //   paddingVertical: 20,
        //   paddingHorizontal: 20,
          backgroundColor: '#ddd',
        //   padding:50,
        //   borderWidth:1,
        paddingBottom: 20,
        
    },
    ListText: {
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 15,
        lineHeight: 16,
        textAlign: 'left',
        width:160,
        color: '#5D5D5D',
    },
    ListTextCategory: {
        flex:1,
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 19,
        // textAlign: 'center',
        // paddingLeft: 70,
        color: '#11182A',
        // paddingRight: 70,
        //justifyContent: 'flex-start',
        // textAlign:'center',
        // alignContent:'flex-start'
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
    HeadDividerColor: {
        backgroundColor: '#11182A',
        // width: 368,
        padding:20,
        // borderRadius:4,
        borderTopLeftRadius:4,
        borderTopRightRadius:4,
        // borderBottomStartRadius:0,     
      },
})

export default AccordionList;