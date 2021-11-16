import React,{useState} from "react";
import {Text,View,StyleSheet,TouchableOpacity,Image,SafeAreaView} from 'react-native';
import {Card,Button,ProgressBar} from 'react-native-paper';

const Labour3 = ({navigation})=>{
    const [defaultRating, setDefaultRating] = useState(4);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    const CustomRatingBar = () => {
        return (
          <View style={styles.customRatingBarStyle}>
            {maxRating.map((item, key) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={item}
                  onPress={() => setDefaultRating(item)}>
                  <Image
                    style={styles.starImageStyle}
                    source={
                      item <= defaultRating
                        ? {uri: starImageFilled}
                        : {uri: starImageCorner}
                    }
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        );
      };
    
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
          <Card style={styles.card}>
                <Text style={styles.heading}>Labour 3</Text>
                <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.</Text>
                <Text style={styles.text2}>Quantity   -  25 Hour</Text>
                <Text style={styles.text3}>Start Date -  11-10-2021</Text>
                <Text style={styles.text4}>End Date   -  21-10-2021</Text> 
                <Text style={styles.text5}>Progress</Text>
                <ProgressBar style={{top:50,height:10,borderRadius:10}} progress={0.55} color="#66CDAA"/>
                <Text style={styles.text6}>Feedback</Text>
                <CustomRatingBar/>
                <Button style={styles.btn} onPress={()=>{navigation.navigate('Labour')}}>APPROVE</Button>
            </Card>
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        padding:10,
        margin:30,
        width:300,
        height:400
    },
    heading:{
        fontWeight:'bold',
        fontSize:15
    },
    text1:{
        fontSize:15
    },
    text2:{
        fontSize:15,
        top:20
    },
    text3:{
        fontSize:15,
        top:20
    },
    text4:{
        fontSize:15,
        top:20
    },
    text5:{
        fontSize:15,
        fontWeight:'bold',
        top:40
    },
    text6:{
        fontSize:15,
        fontWeight:'bold',
        top:70
    },
    myStarStyle: {
        top:70,
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
      },
      myEmptyStarStyle: {
        color: 'white',
      },
    btn:{
        width:270,
        top:70,
        backgroundColor:'#66CDAA'
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
      },
      starImageStyle: {
        width: 30,
        height: 30,
        top:50,
        right:60,
        resizeMode: 'cover',
      }
});

    export default Labour3;