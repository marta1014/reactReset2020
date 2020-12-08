import React, { Component } from 'react';
import SonGetFat from './sonGetFat'
import SonGetFn from './sonGetFatFn'
class Father extends Component {
    state = {
        toSon: 'msg from father',
        toSonsStatus: 30
    }
    getMsgFromChild = msg => {
        console.log(msg, 'msg from child')
    }
    // sendToBro = () => {
    //     this.setState({
    //         toSonsStatus: this.state.toSonsStatus + 2
    //     })
    // }
    render() {
        return (
            <div>father
                <SonGetFat share={this.state.toSon} getMsg={this.getMsgFromChild} />
                <SonGetFn share={this.state.toSon}/>
            </div>
        );
    }
}

export default Father;