import React from 'react';
import logoImg from '../../img/100.png';
export default class MobileHeader extends React.Component {
	render() {
		return (
      <div id="mobileheader">
        <header>
          <img src={logoImg} alt="logo"/>
          <span>ReactNews</span>
          <p>this is mobile_header</p>
        </header>
      </div>
		);
	};
}
