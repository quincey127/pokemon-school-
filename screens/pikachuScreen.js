
import React from 'react';
import { StyleSheet, Text, View,Image,  TouchableOpacity } from 'react-native';
export default class PikachuScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.screenText}>Science Time!</Text></View>
        )
    }
  
}
const styles=StyleSheet.create({
container:{
    backgroundColor:'purple',
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