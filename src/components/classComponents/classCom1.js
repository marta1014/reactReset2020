import React, { Component } from 'react';

class ClassCom1 extends Component {
    num = 1
    state = {
        valNum:0,
        inputVal:''
    }
    addNum = () => {
        this.num += 1
        this.setState({
            valNum: this.state.valNum + 1
        })
    }
    inputValChange = e => {
        this.setState({
            inputVal : e.target.value
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.valNum}</div>
                <div>
                    <input value={this.state.inputVal} onChange={this.inputValChange}></input>
                </div>
                <button onClick={this.addNum}>点击</button>
            </div>
        )
    }
}

export default ClassCom1;