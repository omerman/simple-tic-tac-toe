import React, { Component, PropTypes } from 'react';
import Row from './row/row.jsx';

export default class Table extends Component {

  static propTypes = {
    board: PropTypes.arrayOf(PropTypes.array),
    onCellClick: PropTypes.func.isRequired
  };

  handleColumnClick = this.handleColumnClick.bind(this);

  handleColumnClick(columnIndex, rowIndex) {
    this.props.onCellClick(columnIndex, rowIndex);
  }

  renderRows() {
    const { board } = this.props;
    return new Array(board.length).fill(undefined).map((_, index) => {
      return (
        <Row
          columns={board[index]}
          key={index}
          onColumnClick={(columnIndex) => this.handleColumnClick(columnIndex, index)}
        />
      );
    });
  }

  render() {
    return (
      <div className="table">
        { this.renderRows() }
      </div>
    );
  }
}
