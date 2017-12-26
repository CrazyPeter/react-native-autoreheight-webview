/**
 * Created by PeterKong on 2017/12/13.
 */

import React, { Component } from 'react';
import {StyleSheet, View, WebView , Animated} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

//modify webview error:  https://github.com/facebook/react-native/issues/10865
const patchPostMessageJsCode = `
        (${String(function() {
            var originalPostMessage = window.postMessage
            var patchedPostMessage = function(message, targetOrigin, transfer) {
                originalPostMessage(message, targetOrigin, transfer)
            }
            patchedPostMessage.toString = function() {
                return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage')
            }
            window.postMessage = patchedPostMessage
        })})();
`;


class AutoResizeWebView extends React.Component {

    static defaultProps = {
        needAnimate : true,
        AnimationDuration : 500,
        defaultHeight : 100
    };

    constructor(props) {
        super(props);
        this.state = {
            height: props.defaultHeight,
            source: props.source,
        };
        this._animatedValue = new Animated.Value(0);
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.source !== undefined){
            this.setState({
                source: nextProps.source
            });
            this.WebViewResetHeightFunctionJSInsert();
        }
    }

    gotoShow(){
        Animated.timing(this._animatedValue, {
            toValue: 1,
            duration: this.props.AnimationDuration
        }).start();
    }

    //insert ResizeHeight JS
    WebViewResetHeightFunctionJSInsert() {
        let jsstr = `
        window.location.hash = 1;
        window.postMessage("height:"+document.body.scrollHeight.toString());`;

        setTimeout(() => {
            this.webview && this.webview.injectJavaScript(jsstr);
            this.props.needAnimate ? this.gotoShow() : null;
        }, 500);
    }

    getMessageFromWebView(event){
        console.log("getMessageFromWebView");
        console.log(event);

        //autoResize
        let resetHeight = (message)=>{
            let height = message.substr(7);
            this.setState({
                height:(parseInt(height))
            })
        };

        let message = event.nativeEvent.data;

        if(message.indexOf('height') === 0){
            resetHeight(message);
        }

    }

    render(){
        return (
            <Animated.View style={{height:this.state.height,opacity: this.props.needAnimate ? this._animatedValue : 1}}>
                <WebView ref={e => this.webview=e}
                         source={this.state.source}
                         bounces={true}
                         javaScriptEnabled
                         injectedJavaScript={patchPostMessageJsCode}
                         onLoadEnd={()=>{
                             this.WebViewResetHeightFunctionJSInsert();
                         }}
                         style={[{width:width,height:this.state.height},this.props.style]}
                         scrollEnabled={false}
                         automaticallyAdjustContentInsets={true}
                         scalesPageToFit={true}
                         onMessage={this.getMessageFromWebView.bind(this)}>
                </WebView>
            </Animated.View>
        );
    }       
}

const styles = StyleSheet.create({

});

module.exports = AutoResizeWebView;