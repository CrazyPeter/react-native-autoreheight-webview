[![Version](http://img.shields.io/npm/v/react-native-autoreheight-webview.svg?style=flat-square)](https://npmjs.org/package/aframe-forcegraph-component)
[![License](http://img.shields.io/npm/l/react-native-autoreheight-webview.svg?style=flat-square)](https://npmjs.org/package/aframe-forcegraph-component)

# react-native-autoreheight-webview

An auto resize content height webview for React Native.  <br>
Pure JavaScript,and easy to use.  
(rn >= 0.44)
<br>


## install

>yarn add react-native-autoreheight-webview 

or
>npm install react-native-autoreheight-webview 

## Demo1
![showtime1](https://github.com/CrazyPeter/react-native-autoreheight-webview/blob/master/demo1.gif)

see more in [Example.js](https://github.com/CrazyPeter/react-native-autoreheight-webview/blob/master/Example.js)

## Demo2
![showtime1](https://github.com/CrazyPeter/react-native-autoreheight-webview/blob/master/demo2.gif)

see more in [Example2.js](https://github.com/CrazyPeter/react-native-autoreheight-webview/blob/master/Example2.js)

## Basic Usage

```javascript
<AutoResizeHeightWebView
                defaultHeight={200}
                style={{backgroundColor:'white',width:300}}
                AnimationDuration={500} 
                source={{uri: 'http://www.ftchinese.com/story/001075607'}}/> 
```

## Props

| props name | default  | desciption |
| --- | --- | --- |
| defaultHeight | 100 | default Height |
| style | {} | webviewStyle |
| needAutoResetHeight | true | you can reset Height manually |
| AnimationDuration | 500 | animation duration |
| source | null | just like ReactNative's Webview |
| needAnimate | true | show animate or not when resetting height |

And all props in React Native's **WebView** Component

## Functions
| function name | desciption |
| --- | --- |
|resetHeight|reset height to show all manually|
|resetSmallHeight|reset Height to default height manually|



<br>
If it helps you,please give it a star!

### Feel free to add issues or feature requests


