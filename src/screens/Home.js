import React,{useEffect,useState} from 'react';
import {Text,View,StyleSheet,Alert,FlatList,SafeAreaView} from 'react-native';
import {Card,FAB} from 'react-native-paper';


const Home = ({navigation})=>{
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
            <SafeAreaView>
            <View style={styles.container}>
            <View style={styles.input}>
                <TextInput 
                placeholder='search'
                />
                </View>
                <Card style={styles.card} onPress={()=>{navigation.navigate('Home',{item})}}>
                    <Text style={styles.text}>{item.Name}</Text>
                    <Text style={styles.text1}>{item.Quantity}</Text>
                </Card>
            </View>
            </SafeAreaView>
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
    input:{
        top:300,
        width:300,
        height:40,
        padding:1,
        margin:10,
        borderRadius:12,
        backgroundColor:'#D3D3D3',
        borderWidth:1,
        borderColor:'black'
    },
    card:{
        top:320,
        padding:15,
        width:300,
        height:70,
        borderRadius:12,
        backgroundColor:'#66CDAA'
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
    },
    text1:{
        fontSize:15,
        color:'white'
    }
});

export default Home;