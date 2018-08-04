import React, { Component } from 'react';

class TestComponent extends Component {

    // props更新时才出发
    componentWillReceiveProps(props) {
        console.log('TestComponent componentWillReceiveProps', props);
    }

    componentWillUnmount() {
        console.log('TestComponent componentWillUnmount')
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

export default TestComponent;
