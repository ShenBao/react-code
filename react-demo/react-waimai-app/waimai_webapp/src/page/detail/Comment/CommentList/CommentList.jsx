import './CommentList.scss';

import React from 'react';

import { connect } from 'react-redux';

import CommentItem from './CommentItem/CommentItem';

import ScrollView from 'component/ScrollView/ScrollView.jsx';
import { getListData } from '../../actions/commentAction';
/**
 * 评论列表
 * @description <CommentList />
 */
class CommentList extends React.Component {

    renderList(){
        let list = this.props.commentList;
        return list.map((item, index)=>{
            return <CommentItem key={index} data={item}></CommentItem>
        })
    }
    onLoadPage(){
        this.props.dispatch(getListData({

        }));
    }
    render(){

        return (
            <div className="comment-list">
                <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={0}>
                    {this.renderList()}
                </ScrollView>
                
            </div>
        );
    }
}

export default connect(
    state => ({
        commentList: state.commentReducer.commentList
    })
)(CommentList);

