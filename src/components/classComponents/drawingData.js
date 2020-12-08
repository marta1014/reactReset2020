import React, { Component } from 'react';
import ForDrawing from '../fnComponent/forDrawing'
class Drawing extends Component {
    state = {
        arrMsg:[2,4,6,8]
    }
    render() { 
        return ( 
            <div>
                <ForDrawing list={this.state.arrMsg}/>
            </div>
         );
    }
}
 
export default Drawing;