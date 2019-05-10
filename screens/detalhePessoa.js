//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {primaryColor} from '../config/styles'

// create a component
export default class detalhePessoa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {

        const params = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <View style={{flex:1, alignItems:'center', paddingTop:30}}>
                    <Image source={{
                        uri: params.picture.large,
                    }}
                        style={{ width: 150, height: 150, borderRadius: 75 }}
                        resizeMode={'contain'} />
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
});

