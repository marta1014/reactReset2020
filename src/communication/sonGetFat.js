import React, { Component } from 'react';
// yarn add prop-types 用于props校验
import propTypes from 'prop-types'

class SonGetFat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'information from child component'
        }
        console.log('1constructor 初始化')
    }
    componentDidMount() { console.log('4DidMount dom渲染完毕 组件挂载完毕') }
    // componentWillMount() { console.log('2WillMount 将要挂载') }
    componentDidUpdate(prevProps, prevState) { console.log('DidUpdate', prevProps, prevState) }
    componentWillUnmount() { console.log('WillUnmount 卸载时') }
    handleClick = () => {
        this.props.getMsg(this.state.msg)
    }
    render() {
        return (
            <div>
                <h3>{this.props.share}</h3>
                {/* <h2>{this.props.brotherMsg}</h2> */}
                <button onClick={this.handleClick}>点击</button>
            </div>
        );
    }
}

SonGetFat.propTypes = {
    getMsg:propTypes.func.isRequired
}
SonGetFat.defaultProps = {
    colors:[2,3,4]
}

export default SonGetFat;