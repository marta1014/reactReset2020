import React, { Component } from 'react';
import LoginBtn from '../fnComponent/btnLogin'
import LogoutBtn from '../fnComponent/btnLogout'
class BtnShow extends Component {
    state = {
        toggleBtnShow: false
    }
    btnChange = () => {
        const { toggleBtnShow } = this.state
        if (toggleBtnShow) {
            return <LoginBtn />
        }
        return <LogoutBtn />
    }
    handleBtnChange = () => {
        this.setState({
            toggleBtnShow: !this.state.toggleBtnShow
        })
    }
    render() {
        return (
            <div>
                <div>{this.btnChange()}</div>
                <button onClick={this.handleBtnChange}>点击切换</button>
            </div>
        );
    }
}

export default BtnShow;