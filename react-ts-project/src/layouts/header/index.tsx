import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss'

class Header extends React.Component {

    constructor(props: any) {
        super(props);
    }


    public render() {

        let dom = null;

        const login = 'login';

        if (this.props[login]) {
            dom = (
                <button className="signout">退出</button>
            )
        } else {
            dom = (
                <div style={{
                    display: 'inline-block',
                    float: 'right'
                }}>
                    <Link className="register" to="/register" >注册</Link >
                    <Link className="login" to="/login" >登录</Link >
                </div>
            )
        }
        return (
            <div className="header">
                <h1 className="title">React</h1>
                {dom}
            </div>
        );
    }

}


const mapStateToProps = (state: any) => {
    return {
        login: state.login.login,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);