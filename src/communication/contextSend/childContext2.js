import React, { Component } from 'react';
import Child3 from './childContext3'
class Child2 extends Component {
    
    render() { 
        return ( 
            <div>
                <div>儿子贝尔</div>
                <hr />
                <Child3 />
            </div>
         );
    }
}
 
export default Child2;