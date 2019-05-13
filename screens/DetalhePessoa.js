//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {primaryColor} from '../config/styles';
import CampoDetalhe from '../components/CampoDetalhe';

// create a component
export default class DetalhePessoa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {

        const params = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
             <CampoDetalhe
             uri={params.picture.large}
             email={params.email}
             first={params.name.first}
             last={params.name.last}
             endereco={params.location.street + ', ' + params.location.city	+ ', '+ params.location.state}
             />

            
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
        
    },
});

