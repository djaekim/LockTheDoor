import React from 'react';
import { StyleSheet, Text, View, NetInfo, TouchableHighlight, TouchableOpacity, Alert, Header } from 'react-native';

import UserSetup from './components/UserSetup';




export default class App extends React.Component {

  state = {
    error: null,

  };




  render() {
    return (
      <View style={styles.container} >
        <UserSetup/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: { borderRadius: 5, marginBottom: 5, },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 100

  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 10,
  }
});

