/**
 * Created by PeterKong on 2017/12/13.
 */

import React, { Component } from 'react';
import {StyleSheet, Text, Image, View, Platform, TouchableOpacity, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer'

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

class MyImageViewer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          modalVisible:false,
          pictures :props.pictures
      };
      this.selectedIndex = 0;
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.pictures !== undefined){
            this.setState({
                pictures :nextProps.pictures
            });
        }
    }

    showImageWithIndex(index){
        this.selectedIndex = index;
        this.setState({
            modalVisible : true
        })
    }

    render(){
        return (
            <Modal
                animationType={"fade"}
                transparent={false}
                onRequestClose={() => {this.setState({modalVisible:false})}}
                visible={(this.state && this.state.modalVisible)}>
                <ImageViewer imageUrls={this.state.pictures}
                             index={this.selectedIndex}
                             onCancel={()=>{
                                 this.setState({
                                     modalVisible:false
                                 })
                             }} />
            </Modal>
        );
    }
}


module.exports = MyImageViewer;