import React, { Component, PropTypes } from 'react';
import Column, { VALUE as CellValue } from './column/column.jsx';

export default class Row extends Component {
  static propTypes = {
    onColumnClick: PropTypes.func.isRequired,
    columns: PropTypes.number.isRequired
  };

  handleColumnClick = this.handleColumnClick.bind(this);

  handleColumnClick(index) {
    this.props.onColumnClick(index);
  }

  renderColumn(index) {
    return <Column key={index} value={CellValue.EMPTY} onClick={() => { this.handleColumnClick(index); }} />;
  }

  render() {
    const { columns } = this.props;

    return (
      <div>
        {new Array(columns).fill(undefined).map((_, index) => this.renderColumn(index))}
      </div>
    );
  }
}
