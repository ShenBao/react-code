import * as React from 'react';
import './style.scss'

class Register extends React.Component {

    public render() {

        return (
            <div className="register">
                 <div className="content">
                    <h3>注册</h3>
                    <div className="input">
                        <input type="text" placeholder="你的昵称"/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="手机号"/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="设置密码"/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="确认密码"/>
                    </div>
                    <button>注册</button>
                </div>
            </div>
        );
    }

}

export default Register;