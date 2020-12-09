import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { openDatabase } from 'react-native-sqlite-storage';
let db = openDatabase({name: 'aof_db.db', createFromLocation: 1});

export default function Home() {
  //data çekilirken kullanılacak state'ler
  const [lessons, setLessons] = useState([]);
  const [department, setDepartment] = useState([]);

  useEffect(() => {

     db.transaction((tx) => {
      tx.executeSql('SELECT * FROM departments', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
        temp.push(results.rows.item(i));
          setDepartment(temp);

          /*department.forEach(element => {
            console.log(element);
          });*/
      });
    });
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.pickerView}>
        <Picker style={styles.pickerStyle}>
          { department.map((item)=>{
            return(<Picker.Item label={item.departmentname} />)
          })}
        </Picker>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, backgroundColor: '#fff'},
  pickerView: {
    margin: 20,
    borderRadius: 10,
    margin: 20,
    overflow: 'hidden',
  },
  pickerStyle: {
    backgroundColor: '#000',
    color: 'white'
  },
  pickerView: {
    margin: 20,
    borderRadius: 10,
    margin: 20,
    overflow: 'hidden',
  },
});
