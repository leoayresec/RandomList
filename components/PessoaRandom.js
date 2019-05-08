//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import {
    primaryColor,
    textIcons,
    titleStyle,
    normalText,
    subTitles,
    darkPrimaryColor
} from '../config/styles';
import ImagePessoa from './ImagePessoa';

// create a component
export default class PessoaRandom extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <ImagePessoa uri={this.props.uri} />

                </View>
                <View style={styles.lightText}>
                    <Text style={subTitles}>
                        {this.props.first + ' ' + this.props.last + ', ' +this.props.age}
                    </Text>

                    <Text style={{ ...titleStyle, textAlign: "left" }}>
                        {this.props.email}
                    </Text>

                    <Text style={styles.normalText}>
                        {this.props.gender + ', '+ this.props.phone}
                    </Text>

                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        flex: 1,
        margin: 3,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: primaryColor,
        alignItems: "center",
        backgroundColor: 'gray',
        zIndex: -1

    },
    list: {
        paddingVertical: 5,
        margin: 3,
        flex: 1,
        flexDirection: "row",
        backgroundColor: darkPrimaryColor,
        justifyContent: "flex-start",
        alignItems: "center",
        zIndex: -1
    },
    containerImage: {
        width: 50,
        height: 50,
        margin: 6
    },
    lightText: {
        textAlign: 'center',
        color: "#f7f7f7",
        paddingLeft: 15,
        fontSize: 12
    },
});
