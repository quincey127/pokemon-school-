import React from 'react';
import { StyleSheet, Text, View,Image,  TouchableOpacity } from 'react-native';
export default class FlareonScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.screenText}>Reading Time!</Text></View>
        )
    }
  
}
const styles=StyleSheet.create({
container:{
    backgroundColor:'red',
    flex:1

}, 
screenText:{
color:'green',
justifyContent:'center',
alignItems:'center',
fontSize:35,
fontWeight:'bold'



}
})