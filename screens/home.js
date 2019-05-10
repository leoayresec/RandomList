
import React from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, Alert, Text } from 'react-native';
import {
  primaryColor,
  textIcons,
  titleStyle,
  normalText,
  subTitles,
  fonts,
} from '../config/styles';
import PessoaRandom from '../components/PessoaRandom';
import axios from 'axios';

// create a component
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          header : 'Lista de Contados',
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
        renderHeader() {
          return (
           <View style={{ width: '100%',
           height: 50,
           backgroundColor: '#606070',}}>
           <Text style={{textAlign: 'center', paddingTop:10, fontSize:20}}>{this.state.header}</Text>
           </View>
         )
       }
       _onPress = (user) =>{

        this.props.navigation.navigate('detalhePessoa', user)

       }
      render() {
        return (
          <View style={styles.container}>
            <FlatList
              data={this.state.pessoas}
              ListHeaderComponent={this.renderHeader()}
              renderItem={({ item }) => (
                <PessoaRandom
                  first={item.name.first}
                  last={item.name.last}
                  gender={item.gender}
                  age={item.dob.age}
                  uri={item.picture.thumbnail}
                  email={item.email}
                  phone ={item.phone}
                  onPress={()=>this._onPress(item)}
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
        position: "relative",
        paddingTop: 30
      },
    });
    