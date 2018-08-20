import * as React from 'react';
import { connect } from 'react-redux';

import './style.scss'

class Home extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public render() {

        const title = 'title';

        return (
            <div className="home">
                {this.props[title]}
                <p>这是首页</p>

                <h4>使用react实现一个简单的登陆注册功能</h4>
                <h4>要求：</h4>
                <ol>
                    <li>1. 登陆、注册、成功页面之间有路由跳转</li>
                    <li>2. 不使用antd等其它的ui框架</li>
                    <li>3. 使用mock模拟测试数据</li>
                    <li>4. 要有表单验证和提示</li>
                    <li>5. (可选)最好使用typescript</li>
                    <li>6. (可选)最好有单元测试</li>
                </ol>
            </div>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        title: state.home.title,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
