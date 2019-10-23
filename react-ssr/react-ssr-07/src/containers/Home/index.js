import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getHomeList} from './store/actions';
import style from './style.css';

import withStyle from '../../withStyle';

class Home extends Component {
  constructor (props) {
    super (props);
    this.state = {
      count: 1,
    };
  }

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
    const {count} = this.state;
    return (
      <div className={style.home}>
        <h1>React-SSR</h1>
        <p>name: {this.props.name} </p>
        <button
          onClick={() => {
            this.setState ({
              count: count + 1,
            });
            console.log (Date.now ());
          }}
        >
          事件测试
        </button>
        <span> state count: {count}</span>
        <br />
        <p>异步接口测试：</p>
        <ol>
          {this.getList ()}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.list,
});

const mapDispatchToProps = dispatch => ({
  getHomeList () {
    dispatch (getHomeList ());
  },
});

const ExportHome = connect (mapStateToProps, mapDispatchToProps) (
  withStyle (Home, style)
);

ExportHome.loadData = store => {
  return store.dispatch (getHomeList ());
};

export default ExportHome;
