import React, { Component } from 'react';
import ValContext from './valContext'

class Child3 extends Component {

    render() {
        return (
            <div>
                <h3>孙子贝尔</h3>
                <hr />
                <ValContext.Consumer>
                    {(data) => <h5>{data}</h5>}
                </ValContext.Consumer>
            </div>
        );
    }
}

export default Child3;