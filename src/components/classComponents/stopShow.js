import React, { Component } from 'react';
// 在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。
// 若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends Component {

    state = {
        showWarning: true
    }

    handleToggleClick = () => {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

export default Page;