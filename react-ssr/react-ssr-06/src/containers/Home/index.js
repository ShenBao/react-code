import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getHomeList} from './store/actions';

class Home extends Component {
  componentDidMount () {
    const {list} = this.props;
    if (!list.length) {
      this.props.getHomeList ();
    }
  }

  getList () {
    const {list} = this.props;
    return list.map (item => {
      return <li key={item.id}>{item.title}</li>;
    });
  }

  render () {
    return (
      <div>
        <h1>React-SSR</h1>
        <p>name: {this.props.name} </p>
        <button
          onClick={() => {
            console.log (Date.now ());
          }}
        >
          事件测试
        </button>

        <br />
        <p>异步接口测试：</p>
        <ol>
          {this.getList ()}
        </ol>
      </div>
    );
  }
}

Home.loadData = store => {
  return store.dispatch (getHomeList ());
};

const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.list,
});

const mapDispatchToProps = dispatch => ({
  getHomeList () {
    dispatch (getHomeList ());
  },
});

export default connect (mapStateToProps, mapDispatchToProps) (Home);
