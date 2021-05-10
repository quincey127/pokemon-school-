import React from 'react';
import { StyleSheet, Text, View,Image,  TouchableOpacity } from 'react-native';
export default class UmbreonScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.screenText}>space Time!</Text></View>
        )
    }
  
}
const styles=StyleSheet.create({
container:{
    backgroundColor:'Black',
    flex:1

}, 
screenText:{
color:'yellow',
justifyContent:'center',
alignItems:'center',
fontSize:35,
fontWeight:'bold'



}
})