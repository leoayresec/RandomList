//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { primaryColor, titleStyle } from '../config/styles'

// create a component
export default class CampoDetalhe extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image source={{
                        uri: this.props.uri,
                    }}
                        style={styles.imageDetalhe}
                    />
                    <Text style={titleStyle}>{this.props.first + ' ' +this.props.last}</Text>
                </View>
                <View style={styles.containerDados}>

                    <Text>Email: {this.props.email}</Text>

                    <Text>Endereço: {this.props.endereco}</Text>

                </View>
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
    imageView: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    imageDetalhe: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    containerDados:{
        flex:1,
        alignItems:'center'
    }
});
