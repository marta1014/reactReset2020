import React, { Component } from 'react';
import Child2 from './childContext2'
import valContext from './valContext'
/**
 * 1. 
 */

const { Provider } = valContext  //=> 用于下面也可
// console.log(valContext, 'context obj')


class Child1 extends Component {

    render() {
        return (
            <Provider value="hi 狗逼 trump 此消息来自跨组件通讯 context">
                <div>
                    <h2>贝尔</h2>
                    <Child2 />
                </div>
            </Provider>
        );
    }
}

export default Child1;