import React, { Component, PropTypes } from 'react';
import Column from './column/column.jsx';

export default class Row extends Component {
  static propTypes = {
    onColumnClick: PropTypes.func.isRequired,
    columns: PropTypes.array.isRequired
  };

  handleColumnClick = this.handleColumnClick.bind(this);

  handleColumnClick(index) {
    this.props.onColumnClick(index);
  }

  renderColumn(cellValue, index) {
    return <Column key={index} value={cellValue} onClick={() => { this.handleColumnClick(index); }} />;
  }

  render() {
    const { columns } = this.props;

    return (
      <div>
        {columns.map(this.renderColumn.bind(this))}
      </div>
    );
  }
}
