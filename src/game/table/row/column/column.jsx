import React, { Component, PropTypes } from 'react';
import { ColumnValue } from 'src/game/game.jsx';

export default class Column extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.number
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
