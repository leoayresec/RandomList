import React from "react";
import { createStackNavigator, createAppContainer} from 'react-navigation';
import DetalhePessoa from '../screens/DetalhePessoa'
import Home from '../screens/Home'

const AppNavigator = createStackNavigator({
   
    Home:{
        screen:Home,
        navigationOptions: () => ({
            header: null
        })
    },
    DetalhePessoa:{
        screen:DetalhePessoa,
        navigationOptions: () => ({
            title: 'Detalhes'
        })
   },

},
    {
        initialRouteName: 'Home'
    }

);export default createAppContainer(AppNavigator);