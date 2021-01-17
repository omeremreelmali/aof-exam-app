import React from 'react'
import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import { BannerAd, BannerAdSize} from '@react-native-firebase/admob';

const BannerCode = (Platform.OS == 'android') ? 'ca-app-pub-8483958074876075/3179944916' : 'ca-app-pub-8483958074876075/8615888829';

const  questionsscreen=({route}) => {
  
  return (
    <ImageBackground source={require('./assets/background1.jpg')} style={styles.container}>
      <Text style={styles.questionStyle}>{route.params.question.questionname}</Text>
      <Text style={[route.params.question.aoptionname==route.params.question.answerbame ? styles.trueOption : styles.falseOption]}>{route.params.question.aoptionname}</Text>
      <Text style={[route.params.question.boptionname==route.params.question.answerbame ? styles.trueOption : styles.falseOption]}>{route.params.question.boptionname}</Text>
      <Text style={[route.params.question.coptionname==route.params.question.answerbame ? styles.trueOption : styles.falseOption]}>{route.params.question.coptionname}</Text>
      <Text style={[route.params.question.doptionname==route.params.question.answerbame ? styles.trueOption : styles.falseOption]}>{route.params.question.doptionname}</Text>
      <Text style={[route.params.question.eoptionname==route.params.question.answerbame ? styles.trueOption : styles.falseOption]}>{route.params.question.eoptionname}</Text>
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
    </ImageBackground>
  )
}



const styles= StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, backgroundColor: '#fff'},
  questionStyle:{
    color:'white',
    textAlign:'center',
    
  },
  trueOption:{
    color:'green',
    textAlign:'center'
  },
  falseOption:{
    color:'red',
    textAlign:'center'
  }
})



export default questionsscreen;
