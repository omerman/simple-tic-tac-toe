import React, { Component, PropTypes } from 'react';
import Row from './row/row.jsx';

export default class Table extends Component {

  static propTypes = {
    size: PropTypes.number.isRequired
  };

  renderRows() {
    const { size } = this.props;
    return new Array(size).fill(undefined).map((_, index) => {
      return <Row columns={size} key={index} />;
    });
  }

  render() {
    return (
      <div>
        { this.renderRows() }
      </div>
    );
  }
}
