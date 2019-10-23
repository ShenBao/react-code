import React, { Component } from 'react';

class NotFind extends Component {

    componentWillMount() {
        const { staticContext } = this.props
        staticContext && (staticContext.notFind = true)
    }
    render() {

        return (
            <div>
                404, soory, page not find
			</div>
        )
    }
}


export default NotFind
