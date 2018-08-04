import React,{Component} from 'react';

import { Icon } from 'antd';


export default class extends Component{

    render(){
        return(
            <div>
                <Icon type="link" />
                <Icon type="step-forward" />
                <Icon type="fast-backward" />
            </div>
        )
    }

}
