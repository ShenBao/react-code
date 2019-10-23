import 'component/common.scss';
import './Main.scss';

import React from 'react';

import { connect } from 'react-redux';

import NavHeader from 'component/NavHeader/NavHeader';

import { Route, withRouter, NavLink } from 'react-router-dom';

import Menu from '../Menu/Menu';
import Comment from '../Comment/Comment';
import Restanurant from '../Restanurant/Restanurant';

class Main extends React.Component {
    constructor(props) {
        super(props);

    }
    changeTab(){

    }
    renderTabs(){
        let tabs = this.props.tabs;
        return tabs.map((item)=>{
            return (
                <NavLink activeClassName="active" onClick={()=>this.changeTab(item)} replace={true} to={'/' + item.key} key={item.key} className="tab-item">{item.name}</NavLink>
            );
        });
    }
    render(){
        let poiName = this.props.poiInfo.poi_info ? this.props.poiInfo.poi_info.name : '';
        return (
            <div className="detail">
                <NavHeader title={poiName}/>
                <div className="tab-bar">
                    {this.renderTabs()}
                </div>

                <Route exact path="/menu" component={Menu}/>
                <Route path="/comment" component={Comment}/>
                <Route path="/restanurant" component={Restanurant}/>
                {this.props.showChooseContent ? <div className="mask"></div> : null}
            </div>
        );
    }
}

export default withRouter(connect(
    state =>({
        tabs: state.tabReducer.tabs,
        showChooseContent: state.menuReducer.showChooseContent,
        poiInfo: state.menuReducer.poiInfo
    })
)(Main));