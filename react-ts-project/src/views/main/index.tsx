import * as React from 'react';
import { Route, Redirect } from 'react-router'
import './style.scss'

class Main extends React.Component {

    public render() {

        return (
            <div className="main">
                <h4>main</h4>
                <h4>这是登录之后才能看到的</h4>
            </div>
        );
    }

}

export default Main;