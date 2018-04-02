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

const htmlString = `管理不是晋升，放弃管理也并不是去放弃什么地位。
编者按：对于许多人来说，尤其是从事技术岗位的人来说，几年的工作之后可能就会感觉自己进入瓶颈期。许多人在面对瓶颈期时会想要转到管理岗位，他们认为这才是一种职位的晋升。本文作者 mipsytipsy 认为，管理并不是晋升，只是一种职位的转换，她在本文中倡导了这样一种职业道路：开始做工程师，然后在同一家公司做经理；跳槽到新公司，做工程师，再做经理；再跳槽，开启另一个工程师/经理的钟摆式轮回。她提出让这种轮回式职业道路成为一种有意的选择，一种很棒的生活方式。
最近我一直在为一些人提供职业咨询，我发现，许多人的内心想法是这样的：“我是一名高级工程师，但我正在考虑去做一名管理人员。我真的很喜欢工程，但我觉得我只是在一遍又一遍地解决同样的问题，而其实真正的问题是人的问题。我必须成为一名管理人员才能实现晋升，我希望转型之后，一切不要太糟糕，因为我听说会比较糟糕。”
我想写这篇文章已经有一段日子了，有很多想法想与大家分享，但最开始，我想说：让只有做了管理人员才算是晋升这个想法见鬼去吧；让只能选择一条“道路”然后一成不变的想法也见鬼去吧。
“兼而有之，来回摆动”：
最好的前线工程管理人员是那些离开实际操作工作不超过 2-3 年，曾经全身心铺在前线工作的人员，与此同时最好的个人技术主管（tech lead）又是那些曾经做过管理工作的人。归根到底，最好的技术领域领导人往往是两者兼而有之，来来回回，像钟摆一样不停摆动。
我自己就曾有过几次这样的体验，先是被招聘来做早期的基础设施工程工作，然后建立堆栈，创建团队，再到管理，之后……离开这一工作，再次从头开始。我感觉焦虑，感觉不安，我感觉知道自己在做什么……（这是表示有什么事不对的一个迹象）。
对于那些喜欢早期阶段初创企业或者是由注意力缺失症的人来说，这是一个不错的循环。但我觉得人们并没有把这看作是一条职业道路，所以在这里我是想提倡这一循环，让它成为一种有意的选择，一种很棒的生活方式。

作为一名经理（技术项目）
从内部人员提升为管理者意味着管理层看到了你们身上所具有的那些闪光的技能。你获得了他们的信任，同时在新职位上也要开始与自己在管理领域的不足和欠缺作斗争。这也是你可以实现管理人员+技术领导者这一短暂荣耀组合的唯一途径。这是一个非常不稳定的组合，因为随着时间的推移，你的工程技能和敏锐度会逐渐衰退。
你一次只能提升一样：工程或是管理二选一。如果你是一名经理，那你的工作就是让自己的管理水平越来越高。不要试图抓着以前在工程职位时的荣耀不放。管理是一项会被不断打扰的工作，而优秀的工程师工作则需要屏蔽外界的干扰，所以你无法同时去做这两件截然对立的事情。作为一名管理人员，你的工作是让团队成员随时能够找到自己，随时接受打扰。你的工作是选择分配具有挑战性的任务，以便你们团队的工程师可以在工程技能方面得到提升。`


class Example extends Component {

    //0 - default animate
    //1 - click more

    static defaultProps = {
        type: 0
    };

    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: 'white', flex: 1}}>
                <Text style={styles.instructions}>
                    Top
                </Text>
                <AutoResizeHeightWebView
                    AnimationDuration={500}
                	style={{backgroundColor:'white',width:300}}
                    source={{html: htmlString}}/>
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