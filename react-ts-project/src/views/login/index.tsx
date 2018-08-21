import * as React from 'react';
import './style.scss'

class Login extends React.Component {

    public render() {

        return (
            <div className="login">
                <div className="content">
                    <h3>登录</h3>
                    <div className="input">
                        <input type="text" placeholder="手机号"/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="密码"/>
                    </div>
                    <button>登录</button>
                </div>
            </div>
        );
    }

}

export default Login;