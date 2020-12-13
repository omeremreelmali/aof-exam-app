import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet,TouchableOpacity ,Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { openDatabase } from 'react-native-sqlite-storage';
import axios from "axios";
import { block } from 'react-native-reanimated';
let db = openDatabase({name: 'aofQ.db', createFromLocation: 1});

export default function Home() {
  const [lessons, setLessons] = useState([]);
  const [department, setDepartment] = useState([]);
  const [selectedDep,setSelectedDep] =useState([]);
  const updateSelectedDep = (item) => {
    setSelectedDep(item);
  }
  
  const onPress =  () => {
     db.transaction((tx) => {
      tx.executeSql('UPDATE departments SET downloaded=1 WHERE id=?', [selectedDep]);
    });
  }


  useEffect(() => {

     db.transaction((tx) => {
      tx.executeSql('SELECT * FROM departments WHERE downloaded=0', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
        temp.push(results.rows.item(i));
          setDepartment(temp);

      });
    });
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.pickerView}>
        <Picker 
        selectedValue = {selectedDep}
        onValueChange = {updateSelectedDep}
        style={styles.pickerStyle}>
          { department.map((item)=>{
            return(<Picker.Item value={item.id} label={item.departmentname} key={item.id} />)
          })}
        </Picker>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text>Bölüm Ekle</Text>
        </TouchableOpacity>

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
  button: {
    alignItems: "center",
    backgroundColor: "#ffe413",
    padding: 10
  },
  pickerView: {
    margin: 20,
    borderRadius: 10,
    margin: 20,
    overflow: 'hidden',
  },
});
