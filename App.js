/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator }  from  'react-navigation';

import Example from './Example';
import Example2 from './Example2';

import {
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';

class App extends Component<> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to AutoResizeWebView!
                </Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Example');
                }}>
                    <Text style={styles.instructions}>
                        Basic ResizeHeight
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Example2');
                }}>
                    <Text style={styles.instructions}>
                        Manual ResizeHeight
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


let navigat = StackNavigator({
    HomeView: {
        screen: App
    },
    Example:{
        screen: Example
    },
    Example2:{
        screen: Example2
    }
});


module.exports = navigat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
      marginBottom:80
  },
  instructions: {
      fontSize: 17,
      lineHeight:40,
      width:250,
      borderRadius:10,
      marginTop:10,
      borderWidth:1,
      borderColor:'#777E83',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
