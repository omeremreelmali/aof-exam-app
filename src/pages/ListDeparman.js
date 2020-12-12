import React, { Component } from 'react';
import { View, Text ,TouchableOpacity, FlatList,StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

let db = openDatabase({name: 'aofQ.db', createFromLocation: 1});
import Listlessons from './Listlessons';
export default class ListDeparman extends Component {
  constructor(props,navigation) {
    super(props);

    this.state = {
      department: []
    };
  }

  render() {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM departments WHERE downloaded=1', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
        temp.push(results.rows.item(i));
          this.setState({department:temp});

      });
    });
    return (
      <View>
          <FlatList
         data={this.state.department}
        renderItem={({ item, index}) => 
        <View>
          <TouchableOpacity onPress={ ()=>{navigation.navigate('Listlessons')} }>
            <Text style={styles.itemContent}> {item.departmentname}</Text>
          </TouchableOpacity>
        </View>
        }
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