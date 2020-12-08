import React, { Component } from 'react';

class Mouse extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    state = {
        x: '',
        y: ''
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.mouseMove)
    }
    mouseMove = e => {
        this.setState({
            x: e.screenX,
            y: e.screenY
        })
    }
    render() {
        return (
            <div>
                {/* onMouseMove={this.mouseMove} */}
                {/* 组件内部的mousemove事件和外部的window的mousemove事件区别 */}
                <h3>mouse组件</h3>
                {/* <div>mouse 组件的坐标{this.state.x},{this.state.y}</div> */}
                <div>
                    {/*
                    使用 `render`prop 动态决定要渲染的内容，
                    而不是给出一个 <Mouse> 渲染结果的静态表示

                    render prop 是因为模式才被称为 render prop ，
                    你不一定要用名为 render 的 prop 来使用这种模式。
                    事实上， 任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”.
                    */}
                    {this.props.send(this.state)}
                </div>

            </div>
        );
    }
}

export default Mouse;