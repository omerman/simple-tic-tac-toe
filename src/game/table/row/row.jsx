import React, { Component, PropTypes } from 'react';
import Column from './column/column.jsx';

export default class Row extends Component {
  static propTypes = {
    columns: PropTypes.number.isRequired
  };

  render() {
    const { columns } = this.props;

    return (
      <div>
        {new Array(columns).fill(undefined).map((_, index) => <Column key={index} />)}
      </div>
    );
  }
}
