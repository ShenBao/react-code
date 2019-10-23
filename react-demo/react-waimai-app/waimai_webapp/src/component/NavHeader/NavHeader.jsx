import './NavHeader.scss';

import React from 'react';
// import jsinvoke from 'component/jsapi';

/**
 * @constructor <NavHeader title={string}/>
 * @description 导航栏
 */
class NavHeader extends React.Component {
    goBack(){
        window.history.back();
        // jsinvoke({
        //     cmd: 'goBack',
        //     data: {}
        // });
    }
    render(){
        return (
            <div className="nav">
                <div onClick={()=>this.goBack()} className="back-icon"></div>
                <h4 className="title">{this.props.title}</h4>
            </div>
        );
    }
}

export default NavHeader;