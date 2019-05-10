import React from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, Alert, Text } from 'react-native';
import Tabs from './config/routes'
 export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
    
  render() {
    return (
      <Tabs/>
    );
  }
}
