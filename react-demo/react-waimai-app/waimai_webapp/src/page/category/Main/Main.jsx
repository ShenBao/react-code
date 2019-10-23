import 'component/common.scss';
import React from 'react';

import { connect } from 'react-redux';


import NavHeader from 'component/NavHeader/NavHeader';
import Header from '../Header/Header';
import ContentList from '../ContentList/ContentList';


class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){

        return (
            <div className="category">
                <NavHeader title="分类"/>
                <Header />
                <ContentList />
            </div>
        );
    }
}

export default connect(
    // state =>({
        
    // })
)(Main);