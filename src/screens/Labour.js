import React from "react";
import {Text,View,StyleSheet,TextInput,SafeAreaView} from 'react-native';
import {Card,Button} from 'react-native-paper';

const Labours=({navigation})=>{
    return(
        <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.heading}>Labours</Text>
            <View style={styles.input}>
                <TextInput 
                placeholder='search'
                />
                </View>
            <Card style={styles.card1} onPress={()=>{navigation.navigate('Labour1')}}>
                <Text style={styles.text}>Labour 1</Text>
                <Text style={styles.text1}>Quantity - 25 Hour</Text>
            </Card>
            <Card style={styles.card2} onPress={()=>{navigation.navigate('Labour2')}}>
                <Text style={styles.text}>Labour 2</Text>
                <Text style={styles.text1}>Quantity - 25 Hour</Text>
            </Card>
            <Card style={styles.card3} onPress={()=>{navigation.navigate('Labour3')}}>
                <Text style={styles.text}>Labour 3</Text>
                <Text style={styles.text1}>Quantity - 25 Hour</Text>
            </Card>
            <Card style={styles.card4} onPress={()=>{navigation.navigate('Labour4')}}>
                <Text style={styles.text}>Labour 4</Text>
                <Text style={styles.text1}>Quantity - 25 Hour</Text>
            </Card>
            <Card style={styles.card5} onPress={()=>{navigation.navigate('Labour5')}}>
                <Text style={styles.text}>Labour 5</Text>
                <Text style={styles.text1}>Quantity - 25 Hour</Text>
            </Card>
            <Card style={styles.card6} onPress={()=>{navigation.navigate('Labour6')}}>
                <Text style={styles.text}>Labour 6</Text>
                <Text style={styles.text1}>Quantity - 25 Hour</Text>
            </Card>
            <Card style={styles.card7} onPress={()=>{navigation.navigate('Labour7')}}>
                <Text style={styles.text}>Labour 7</Text>
                <Text style={styles.text1}>Quantity - 25 Hour</Text>
            </Card>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        textAlign:'center',
        top:280
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
    card1:{
        top:320,
        padding:15,
        width:300,
        height:70,
        borderRadius:12,
        backgroundColor:'#66CDAA'
    },
    card2:{
        top:330,
        padding:15,
        width:300,
        height:70,
        borderRadius:12,
        backgroundColor:'#66CDAA'
    },
    card3:{
        top:340,
        padding:15,
        width:300,
        height:70,
        borderRadius:12,
        backgroundColor:'#66CDAA'
    },
    card4:{
        top:350,
        padding:15,
        width:300,
        height:70,
        borderRadius:12,
        backgroundColor:'#66CDAA'
    },
    card5:{
        top:360,
        padding:15,
        width:300,
        height:70,
        borderRadius:12,
        backgroundColor:'#66CDAA'
    },
    card6:{
        top:370,
        padding:15,
        width:300,
        height:70,
        borderRadius:12,
        backgroundColor:'#66CDAA'
    },
    card7:{
        top:380,
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
    },
});

export default Labours;

