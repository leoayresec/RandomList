import React from "react";
import { createStackNavigator, createAppContainer} from 'react-navigation';
import detalhePessoa from '../screens/detalhePessoa'
import Home from '../screens/home'

const AppNavigator = createStackNavigator({
   
    Home:{
        screen:Home,
        navigationOptions: () => ({
            header: null
        })
    },
    detalhePessoa:{
        screen:detalhePessoa,
        navigationOptions: () => ({
            title: 'Detalhes'
        })
   },

},
    {
        initialRouteName: 'Home'
    }

);export default createAppContainer(AppNavigator);