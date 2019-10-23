import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from './store/';

class Header extends Component {
  render () {
    const {login, handleLogout, handleLogin} = this.props;

    return (
      <div>
        <Link to="/">Home</Link>
        {'  '}
        {login
          ? <Fragment>
              <Link to="/list">List</Link>
              {'  '}
              <span onClick={handleLogout}>Logout</span>
            </Fragment>
          : <Fragment>
              <span onClick={handleLogin}>Login</span>
            </Fragment>}
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.header.login,
});

const mapDispatchToProps = dispatch => ({
  handleLogin () {
    dispatch (actions.login ());
  },
  handleLogout () {
    dispatch (actions.logout ());
  },
});

export default connect (mapStateToProps, mapDispatchToProps) (Header);
