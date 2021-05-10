import React from 'react';
import { StyleSheet, Text, View,Image,  TouchableOpacity } from 'react-native';
export default class VaporeonScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.screenText}>Social Studies</Text></View>
        )
    }
  
}
const styles=StyleSheet.create({
container:{
    backgroundColor:'blue',
    flex:1

}, 
screenText:{
color:'red',
justifyContent:'center',
alignItems:'center',
fontSize:35,
fontWeight:'bold'



}
})