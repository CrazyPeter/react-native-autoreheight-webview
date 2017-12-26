'use strict';

import React, {Component} from 'react';
import AutoResizeHeightWebView from './AutoResizeHeightWebView';
import {
    ScrollView,
    StyleSheet, Text, TouchableOpacity,
    View,
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

class Example extends Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }

    renderWebView(){
        return (
            <AutoResizeHeightWebView
                AnimationDuration={500}
                source={{uri: 'http://www.ftchinese.com/story/001075607'}}/>)
    };

    render() {
        return (
            <ScrollView style={{backgroundColor: 'white', flex: 1}}>
                <Text style={styles.instructions}>
                    Top
                </Text>
                {this.renderWebView()}
                <Text style={styles.instructions}>
                    Bottom
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    instructions: {
        fontSize: 17,
        lineHeight: 40,
        width: width,
        marginTop: 10,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button:{
        fontSize: 17,
        lineHeight: 40,
        width: width,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#777E83',
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});


export default Example;