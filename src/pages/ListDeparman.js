import React, { Component } from 'react';
import { View, Text ,Button, FlatList,StyleSheet} from 'react-native';

export default class ListDeparman extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
          <FlatList
         data={[
             {key:'matematik', id:1},
             {key:'sosyal'},
             {key:'fen'},
             {key:'tarih'},
             {key:'açı'}
         ]}
        renderItem={({ item, index}) => <Text style={styles.itemContent}> {item.key}</Text>}
        />
        
      </View>
    );
  }
}
const styles =StyleSheet.create({
    itemContent:{
      borderBottomWidth: 1,
      marginTop:3,
      padding:10,
      borderBottomColor:'#333'
    },
    
})