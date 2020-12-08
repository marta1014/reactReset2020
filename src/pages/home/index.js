import React, { Component } from 'react';
class HomePage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    state = {
        title: ''
    }
    getState = () => {
        this.setState({
            title:'HomePage'
        })
    }
    componentDidMount(){
        this.getState()
    }
    render() {
        return (
            <div>
                <h2>rfefrefrefer</h2>
            </div>
        );
    }
}

export default HomePage;