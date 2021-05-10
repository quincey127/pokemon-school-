import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen'
import PikachuScreen from './screens/pikachuScreen'
import UmbreonScreen from './screens/umbreonScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
export default class App extends React.Component{
    render(){
        return(
            <View>
           <AppContainer/>
<AppContainera/>
</View>
        )
    }
}
var AppNavigator=createSwitchNavigator({
    WelcomeScreen:WelcomeScreen,
    PikachuScreen:PikachuScreen,
})
const AppContainer=createAppContainer(AppNavigator)

var AppNavigatora=createSwitchNavigator({
    WelcomeScreen:WelcomeScreen,
    UmbreonScreen:UmbreonScreen,
})
const AppContainera=createAppContainer(AppNavigatora)


