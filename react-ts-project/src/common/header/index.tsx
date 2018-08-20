import * as React from 'react';
import './style.scss'

class Header extends React.Component {

    public render() {

        return (
            <div className="header">
                <h1 className="title">React</h1>
                <button className="register">注册</button>
                <button className="login">登录</button>
                <button className="signout">退出</button>
            </div>
        );
    }

}

export default Header;