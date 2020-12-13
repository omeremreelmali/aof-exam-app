import React, { Component } from 'react';
import { View, Text,FlatList,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Listlessons= props =>{
 
  console.log(props);
  return (
    <View >
    
          <FlatList
          data={[
              {key:'matematik'},
              {key:'sosyal'},
              {key:'fen'},
              {key:'tarih'},
              {key:'açı'}
          ]}
          renderItem={({ item, index}) => <Text style={styles.itemContent}> {item.key}</Text>}
          />
    </View>
  )
}

const styles =StyleSheet.create({
    itemContent:{
      borderBottomWidth: 1,
      marginTop:3,
      padding:10,
      borderBottomColor:'#333'
    },
    
})
export default Listlessons;