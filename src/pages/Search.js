import React , {useState, useEffect}  from 'react'
import { View, Text ,TextInput,TouchableOpacity,Alert , FlatList,StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
let db = openDatabase({name: 'aofQ.db', createFromLocation: 1});
import { BannerAd, BannerAdSize} from '@react-native-firebase/admob';

const BannerCode = (Platform.OS == 'android') ? 'ca-app-pub-8483958074876075/3179944916' : 'ca-app-pub-8483958074876075/8615888829';

 const Search =({route,navigation}) => {

  const [quesions,setQuestions]= useState([]);
  const [qText,setqText]= useState();
  const getQuestion = () =>{
    if(qText!=undefined)
    {
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM questions WHERE questionname LIKE ?', [`%${qText}%`], (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i){
              temp.push(results.rows.item(i));
            }
            setQuestions(temp);    
          });
        });
      
    }
    else{
      Alert.alert(
        "Soru Başlığı",
        "Searh için lütfen bir şeyler yazın",
      [
        { text: "Tamam" }
      ],
      { cancelable: false }
      );
    }
  }


  return (
    <View>
      <View style={styles.searchBar}>
        <TextInput style={{flex:3,flexDirection: 'row'}}
            placeholder="Search"
            onChangeText={text => {setqText(text);}}
          />
        <TouchableOpacity onPress={getQuestion} style={styles.button}><MaterialCommunityIcons name="card-search"  size={45} /></TouchableOpacity> 
              
      </View>

      <FlatList
          data ={quesions}
          keyExtractor = { (item,index) => index.toString() }
          renderItem={({item}) =>  
            <View>
              <TouchableOpacity onPress={() => {navigation.navigate('questionsscreen', {question: item})}}  >
                <Text style={styles.itemContent}> {item.questionname}</Text>
              </TouchableOpacity>
            </View>
          }
        />

        <View style={{margintop:15,justifyContent:'flex-end'}}>     
           <BannerAd
              unitId={BannerCode}
              size={BannerAdSize.FULL_BANNER}
              onAdFailedToLoad={(e)=>console.log(e)}
              requestOptions={{
              requestNonPersonalizedAdsOnly: true,
              }}
            />  
        </View>
        
    </View>
  )
}

const styles= StyleSheet.create({
  searchBar:{
    padding:5,
    borderBottomWidth: 1,
    borderBottomColor:'#333',
    flexDirection: 'row'
  },
  itemContent:{
    borderBottomWidth: 1,
    marginTop:3,
    padding:10,
    borderBottomColor:'#333'
  }
})



export default Search;
