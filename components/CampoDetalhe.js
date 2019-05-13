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
                    <Text style={{...titleStyle, fontSize:24}}>{this.props.first + ' ' +this.props.last}</Text>
                </View>
                <View style={styles.containerDados}>

                    <Text style={styles.textDados}>Email: {this.props.email}</Text>

                    <Text style={styles.textDados}>Endereço: {this.props.endereco}</Text>

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
        justifyContent:'space-around',
        paddingTop: 30,
        height:200,
        
    },
    imageDetalhe: {
        width: 175,
        height: 175,
        borderRadius: 82
    },
    containerDados:{
        flex:1,
        flexWrap:'wrap',
        paddingHorizontal:20
    },
    textDados:{
        fontSize:18,
        textAlign:'justify'
        
    }
});
