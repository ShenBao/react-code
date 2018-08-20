import * as React from 'react';
import './style.scss'

class Error extends React.Component {

    public render() {

        return (
            <div className="error">
                <p>抱歉,你访问的页面不存在</p>
            </div>
        );
    }

}

export default Error;