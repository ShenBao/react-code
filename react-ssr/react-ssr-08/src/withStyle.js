import React, {Component} from 'react';

export default (DecoratedCopmonent, styles) => {
  return class NewComponent extends Component {
    componentWillMount () {
      if (this.props.staticContext) {
        this.props.staticContext.css.push (styles._getCss ());
      }
    }
    render () {
      return <DecoratedCopmonent {...this.props} />;
    }
  };
};
