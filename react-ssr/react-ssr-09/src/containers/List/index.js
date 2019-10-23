import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {getList} from './store/actions';
import withStyle from '../../withStyle';
import style from './style.css';

class List extends Component {
  componentDidMount () {
    const {list} = this.props;
    if (!list.length) {
      this.props.getList ();
    }
  }

  getList () {
    const {list} = this.props;
    return list.map (item => {
      return <li key={item.id}>{item.title}</li>;
    });
  }

  render () {
    const {login} = this.props;

    if (!login) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <Helmet>
          <title>
            List - React SSR
          </title>
          <meta name="descrption" content="这是 React SSR 的 List 页面, 仅在登录后可见" />
        </Helmet>
        <div className={style.list}>
          <h1>List</h1>
          <ol>
            {this.getList ()}
          </ol>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  login: state.header.login,
  list: state.list.list,
});

const mapDispatchToProps = dispatch => ({
  getList () {
    dispatch (getList ());
  },
});

const ExportList = connect (mapStateToProps, mapDispatchToProps) (
  withStyle (List, style)
);

ExportList.loadData = store => {
  return store.dispatch (getList ());
};

export default ExportList;
