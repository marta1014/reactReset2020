import React, { Component } from 'react';

class World extends Component {
    // constructor(props) {
    //     super(props)
    // };
    state = {
        arr: [2, 3, 4],
        isPerson: false,
        userName: '周思涵',
        noName: '未知用户'
    }
    handleClick = (params) => {
        console.log(params)
    }

    render() {
        return (
            <div>
                <h1>world组件特朗普狗 </h1>
        <div>{this.props.info}</div>
                <button onClick={() => { this.handleClick(this.state.arr) }}>点击黄毛狗</button>
            </div>
        );
    }
}

export default World;