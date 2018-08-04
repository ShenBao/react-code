import React,{Component} from 'react';

import { Button } from 'antd';


export default class extends Component{

    render(){
        return(
            <div>
                
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>

                <Button type="primary" ghost>Primary</Button>
                <Button ghost>Default</Button>
                <Button type="dashed" ghost>Dashed</Button>
                <Button type="danger" ghost>danger</Button>

            </div>
        )
    }

}
