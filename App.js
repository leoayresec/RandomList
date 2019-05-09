import React from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import {
  primaryColor,
  textIcons,
  titleStyle,
  normalText,
  subTitles,
  fonts,
} from './config/styles';
import PessoaRandom from './components/PessoaRandom';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      pessoas: [],
      isFetching: false,
    };
  }
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=500')
         .then(response => {
           this.setState({pessoas: response.data.results })
         })
         .catch(error => {
             console.log(error)
         })
    }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.pessoas}
          renderItem={({ item }) => (
            <PessoaRandom
              first={item.name.first}
              last={item.name.last}
              gender={item.gender}
              age={item.dob.age}
              uri={item.picture.thumbnail}
              email={item.email}
              phone ={item.phone}
              onPress={()=> Alert.alert(item.name.first)}
            />
      
          )}

        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    position: "relative"
  },
});
