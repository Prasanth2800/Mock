import React,{useEffect,useState} from 'react';
import {Text,View,StyleSheet, Alert,TouchableOpacity,Image,FlatList} from 'react-native';
import {Card,Button,TextInput,ProgressBar} from 'react-native-paper';

const details = ({navigation})=>{
    const [defaultRating, setDefaultRating] = useState(3);
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
    const [data,setData]=useState('');
    const [loading,setLoading]=useState(true);
    const fetchData=()=>{
        fetch("http://192.168.4.247:5000/lab")
        .then(res=>res.json())
        .then(results=>{
            setData(results)
            setLoading(false)
        }).catch(err=>{
            Alert.alert('Something went wrong')
        })
    }
    useEffect(()=>{
        fetchData()
    })
    const renderList=((item)=>{
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.head1}>{item.Name}</Text>
                <Text style={styles.text}>{item.description}</Text>
                <Text style={styles.text1}>{item.quantity}</Text>
                <Text style={styles.text2}>{item.startDate}</Text>
                <Text style={styles.text3}>{item.endDate}</Text>
                <Text style={styles.head2}>Progress</Text>
                <ProgressBar style={{top:100,height:10,borderRadius:10}} progress={0.55} color="#66CDAA"/>
                <Text style={styles.head3}>Feedback</Text>
                <CustomRatingBar/>
                <Button style={styles.btn} mode="contained" onPress={()=>{navigation.navigate('First')}}>
                <Text>APPROVE</Text>
            </Button>
            </Card>
        </View>
    )
})
return(
  <View style={{flex:1}}>
      <FlatList
      data={data}
      renderItem={({item})=>{
          return renderList(item)
      }}
      keyExtractor={item=>item._id}
      onRefresh={()=>fetchData()}
      refreshing={loading}
      />
  </View>
)
}    

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        width:350,
        height:400,
        margin:30,
        padding:10
    },
    head1:{
      fontWeight:'bold',
      fontSize:15
  },
  text:{
      fontSize:15
  },
  text1:{
      fontSize:15,
      top:20
  },
  text2:{
      fontSize:15,
      top:20
  },
  text3:{
      fontSize:15,
      top:20
  },
  head2:{
      fontSize:18,
      fontWeight:'bold',
      top:90
  },
  head3:{
      fontSize:18,
      fontWeight:'bold',
      top:115
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
        top:120,
        left:30,
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
        top:90,
        right:90,
        resizeMode: 'cover',
      }
});

export default details;