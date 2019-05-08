import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
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
           const pessoasRandom = response.data.results  
           this.setState({pessoas: pessoasRandom})
         })
         .catch(error => {
             console.log(error)
         })
    /*const url = 'https://randomuser.me/api/?results=5000';
    // The data we are going to send in our request
    // The parameters we are gonna pass to the fetch function
    let fetchData = {
      method: 'get',
      headers: new Headers()
    }
    fetch(url, fetchData)
      .then(response => response.json()).then(data => this.setState({ pessoas: data.results }))
  */}

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
