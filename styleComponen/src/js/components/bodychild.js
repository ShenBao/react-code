import React from 'react';

export default class BodyChild extends React.Component{
  constructor(){
    super();
    this.state ={
      miniHeader: false //默认加载的时候还是高（不是 mini）的头部
    };
  }
  render(){
    const styleComponentHeader = {
			p: {
				backgroundColor: "#333333",
				color: "#FFFFFF",
				"padding-top": (this.state.miniHeader) ? "3px" : "15px",
				paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
			},
			//还可以定义其他的样式
		};
    return(
      <div>
        <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
        <p style={styleComponentHeader.p}>{this.props.userid} {this.props.username} {this.props.id}</p>
      </div>
    )
  }

}
