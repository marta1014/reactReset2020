import React, { Component } from 'react';
import Mouse from './mouse'
class RauseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    mouse = data => {
        return (
            <div>
                <h1>鼠标位置：{data.x},{data.y}</h1>
                {/* <div className="face" style={{ top: data.y, left: data.x }}>🥰</div> */}
            </div>
        )
    }
    render() { 
        return ( 
            <div>
                <h1>组件复用示例</h1>
                <Mouse send={this.mouse}/>
            </div>
         );
    }
}
 
export default RauseComponent;