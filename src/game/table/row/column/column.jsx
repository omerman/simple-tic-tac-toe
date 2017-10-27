import React, { Component, PropTypes } from 'react';

export const VALUE = {
  EMPTY: -1,
  O: 0,
  X: 1
};

export default class Column extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.oneOf(Object.keys(VALUE).map(key => VALUE[key]))
  }

  handleClick = this.handleClick.bind(this);

  handleClick() {
    this.props.onClick();
  }

  render() {
    const { value } = this.props;
    return (
      <div onClick={this.handleClick}>
        {value}
      </div>
    );
  }
}
